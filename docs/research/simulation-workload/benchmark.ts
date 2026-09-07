// Throwaway cost probe, NOT a production engine or public statistical evaluation.
// Node 24 can execute this erasable TypeScript directly; no external dependencies.
import assert from 'node:assert/strict';
import { cpus, platform, release } from 'node:os';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

type Q = { n: bigint; d: bigint };
const abs = (x: bigint) => x < 0n ? -x : x;
function gcd(a: bigint, b: bigint): bigint {
  a = abs(a); b = abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}
function q(n: bigint, d = 1n): Q {
  if (!d) throw Error('zero denominator');
  if (d < 0n) { n = -n; d = -d; }
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
}
const add = (a: Q, b: Q) => q(a.n*b.d + b.n*a.d, a.d*b.d);
const neg = (a: Q): Q => ({ n: -a.n, d: a.d });
const sub = (a: Q, b: Q) => add(a, neg(b));
const cmp = (a: Q, b: Q) => a.n*b.d - b.n*a.d;
const ZERO = q(0n), TEN = q(10n), START = q(1000n);

// Exact 32x32 multiply using 16-bit limbs; all Number intermediates < 2^53.
function mulhilo(a: number, b: number): [number, number] {
  const al = a & 65535, ah = a >>> 16, bl = b & 65535, bh = b >>> 16;
  const p0 = al*bl;
  const mid = ah*bl + al*bh + Math.floor(p0 / 65536);
  return [(ah*bh + Math.floor(mid / 65536)) >>> 0,
    (((mid & 65535) << 16) | (p0 & 65535)) >>> 0];
}
function philox(c: number[], key: number[]): number[] {
  let [a,b,d,e] = c;
  let [k0,k1] = key;
  for (let r=0;r<10;r++) {
    const [h0,l0]=mulhilo(0xd2511f53,a), [h1,l1]=mulhilo(0xcd9e8d57,d);
    [a,b,d,e]=[(h1^b^k0)>>>0,l1,(h0^e^k1)>>>0,l0];
    k0=(k0+0x9e3779b9)>>>0; k1=(k1+0xbb67ae85)>>>0;
  }
  return [a,b,d,e];
}
class Random {
  session: number; block = 0; lane = 4; words: number[] = []; draws = 0;
  constructor(session: number) { this.session=session; }
  word(): number {
    if (this.lane===4) {
      this.words=philox([this.block>>>0,Math.floor(this.block/2**32),this.session>>>0,Math.floor(this.session/2**32)], [0x12345678,0xabcdef01]);
      this.block++; this.lane=0;
    }
    this.draws++; return this.words[this.lane++];
  }
  bounded(n: number): number {
    const bound=Math.floor(2**32/n)*n;
    let x: number;
    do { x=this.word(); } while(x>=bound);
    return x%n;
  }
  dice(): number { return this.bounded(6)+this.bounded(6)+2; }
}

type Expr = { op: string; children?: Expr[]; value?: Q };
type Env = { balance: Q; list: Q[]; turn: number; instruction: number };
const MAX_COMPONENT = (1n<<256n)-1n;
function boundedQ(n: bigint, d: bigint): Q {
  if (abs(n)>MAX_COMPONENT || abs(d)>MAX_COMPONENT) throw Error('strategy arithmetic overflow');
  return q(n,d);
}
function numberExpr(e: Expr, env: Env): Q {
  switch(e.op) {
    case 'literal': return e.value!;
    case 'balance': return env.balance;
    case 'list': return env.list[(env.turn+env.instruction)%env.list.length];
    case 'neg': return neg(numberExpr(e.children![0],env));
    case 'add': {
      const a=numberExpr(e.children![0],env),b=numberExpr(e.children![1],env);
      return boundedQ(a.n*b.d+b.n*a.d,a.d*b.d);
    }
    case 'divide': {
      const a=numberExpr(e.children![0],env),b=numberExpr(e.children![1],env);
      return boundedQ(a.n*b.d,a.d*b.n);
    }
    default: throw Error('invalid numeric op');
  }
}
function condition(e: Expr, env: Env): boolean {
  if(e.op==='all') return e.children!.every(child=>condition(child,env));
  if(e.op==='ge') {
    const a=numberExpr(e.children![0],env),b=numberExpr(e.children![1],env);
    if(abs(a.n*b.d)>MAX_COMPONENT || abs(b.n*a.d)>MAX_COMPONENT) throw Error('comparison overflow');
    return cmp(a,b)>=0n;
  }
  throw Error('invalid condition');
}
const literal=(n: bigint): Expr=>({op:'literal',value:q(n)});
const instructions: Expr[]=Array.from({length:256},(_,i)=>{
  let e: Expr={op:'ge',children:[
    {op:'divide',children:[{op:'add',children:[{op:'list'},literal(BigInt(i+1))]},literal(7n)]},
    {op:'neg',children:[{op:'balance'}]}
  ]};
  for(let depth=0;depth<8;depth++) e={op:'all',children:[e]};
  return e;
});
// Consecutive Fibonacci components deliberately exercise Euclid's GCD loop.
let fa=1n,fb=1n;
while(fb.toString().length<38) [fa,fb]=[fb,fa+fb];
const smallList=Array.from({length:1024},(_,i)=>q(BigInt(i+1)));
const wideList=Array.from({length:1024},(_,i)=>q(fa+BigInt(i%100)*fb,fb));
function strategy(env: Env, counters: number[]): void {
  for(let i=0;i<instructions.length;i++) {
    env.instruction=i;
    if(condition(instructions[i],env)) counters[i]++;
  }
}

type Result = { net: Q; drawdown: Q; turns: number; tail: number; draws: number; wins: number; losses: number; counter: number; point?: number };
function roulette(session: number, variant: 'flat'|'small'|'wide', pockets: number): Result {
  const rng=new Random(session), counters=new Array(256).fill(0);
  let balance=START,peak=START,drawdown=ZERO,turns=0,wins=0,losses=0;
  const env: Env={balance,list:variant==='wide'?wideList:smallList,turn:0,instruction:0};
  for(let t=0;t<200;t++) {
    if(cmp(balance,TEN)<0n) break;
    if(variant!=='flat') { env.balance=balance; env.turn=t; strategy(env,counters); }
    balance=sub(balance,TEN);
    const index=rng.bounded(pockets);
    const pocket=pockets===38 ? (index===1 ? -1 : index>=2 ? index-1 : 0) : index;
    // Low 1–18 even-money wager. Both 0 and 00 lose.
    if(pocket>=1 && pocket<=18) { balance=add(balance,q(20n)); wins++; } else losses++;
    if(cmp(balance,peak)>0n) peak=balance;
    const fall=sub(peak,balance); if(cmp(fall,drawdown)>0n) drawdown=fall;
    turns++;
  }
  return {net:sub(balance,START),drawdown,turns,tail:0,draws:rng.draws,wins,losses,counter:counters[0]};
}
function pass(session: number): Result {
  const rng=new Random(session);
  let balance=START,peak=START,drawdown=ZERO,point=0,stake=ZERO,turns=0,tail=0,wins=0,losses=0;
  while(turns<200 || point!==0) {
    if(turns<200 && point===0) {
      if(cmp(balance,TEN)<0n) break;
      balance=sub(balance,TEN); stake=TEN;
    }
    const roll=rng.dice();
    let outcome=0;
    if(point===0) {
      if(roll===7 || roll===11) outcome=1;
      else if(roll===2 || roll===3 || roll===12) outcome=-1;
      else point=roll;
    } else if(roll===point) outcome=1;
    else if(roll===7) outcome=-1;
    if(outcome) {
      if(outcome===1) {balance=add(balance,q(20n)); wins++;} else losses++;
      point=0; stake=ZERO;
    }
    const value=add(balance,stake);
    if(cmp(value,peak)>0n) peak=value;
    const fall=sub(peak,value); if(cmp(fall,drawdown)>0n) drawdown=fall;
    if(turns>=200) tail++;
    turns++;
  }
  assert.equal(point,0);
  return {net:sub(balance,START),drawdown,turns:turns-tail,tail,draws:rng.draws,wins,losses,counter:0};
}
// Synthetic legal tape: an established pass-4 commitment survives 10,000 twos,
// then resolves on four. NOT a frequency sample and NOT a Philox random stream.
// The same exact-money valuation work runs on each roll; no strategy/new bets.
function forcedTail(): Result {
  let balance=q(990n), peak=START,drawdown=ZERO,point=4;
  for(let i=0;i<=10000;i++) {
    const roll=i===10000?4:2;
    if(roll===point) {balance=add(balance,q(20n));point=0;}
    const value=add(balance,point?TEN:ZERO);
    if(cmp(value,peak)>0n) peak=value;
    const fall=sub(peak,value); if(cmp(fall,drawdown)>0n) drawdown=fall;
  }
  assert.equal(point,0);
  return {net:sub(balance,START),drawdown,turns:0,tail:10001,draws:0,wins:1,losses:0,counter:0};
}
const encode=(v: unknown)=>JSON.stringify(v,(_,x)=>typeof x==='bigint'?x.toString():x);
function verify(): void {
  const kats=[
    [[0,0,0,0],[0,0],[0x6627e8d5,0xe169c58d,0xbc57ac4c,0x9b00dbd8]],
    [[0xffffffff,0xffffffff,0xffffffff,0xffffffff],[0xffffffff,0xffffffff],[0x408f276d,0x41c83b0e,0xa20bc7c6,0x6d5451fd]],
    [[0x243f6a88,0x85a308d3,0x13198a2e,0x03707344],[0xa4093822,0x299f31d0],[0xd16cfe09,0x94fdcceb,0x5001e420,0x24126ea1]]
  ];
  for(const [c,k,want] of kats) assert.deepEqual(philox(c,k),want);
  const rand=new Random(42);
  for(let i=0;i<10000;i++) {
    const a=rand.word(),b=rand.word(), product=BigInt(a)*BigInt(b);
    assert.deepEqual(mulhilo(a,b),[Number(product>>32n),Number(product&0xffffffffn)]);
  }
  const count=(e: Expr): number=>1+(e.children??[]).reduce((a,e)=>a+count(e),0);
  assert.equal(instructions.reduce((a,e)=>a+count(e),0),4096);
  const definition=encode({instructions,list:wideList});
  assert(Buffer.byteLength(definition)<2**20);
  assert(wideList.every(x=>x.n.toString().length<=40 && x.d.toString().length<=40));
  assert.deepEqual(add(q(1n,3n),q(1n,6n)),q(1n,2n));
  assert.deepEqual(sub(q(10n),q(21n,2n)),q(-1n,2n));
  for(let i=0;i<4;i++) {
    assert.equal(encode(roulette(i,'flat',37)),encode(roulette(i,'flat',37)));
    const small=roulette(i,'small',37),wide=roulette(i,'wide',37);
    assert.deepEqual(small,wide);
    assert.deepEqual({...small,counter:0},roulette(i,'flat',37));
    assert.equal(small.counter,small.turns);
    assert.equal(encode(pass(i)),encode(pass(i)));
  }
  assert.equal(forcedTail().net.n,10n);
  console.log(encode({verification:'passed',philoxVectors:3,multiplyPairs:10000,instructions:256,expressionNodes:4096,allDepth:8,listEntries:1024,encodedBytes:Buffer.byteLength(definition)}));
}
function run(name: string, sessions: number, sample: number): void {
  const fn=name==='roulette-flat-single'?(s: number)=>roulette(s,'flat',37)
    :name==='roulette-flat-double'?(s: number)=>roulette(s,'flat',38)
    :name==='roulette-envelope-small'?(s: number)=>roulette(s,'small',37)
    :name==='roulette-envelope-wide'?(s: number)=>roulette(s,'wide',37)
    :name==='craps-pass'?pass
    :name==='craps-forced-tail'?forcedTail:null;
  if(!fn) throw Error('unknown case');
  for(let s=0;s<Math.min(sessions,10);s++) fn(s+1000000);
  const cpu=process.cpuUsage(), t=process.hrtime.bigint();
  let turns=0,tail=0,draws=0,maxTail=0,maxTailSession=0,wins=0,losses=0,counter=0,net=ZERO,dd=ZERO;
  const tails: number[]=[];
  for(let s=0;s<sessions;s++) {
    const r=fn(s);turns+=r.turns;tail+=r.tail;draws+=r.draws;wins+=r.wins;losses+=r.losses;counter+=r.counter;
    net=add(net,r.net);dd=add(dd,r.drawdown);tails.push(r.tail);
    if(r.tail>maxTail) {maxTail=r.tail;maxTailSession=s;}
  }
  const seconds=Number(process.hrtime.bigint()-t)/1e9, usage=process.cpuUsage(cpu);
  tails.sort((a,b)=>a-b);
  console.log(encode({name,sample,sessions,seconds,msPerSession:seconds*1000/sessions,cpuSeconds:(usage.user+usage.system)/1e6,maxRssKiB:process.resourceUsage().maxRSS,turns,tail,tailP95:tails[Math.floor(.95*(sessions-1))],maxTail,maxTailSession,draws,wins,losses,counter,net,drawdownSum:dd}));
}
const [command,sessionsArg='1000',sampleArg='0']=process.argv.slice(2);
if(command==='verify') verify();
else if(command==='environment') console.log(encode({node:process.version,v8:process.versions.v8,cpu:cpus()[0].model,logicalCpus:cpus().length,platform:platform(),kernel:release(),sourceSha256:createHash('sha256').update(readFileSync(import.meta.filename)).digest('hex')}));
else run(command,Number(sessionsArg),Number(sampleArg));
