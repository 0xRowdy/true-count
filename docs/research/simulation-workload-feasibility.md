# Simulation workload feasibility benchmark

Research for [Simulation workload feasibility benchmark](https://github.com/0xRowdy/true-count/issues/26), measured 2026-09-07. This is a finite local cost investigation, not a production simulator, provider selection, or public strategy-performance evaluation.

## Finding

**Cheap game transitions are inexpensive; arbitrary supported strategy expressions are the unresolved budget risk.** Flat roulette measured about **0.061 ms/session**, flat-pass craps including final settlement **0.080 ms/session**, and a synthetic interpreter probe at the accepted structural limits **24.94 ms/session with small values or 867.84 ms/session with large rational values**. The last case projects to **24.1 single-worker hours per 100,000-session profile**.

At an illustrative 200 revisions/month and two equally expensive profile evaluations per revision, the large-rational probe projects to **$694/month on Cloud Run Jobs or $476/month on Fargate**, assuming cloud compute takes the same time as local compute, before startup/I/O/retries and free-tier offsets. These conditional estimates exceed the accepted **$50–100 simulation-compute ceiling**. Even one expensive profile per revision projects to $347/$238 at that volume. This is a concrete trigger for an explicit feasibility/product review, not evidence that all production strategies will cost this much or that an optimized interpreter cannot fit.

The investigation **does not establish three-game production affordability or an absolute worst-case bound**. No complete strategy interpreter or blackjack reference engine exists in this worktree. The stress cases exercise permitted arithmetic/condition shapes with synthetic counter actions. Full action dispatch, conflicts, fallbacks, mutable progression behavior, many simultaneous wagers, statistical analysis and durable service overhead remain unmeasured. Actual cloud timing and dollars have not been measured. Preserve 100,000 complete sessions, all compatible profiles, final settlement, and three-game launch scope pending a live decision.

Accepted inputs: [shared architecture](../decisions/mobile-platform-shared-game-engine.md), [community evaluation contract](https://github.com/0xRowdy/true-count/issues/6#issuecomment-5557497606), and [capacity and operating budget](https://github.com/0xRowdy/true-count/issues/19#issuecomment-5564607629).

## Reproducible artifact and method

- [benchmark.ts](simulation-workload/benchmark.ts): dependency-free erasable TypeScript executed by Node 24.20.0, V8 13.6.233.17-node.53. Node 24 is LTS; the machine's default Node 26 was not used. [Node release status](https://nodejs.org/en/about/previous-releases), [native TypeScript execution](https://nodejs.org/docs/latest-v24.x/api/typescript.html).
- [run.py](simulation-workload/run.py): runs each case sequentially in a fresh Node process, with three timing repetitions. Set `BENCH_NODE` to the Node 24 binary. [Raw measurements](simulation-workload/results.jsonl) include source SHA-256, environment, correctness checks, CPU time, peak process RSS and deterministic outcome totals. [Summary](simulation-workload/summary.json) contains derived values; [summarize.py](simulation-workload/summarize.py) verifies repeat identity and regenerates it.
- Hardware: Intel Core i7-7700K at nominal 4.20 GHz, Linux 7.1.9-arch1-2, eight logical CPUs, roughly 32 GiB RAM. One benchmark process/thread at a time; no cloud allocation or dedicated-host isolation. Recorded process CPU time was close to elapsed time. Peak RSS across measured processes was approximately 94–109 MiB; this is not a production memory requirement.
- The downloaded official `node-v24.20.0-linux-x64.tar.xz` matched SHA-256 `2f2c0da162318f0de47665410c7c8c2ed3d36c8f3105de4bbc61176c70a7cbf2` from the [Node distribution checksums](https://nodejs.org/dist/v24.20.0/SHASUMS256.txt).

Run from the research worktree:

```sh
BENCH_NODE=/path/to/node-v24.20.0/bin/node python3 docs/research/simulation-workload/run.py
python3 docs/research/simulation-workload/summarize.py
```

Every timed session starts with 1,000 units and a 10-unit wager; scheduled play has at most 200 opportunities. Results include exact net balance and drawdown with outstanding stakes valued at cost. No rebuys or replacement sessions are introduced. Timing includes session creation, RNG, applicable condition evaluation, exact arithmetic, settlement and in-memory aggregation. It excludes process/module startup, definition construction/validation, warmup, final sorting/JSON output, network, persistence, checkpoint encoding, scheduling and statistical uncertainty calculations. Each process warms up up to ten sessions on separate stream indices. Medians/ranges describe timing repeats, not confidence intervals.

Each repetition replays the **same** session indices and fixed benchmark key. Therefore three timing repeats do not triple the number of independent sampled paths. The published key is solely a reproducibility fixture; production run allocation remains server-controlled. The measured structural probe's 200-session and 10-session batches deliberately avoid spending hours on a throwaway evaluation; scaling those timings to 100,000 is an extrapolation.

## Cases and checks

1. **Flat roulette, both wheel types:** bet low 1–18 each spin, with exact BigInt-backed rational debits/credits. Single-zero samples `[0,1,...,36]`; double-zero samples `[0,00,1,...,36]`. These are actual narrow game/strategy loops, not empty RNG loops.
2. **Interpreter envelope, small/wide arithmetic:** 256 condition/counter instructions, 4,096 expression nodes, eight nested `all` nodes, and a 1,024-entry list. Each condition compares `(list entry + instruction-specific integer) / 7` with negative current balance; all branches are visited for these fixtures. All matching instructions increment bounded counters before the same flat roulette wager. The small list contains integers. The wide list uses fractions derived from consecutive Fibonacci numbers, chosen to make Euclid normalization expensive, with input components no longer than 40 digits. The encoded definition is 206,019 bytes. Runtime arithmetic stays within the 256-bit component guard in these fixtures.
3. **Flat-pass standard craps:** 100,000 sessions of up to 200 scheduled rolls, with both dice generated independently, new pass wagers only on come-out, and outstanding established pass commitments resolved after the horizon. No new discretionary wagers during final settlement.
4. **Engineered long final settlement:** an established pass-4 at the horizon survives 10,000 rolls of two, then wins on four. This is a legal but synthetic outcome tape, timed separately: 10,001 residual settlement/valuation steps and no new bets. It excludes prior play and RNG; it is not a random path sample or a full-session timing.

The interpreter probe is **not** a complete validated strategy schema or worst-case production strategy. Its unary `all` chains and repeated expressions could be optimized; other legal arithmetic and wager behavior could be more expensive. Counter updates are synthetic state actions; legal-action groups and explanation facts are absent. Guards cover these fixtures rather than implementing every accepted parser/evaluator rule. The value of the pair is demonstrating that node count alone does not predict exact-arithmetic cost.

Philox4x32-10 uses the accepted word/key layout and unbiased bounded rejection sampling. Verification passes all three published ten-round vectors and 10,000 32-bit multiplication comparisons against exact BigInt products. Exact fraction examples, replay, identical financial results between flat and stress probes, expression-node count, encoded size, numeric input size and final-tail settlement also pass. References: [Random123 implementation](https://github.com/DEShawResearch/random123/blob/main/include/Random123/philox.h), [known-answer vectors](https://github.com/DEShawResearch/random123/blob/main/tests/kat_vectors). These checks do not certify all engine rules or statistical coverage.

## Measurements

| Case | Sessions or tapes per repetition | Median ms per session/tape | Observed timing range, ms | Time for 100,000 sessions |
| --- | ---: | ---: | ---: | ---: |
| Flat roulette, single zero | 100,000 | 0.06173 | 0.06125–0.06183 | 6.173 s, measured |
| Flat roulette, double zero | 100,000 | 0.06130 | 0.06085–0.06147 | 6.130 s, measured |
| Envelope, small arithmetic | 200 | 24.943 | 24.879–25.101 | 41.57 min, extrapolated |
| Envelope, wide arithmetic | 10 | 867.839 | 864.696–873.604 | 24.107 h, extrapolated |
| Flat-pass craps, including tail | 100,000 | 0.07973 | 0.07971–0.07977 | 7.973 s, measured |
| Forced 10,001-roll tail only | 2,000 | 1.31808 | 1.31305–1.35176 | Not a complete-session estimate |

The sampled craps evaluation contains **20,000,000 scheduled rolls plus 253,548 settlement rolls**: 2.53548 extra rolls per session on average, a 95th-percentile tail of 9 rolls, and a maximum of 32 (session index 27,390). Every sampled session completes. These are results for flat pass, not all supported craps contracts. The observed maximum is not a tail cap.

The forced tape separately measures about **0.132 microseconds per residual valuation step**. It deliberately omits random draws and broader game dispatch, so this is only a settlement microbenchmark. Do not assign its 10,001-roll path a frequency or multiply it into the ordinary monthly workload. Its purpose is to verify that a long commitment is paid after the horizon and to expose the incremental work. Real jobs must checkpoint/resume arbitrarily long valid paths, never cap their outcomes. Launch roulette settles on the spin; the later en-prison variant is outside these cases.

## Primary-source compute prices

Public USD on-demand prices checked 2026-09-07; no commitments, Spot pricing, introductory credits, taxes or provider selection:

| Candidate and region | Allocation | Compute rate | Billing duration |
| --- | --- | ---: | --- |
| AWS Lambda, N. Virginia | x86, 1,024 MB | $0.0000166667/GB-s, plus $0.20/million requests | 1 ms rounding; includes INIT |
| Cloud Run Jobs, Iowa | 1 vCPU, 1 GiB | $0.000018/vCPU-s + $0.000002/GiB-s = $0.000020/s | 100 ms rounding; 60 s minimum per instance |
| Fargate, N. Virginia | Linux/x86, 1 vCPU, 2 GiB | $0.000011244/vCPU-s + $0.000001235/GiB-s = $0.000013714/s | Whole-second rounding; 60 s minimum, image pull through termination |

Sources: [Lambda pricing](https://aws.amazon.com/lambda/pricing/), [INIT billing](https://aws.amazon.com/blogs/compute/aws-lambda-standardizes-billing-for-init-phase/), [Cloud Run pricing](https://cloud.google.com/run/pricing), [Fargate pricing](https://aws.amazon.com/fargate/pricing/).

Lambda at 1,024 MB is not a full-core comparison: 1,769 MB receives one vCPU equivalent, giving a derived 1,024/1,769 ≈ 0.579 entitlement ratio. At 1,769 MB its x86 rate is approximately $0.0000287924/s. Fargate's 1-vCPU minimum memory is 2 GiB. Cloud Run's vCPU is approximately a hardware hyper-thread on variable hardware; none of these configurations promises desktop-equivalent throughput. [Lambda CPU allocation](https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html), [Fargate allocations](https://aws.amazon.com/fargate/pricing/), [Cloud Run runtime](https://docs.cloud.google.com/run/docs/container-contract).

For actual billed durations `t_i` including startup, I/O and all attempts, the specified shapes cost:

```text
Lambda 1,024 MB = sum(ceil(1000*t_i)/1000) * 0.0000166667
                 + request_billing_units * 0.0000002
Cloud Run      = sum(max(60, ceil(10*t_i)/10)) * 0.000020
Fargate        = sum(max(60, ceil(t_i))) * 0.000013714
```

Lambda has a 900-second invocation maximum. Cloud Run CPU job attempts can be configured up to 168 hours. Task limits are scheduling/checkpoint boundaries, not legal settlement limits. [Lambda timeout](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html), [Cloud Run task timeout](https://docs.cloud.google.com/run/docs/configuring/task-timeout).

Compute budgets here exclude orchestration, results/checkpoint storage, logs, analytics, container registry, transfers and public IPv4. The separately planned backend budget must account for shared infrastructure without counting it twice. Free tiers are account-level offsets: Lambda advertises 400,000 GB-s and one million requests monthly; Cloud Run Jobs advertises 240,000 vCPU-s and 450,000 GiB-s monthly, shared across the billing account. At the table's Cloud Run shape those allowances can offset at most $5.22/month. They do not close a hundreds-of-dollars gap. [Lambda pricing](https://aws.amazon.com/lambda/pricing/), [Cloud Run billing/free tiers](https://cloud.google.com/run/pricing).

## Conditional cost model

Let `k = cloud compute seconds / measured local compute seconds`. Values 1, 2 and 4 below are sensitivity assumptions, **not measured factors or confidence bounds**. Add startup, persistence, retries and rounding separately. No cached-result reuse or cancelled-work savings are assumed.

Illustrative per-profile compute at `k=1`, putting all 100,000 sessions in a single container task and applying the 60-second minimum, but adding no startup or service overhead:

| Workload | Cloud Run / profile | Fargate / profile | Cloud Run / completed session |
| --- | ---: | ---: | ---: |
| Flat roulette, either wheel | $0.00120 | $0.000823 | $0.000000012 |
| Envelope, small arithmetic | $0.04989 | $0.03422 | $0.000000499 |
| Envelope, wide arithmetic | $1.73568 | $1.19016 | $0.00001736 |
| Flat-pass craps | $0.00120 | $0.000823 | $0.000000012 |

This single-task arithmetic is a cost illustration, not the proposed scheduling plan. Long evaluations require parallel batches for latency and resumability. Conversely, **one sub-minute task per session** imposes a compute floor of $120 per profile on Cloud Run or $82.284 on Fargate. One hundred sub-minute batches cost $0.12/$0.0823 per profile. Session-level retry must remain independent of task batch size.

Actual monthly work is the sum of **compatible profiles**, not seven profiles for every revision: roulette can contribute two, craps one, blackjack four. Use `roulette_revisions × sum(two roulette profile costs) + craps_revisions × craps_cost + blackjack_revisions × sum(four blackjack profile costs)`, adding actual retried/cancelled work. Blackjack and a representative launch content mix are unmeasured; no total-launch forecast is established.

To show the expensive-case exposure, assume 200 monthly revisions each requiring two profile evaluations at the measured single-zero stress cost. The second profile's stress cost is an explicit equivalence assumption, not separately measured:

| Cloud/local factor | Small-arithmetic Cloud Run | Wide-arithmetic Cloud Run | Wide-arithmetic Fargate |
| --- | ---: | ---: | ---: |
| 1 | $19.95 | $694.27 | $476.06 |
| 2 | $39.91 | $1,388.54 | $952.12 |
| 4 | $79.82 | $2,777.08 | $1,904.25 |

These are compute components before overhead/free tiers. At 100 or 300 revisions, halve or multiply by 1.5. An **additional** launch-week burst of 20–40 such revisions adds $69–139 at `k=1` on Cloud Run; if it is merely a redistribution of the month's revisions, it adds queue pressure but no extra monthly compute. With $90 available before the accepted 90%-of-$100 admission pause, an otherwise small-arithmetic workload can contain only about **10.4%** wide-cost evaluations in this scenario; with $45 before a $50 ceiling, about **3.7%**. These are workload sensitivities, not predicted author behavior.

## Latency and explicit decision handoff

A wide-cost profile needs about 24.1 local-equivalent worker-hours. Ideal perfect splitting therefore needs at least 25 such workers to finish one profile inside an hour at `k=1`, before queueing or overhead. Twenty to forty additional two-profile revisions imply roughly 964–1,929 worker-hours; clearing that work in a day needs about 41–81 continuously effective workers, plus steady arrivals. These are capacity lower-bound calculations, not a concurrency configuration. More workers shorten elapsed time; they do not remove the compute bill. The usual-one-hour/maximum-24-hour targets and per-author in-flight policy are not validated by this benchmark.

**Recommendation for acceptance, not an adopted change:** retain the evidence contract while deciding how to bound and validate costly supported execution. Compare semantics-preserving interpreter improvements and a calibrated runnable-strategy benchmark against explicit product options: raising the budget, tightening accepted numeric/expression capabilities, reducing evaluated publication volume, or changing the execution model. Numeric fast paths, expression simplification and avoiding repeated normalization are hypotheses requiring identical exact results, not measured savings from this run.

For the 200-revision/two-profile Cloud Run scenario, fitting a $90 admission budget requires average session compute at most **112.5 ms** at `k=1`, before overhead. The wide probe would need about **7.7×** lower cost; $45 requires about **15.4×**. Keeping its measured cost instead supports roughly **26 or 13** two-profile revisions/month, respectively. Pure sample scaling would lower 100,000 to roughly 13,000 or 6,500 sessions, substantially widening uncertainty; that explicitly changes the accepted evidence contract and requires product and statistical review. It is **not** a recommendation to truncate current evaluations or discard long sessions.

The follow-up decision must also define the finite validation gate: runnable representative strategies across all three games, exact arithmetic and full exposure/guard coverage, natural and forced final settlements, analysis/checkpoint overhead, and on-provider calibration of the pinned artifact at selected batch shapes. Resolve how admission reserves remaining in-flight cost: pausing only after spending 90% cannot by itself guarantee a hard ceiling if the work already admitted exceeds the remaining reserve. Provider selection and exact concurrency remain undecided.

A separate contract inconsistency was found while checking assumptions: the capacity resolution describes seeds as derived from revision/profile, whereas the accepted architecture specifies an authoritative allocated run key. Safe reuse must reuse the original immutable evaluation and stream/provenance; it must not assume separately allocated keys rerun identical draws. Resolve that wording explicitly before implementing deduplication. This benchmark uses no reuse savings and changes neither contract.

Research resolution: measurements, reproducible fixtures, primary-source cost formulas and the exposed budget gap are established within the stated bounds. Production affordability, worst-case execution, cloud performance and product tradeoffs remain explicit follow-up work; no production service was built or deployed.
