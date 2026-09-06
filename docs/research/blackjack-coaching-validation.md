# Blackjack coaching reference validation

Research date: 2026-09-06. Partial evidence for [Blackjack coaching reference validation](https://github.com/0xRowdy/true-count/issues/15), following [coverage research](blackjack-coaching-coverage.md). **Keep Blackjack coaching reference validation open: this report does not certify the complete launch reference.**

## Result

A publicly licensed calculation package was obtained and executed. Sixty independently executed stand/hit/double values agree with a second published reference within 0.000001; 58 are within six-decimal rounding tolerance. Eight split values disagree. Count/depth arithmetic and an insurance probability example were calculated separately. These are actual results, not proposed tests. No complete set of validated basic/fallback tables or 22-situation Hi-Lo indices was produced.

The remaining work is generation and independent comparison of the curriculum under the accepted conventions, including resolution of split discrepancies. The index optimization objective and aggregation/continuation model must be recorded before claiming a unique numerical answer. A count is insufficient to identify one exact composition-dependent best action; the insurance example below demonstrates this directly.

## Fixed inputs

The final Answer of [Launch game rules and practice strategies](https://github.com/0xRowdy/true-count/issues/3) supersedes older proposals:

- Six decks, 3:2 naturals, US hole card/peek, S17/H17 × late surrender off/on. Default S17/LS.
- Double any initial two cards of eligible hands, DAS, no double-for-less. Split equal values including mixed tens, maximum four hands; no ace resplitting, one card to split aces, no double on split aces; split 21 is ordinary 21.
- Surrender only original two-card hands after a required negative peek. Insurance precedes peek and may coexist with subsequent legal surrender.
- No burn. Count only exposed cards; reveal the dealer hole card at round end. Negative peek is information, not an exposed rank.
- Physical shoe cards determine the nearest-half-deck denominator, ties upward, minimum 0.5. Truncate RC/divisor toward zero. Recompute at each decision.
- Penetration 50/55/60/65/70/75/80%, default 75%, finish the cut-card round; zero to four other players using rule-specific basic play.
- I18 situation list plus F4 in LS presets; numeric thresholds and sign exceptions remain unvalidated.

[Intuitive executable strategy creation](https://github.com/0xRowdy/true-count/issues/5) also requires a validated legal alternative when a strategy supplies none, including insufficient balance as a cause of unavailable double/split actions. References below evaluate available actions; they do not supply a complete policy for coupled bankroll allocation across split hands.

## Executable reference obtained

[Eric Farmer's blackjack repository](https://github.com/possibly-wrong/blackjack/tree/a1f7dbb74266fb39296292bdff568b076120a61c), checked out at `a1f7dbb74266fb39296292bdff568b076120a61c`, identifies itself as version 7.6 and provides GPL-3.0-or-later source. The research used its `BJPlayer` calculator with a fresh six-deck shoe, matching doubling/split restrictions, CDZ- continuation, and surrender disabled; legal original-hand surrender can be compared separately with −0.5. GPL source is a usable research tool, not permission to import arbitrary third-party chart artwork or distribute a proprietary derivative without addressing its license. No purchase, contract acceptance, or production integration occurred. [Pinned readme/license](https://github.com/possibly-wrong/blackjack/blob/a1f7dbb74266fb39296292bdff568b076120a61c/readme.txt)

Its index adapter is **not compatible unchanged**: `trueCount` includes the concealed card in its remaining-card pool, returns a non-integer quotient, and explicitly approximates exposed-card removal after splits. Its default half-deck resolution therefore does not establish True Count's shoe-only/truncation behavior. [Pinned index implementation](https://github.com/possibly-wrong/blackjack/blob/a1f7dbb74266fb39296292bdff568b076120a61c/src/indices.cpp#L109)

## Actual action-value comparisons

All values are expected net return per original hand wager, conditioned on no dealer blackjack where relevant, with the stated player cards and upcard removed from an otherwise fresh shoe. They are **composition-dependent calculations**, not an exhaustive certification of total-dependent basic teaching. A,7 has only one initial two-card composition; other hard totals can have multiple compositions.

The comparator is Wizard Appendix 9 for [six-deck S17](https://wizardofodds.com/games/blackjack/appendix/9/6ds17r4/) and [six-deck H17](https://wizardofodds.com/games/blackjack/appendix/9/6dh17r4/), retrieved 2026-09-06. Both state the four-hand cap and no resplitting/drawing to split aces. They explicitly limit their treatment of cards drawn into other split hands. This is independent execution against another published analysis; the programs' complete historical independence was not established.

For each of ten hands under both rules, **all three stand/hit/double values matched the published values within 0.000001** (60 comparisons). Of these, 58 differ by at most 0.0000005. H17 ten-ten versus 5 double differs by 0.000000592 (published −1.706234, calculated −1.706233408), H17 ten-ten versus 6 double differs by 0.000000555 (published −1.705836, calculated −1.705835445). Both small unresolved numerical discrepancies exceed simple rounding tolerance. The table prints our output; publication comparison used its displayed six decimals.

| Rule | Player vs dealer | Stand | Hit | Double |
| --- | --- | ---: | ---: | ---: |
| S17 | A,7 vs 2 | .124000760 | .063289331 | .120980036 |
| H17 | A,7 vs 2 | .113110153 | .060441376 | .116261613 |
| S17 | A,7 vs 3 | .151118882 | .090730300 | .179330198 |
| H17 | A,7 vs 3 | .141583949 | .088230248 | .175215172 |
| S17 | 5,6 vs A | −.661882841 | .147595674 | .129709878 |
| H17 | 5,6 vs A | −.595077854 | .108668478 | .124006748 |
| Both | 10,6 vs 10 | −.540954439 | −.534675562 | −1.069351125 |
| Both | 10,5 vs 10 | −.540055032 | −.503907420 | −1.007814841 |
| S17 | 8,8 vs A | −.663258077 | −.513551218 | −1.027102435 |
| H17 | 8,8 vs A | −.594826736 | −.538560945 | −1.077121890 |
| Both | 8,8 vs 10 | −.536853299 | −.535361038 | −1.070722077 |
| S17 | 10,10 vs 5 | .670892297 | −.853069628 | −1.706139256 |
| H17 | 10,10 vs 5 | .668926983 | −.853116704 | −1.706233408 |
| S17 | 10,10 vs 6 | .702826041 | −.852262845 | −1.704525690 |
| H17 | 10,10 vs 6 | .676589938 | −.852917723 | −1.705835445 |
| S17 | 10,2 vs 4 | −.211115306 | −.210364258 | −.420728516 |
| H17 | 10,2 vs 4 | −.205906109 | −.210664313 | −.421328627 |

Practical results derived from these calculations:

- S17 A,7 vs 2: stand beats double by .003020724. H17: double beats stand by .003151460; unavailable double falls back to stand. This numerically confirms the specific S17 teaching-chart discrepancy identified in the earlier report.
- A,7 vs 3: double when available, otherwise stand under either rule. H17 5,6 vs A: double when available, otherwise hit; S17 already prefers hit. A universal “unavailable double → hit” would be wrong.
- 10,6 or 10,5 vs 10: surrender −.5 beats the remaining initial-hand options when legal; without surrender, hit. This comparison does not authorize surrender after a split or later draw.
- S17 10,2 vs 4 prefers hit by .000751048 despite the familiar total-dependent hard-12-vs-4 stand cell. H17 prefers stand. This is a composition example, not proof a total-dependent chart is defective.

### Unresolved split differences

The published comparator's **DAS** column and the executed CDZ- results differ in all eight cases. The differences exceed six-decimal rounding; they are retained rather than hidden behind matching preferred actions.

| Rule | Pair vs upcard | Wizard split EV | Executed split EV |
| --- | --- | ---: | ---: |
| S17 | 8,8 vs A | −.364371 | −.364251552 |
| H17 | 8,8 vs A | −.514318 | −.514034734 |
| S17 | 8,8 vs 10 | −.475385 | −.474893751 |
| H17 | 8,8 vs 10 | −.475385 | −.474893751 |
| S17 | 10,10 vs 5 | .365917 | .371713893 |
| H17 | 10,10 vs 5 | .366222 | .371877572 |
| S17 | 10,10 vs 6 | .444942 | .449059879 |
| H17 | 10,10 vs 6 | .448590 | .450852018 |

Different split policy/removal methods are a plausible explanation, **not a resolved diagnosis**. Neither these values nor the fresh-shoe ranking validates the I18 ten-splitting thresholds. With splitting unavailable, 8,8 vs 10 has hit above stand among the calculated actions; if original-hand surrender remains legal it beats both. At the split cap surrender is unavailable, but this initial-hand comparison does not certify depleted, already-split states.

## Why insurance still needs an aggregate index model

Independently, insurance pays +2 or −1 per unit insured, so its conditional expected return is `3p − 1`, where `p` is probability the concealed card is ten-valued. Break-even is exactly `p=1/3`, agreeing with the executable reference's documented criterion. This is an action-value criterion, not a certified Hi-Lo index.

Consider 78 physical cards remaining plus the unobserved hole card: 79 unknown ranks. Use these two possible pools, ordered A,2,3,4,5,6,7,8,9,T:

- Pool A: `[8,6,6,6,5,5,6,6,5,26]`.
- Pool B: `[7,6,6,6,5,5,6,6,5,27]`.

Both are feasible subsets of six decks and have 28 low cards, 34 high cards, and 17 neutral cards. With all other cards exposed, both imply RC +6, denominator 1.5, integer TC +4. Before a peek, assuming uniformly shuffled unseen positions, pool A's insurance EV is `3×26/79−1=−1/79≈−.012658228`; pool B's is `3×27/79−1=2/79≈+.025316456`. Thus even fixed rules, exact RC, and exact physical depth do not imply one composition-optimal insurance action. An index must average over specified states or explicitly accept an approximation. The learner does not know either full pool; this calculation exposes information lost in Hi-Lo, not a proposed composition-counting drill.

## Conversion and reveal calculations

For integer physical shoe count `n`, the accepted divisor has the exact expression:

`D(n) = max(1/2, floor((n+13)/26)/2)`.

An independent arithmetic check compared exact rational and direct floating-point implementations for `n=0..312`, `RC=−120..120`: **75,433 comparisons, zero mismatches**. This is an arithmetic grid, not a claim every grid point is reachable. `n=0` checks the clamp defensively.

Divisor transitions occur at 39,65,91,117,143,169,195,221,247,273,299 cards. Counts 0–38 use .5. At 117 cards, D=2.5 and RC ±7 gives TC ±2; at 116, D=2 and the same RC gives TC ±3. At 117, RC −1,0,+1 all produce TC 0: retain RC if validated sign exceptions are later adopted.

Drawing a concealed card across 117→116 changes the divisor and possibly TC without changing RC. A subsequent negative peek changes neither physical shoe count nor RC, but conditions action probabilities on no blackjack. Revealing that hole card later changes RC according to its rank without removing another card from the shoe. Insurance must use the pre-peek decision; surrender's −.5 comparison applies only after blackjack is excluded. These are direct consequences of accepted product rules, not a simulated lifecycle test.

```python
from fractions import Fraction
from math import floor, trunc
checked = 0
for n in range(313):
    exact_d = max(Fraction(1, 2), Fraction((n + 13) // 26, 2))
    direct_d = max(.5, floor(2 * (n / 52) + .5) / 2)
    assert exact_d == direct_d
    for rc in range(-120, 121):
        assert trunc(Fraction(rc) / exact_d) == trunc(rc / direct_d)
        checked += 1
assert checked == 75433
```

## Reproducing the action comparisons

Keep the GPL checkout outside the product tree. The following small research driver was compiled against the pinned `src/blackjack.cpp`; it prints the values above. `BJPlayer` is allocated on the heap because its large state exceeded the local default stack in an initial driver attempt. No upstream source changes were needed.

```cpp
#include "blackjack.h"
#include <cstdio>
int main() {
  for (int h17 = 0; h17 < 2; ++h17) {
    BJShoe shoe(6);
    BJRules rules(h17, true, true, true, false, true,
                  true, false, false, 1.5);
    BJStrategy strategy;
    BJProgress progress;
    auto p = new BJPlayer(shoe, rules, strategy, progress);
    int cases[][3] = {{1,7,2},{1,7,3},{5,6,1},{10,6,10},{10,5,10},
                      {8,8,1},{8,8,10},{10,10,5},{10,10,6},{10,2,4}};
    for (auto &c : cases) {
      BJHand h; h.deal(c[0]); h.deal(c[1]);
      std::printf("%s %d,%d v%d %.9f %.9f %.9f", h17 ? "H17" : "S17",
        c[0], c[1], c[2], p->getValueStand(h,c[2]),
        p->getValueHit(h,c[2]), p->getValueDoubleDown(h,c[2]));
      if (c[0] == c[1]) std::printf(" %.9f", p->getValueSplit(c[0],c[2]));
      std::puts("");
    }
    delete p;
  }
}
```

From that checkout, save the driver as `check.cpp`, then run:

```sh
g++ -O2 -I src check.cpp src/blackjack.cpp -o check
./check
```

## Remaining finite validation work and next action

The [authorized I18/F4 source](https://wizardofodds.com/games/blackjack/card-counting/high-low/) supplies the situation inventory and published comparison indices. Its accompanying experiment permits resplitting aces and does not certify our complete conversion rule. This report does not relabel those indices as validated. All 18 I18 thresholds and four LS-only F4 thresholds remain unvalidated for the launch matrix; none was generated here. BJA running-count-sign exceptions likewise remain unadopted.

The exact missing methodological input is the optimization target and averaging/continuation model. **Proposal, not an accepted decision:** maximize expected net return per original unit, rather than a bankroll-risk-adjusted objective; use reachable-state frequencies within each supported rule/penetration/player-count configuration and the selected teaching continuation policy. Define how configurations are weighted if one shared index is requested, or demonstrate that thresholds are stable across them. Specify tie handling and error tolerance. Total-dependent basic teaching must also remain distinguishable from composition-dependent optimization.

Once that target is fixed, the concrete next action is a bounded offline reference-generation experiment, adapting count/depth and visibility semantics rather than importing the existing index adapter. Generate legal-action EV differences per situation and integer-count bin, retain the sampling distribution or enumeration weights and uncertainty, and compare every selected/changed threshold against a separate calculation. Resolve the eight observed split disagreements before relying on either split routine for index certification. Freeze the resulting basic, fallback, and deviation records with source/settings provenance.

Uncompleted acceptance items are: all baseline cells; every index's below/equal/above cases; zero/sign decisions; post-split and split-cap alternatives; forced split-ace lifecycle; balance-limited alternatives and allocation across existing hands; and actual simulated reveal/peek/surrender integration. The two initial stand-versus-hit fallback examples above are not substitutes for that coverage. This is substantive computation and validation remaining in Blackjack coaching reference validation, not a reason to create a duplicate research ticket or call the map implementation-ready.
