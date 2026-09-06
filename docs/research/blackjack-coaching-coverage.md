# Blackjack coaching conventions and coverage

Research date: 2026-09-05. Evidence answer for [Blackjack coaching conventions and coverage](https://github.com/0xRowdy/true-count/issues/14), continuing [Blackjack training modes and strategy evidence](blackjack-strategies.md).

## Conclusion

The public sources inspected support a bounded curriculum, but **do not fully specify or certify one index/conversion package for all four accepted rule combinations**. Use rule-specific basic strategy and one explicitly validated Hi-Lo deviation family. Do not copy BJA's complete teaching chart into an exact rule-specific grader or treat the authorized Illustrious 18/Fab 4 reproduction as certification of every accepted setting.

Accepted scope from the ticket: six decks; U.S. hole card/peek; blackjack pays 3:2; H17/S17 and late surrender on/off; double any initial two cards including non-ace split hands; up to four split hands; resplit non-aces; one card on split aces; no ace resplitting or doubling after splitting aces.

## What the sources actually establish

| Source | Established | Still missing for this scope |
| --- | --- | --- |
| [BJA H17 PDF](https://www.blackjackapprenticeship.com/wp-content/uploads/2019/07/BJA_H17.pdf) and [BJA S17 PDF](https://www.blackjackapprenticeship.com/wp-content/uploads/2019/07/BJA_S17.pdf) | Separate named charts; positive/negative threshold directions; `0+`/`0-` refer to running-count signs; insurance/even-money threshold 3+; separate late-surrender section; double fallback keys | Complete deck/split/peek assumptions; true-count integerization; denominator estimation convention; index generation method; proof that all ordinary cells equal the accepted rule-specific basic policy |
| [Wizard 4–8 deck basic strategy](https://wizardofodds.com/games/blackjack/strategy/4-decks/) | Separate H17/S17 instructions, DAS-dependent pairs, surrender priority and unavailable-split handling | Exhaustive certification of every reachable post-split state under the accepted split cap and ace restrictions |
| [Wizard Hi-Lo, authorized Schlesinger tables and original simulations](https://wizardofodds.com/games/blackjack/card-counting/high-low/) | Identified I18/F4 provenance; threshold equality; compact curriculum rationale; explicit simulation assumptions | The reported simulation is S17 and permits resplitting aces, unlike launch. It does not validate the four launch combinations. Introductory rounding is not a complete index-generation specification |
| [QFIT original simulator manual, page 18](https://www.qfit.com/apphelp/BJVG.pdf) | Distinguishes count divisor, full/half/quarter-deck estimation, exact calculation, rounding, and truncation | Documentation of available settings does not select the correct settings for a BJA or Schlesinger table |

A concrete warning against treating an entire BJA chart as exact basic strategy: the S17 PDF's soft-total row prints `Ds` for A,7 against dealer 2. Its key means double if possible, otherwise stand. Wizard's S17 text doubles soft 18 only against 3–6 and stands against 2. This is a curriculum mismatch requiring a deliberate choice, not evidence that the whole BJA method fails. BJA explains that its general teaching approach uses a simplified chart across games. [BJA S17 PDF](https://www.blackjackapprenticeship.com/wp-content/uploads/2019/07/BJA_S17.pdf), [Wizard S17 instructions](https://wizardofodds.com/games/blackjack/strategy/4-decks/), [BJA explanation](https://www.blackjackapprenticeship.com/why-the-differences-in-basic-strategy/)

## Count semantics and legal actions

The BJA chart legends are explicit about sign exceptions: zero itself is neither a positive nor negative running count. Therefore RC=+1 with a rounded/truncated TC of zero can differ from RC=0. Preserve count type, comparison direction, and equality in each deviation definition. The PDFs alone do not provide a complete generic algorithm for every action represented by an index; inspect the baseline action and section when validating each entry. [BJA H17 legend](https://www.blackjackapprenticeship.com/wp-content/uploads/2019/07/BJA_H17.pdf)

BJA's tutorial reports −7/2 as −3, consistent with truncation for that example. Wizard gives 7/4=1.75 and rounds to 2. Different inputs do not prove complete incompatible provider algorithms; neither example establishes every negative, positive, tie, and zero boundary. [BJA tutorial](https://www.blackjackapprenticeship.com/how-to-count-cards/), [Wizard Hi-Lo](https://wizardofodds.com/games/blackjack/card-counting/high-low/)

QFIT documents half-deck estimation as nearest half deck and truncation as rounding positive results down and negative results up. The same page's short description of its floor option is not sufficient to resolve its behavior independently. A proposed True Count convention should therefore state arithmetic explicitly, with examples, rather than borrowing a setting label. [QFIT manual, page 18](https://www.qfit.com/apphelp/BJVG.pdf)

For basic mode, insurance/even money is declined under the published basic policy; in deviation modes it is a separate count decision before the dealer peek. Surrender is considered when legal before normal splitting/doubling/hitting decisions. No-LS cannot simply turn a surrender action into a universal hit: evaluate the remaining legal policy. Split aces in this accepted game have forced completion; unavailable non-ace resplits require an appropriate unsplit-hand policy. [Wizard basic instructions](https://wizardofodds.com/games/blackjack/strategy/4-decks/), [BJA action order](https://www.blackjackapprenticeship.com/blackjack-strategy-charts/)

Only revealed cards contribute to the player's count. Recompute at the playing decision, not merely at the initial wager. These instructions imply that a simulator must not count the dealer's hidden card just because it knows its identity; include it when actually revealed. They also imply that a negative dealer peek is information about blackjack absence, not revelation of the hidden rank. [BJA counting tutorial](https://www.blackjackapprenticeship.com/how-to-count-cards/), [BJA deviation timing](https://www.blackjackapprenticeship.com/blackjack-deviations/)

## Recommended convention to validate

This is a proposal for a coherent **new validation target**, not a claim that a published chart already uses it:

- Start from separate exact H17/S17 total-dependent basic policies. In LS variants, explicitly encode surrender eligibility and fallback; preserve pairs and split-ace restrictions.
- Use the I18 situation list as the compact deviation curriculum shape, with F4 surrender situations only in LS variants. Validate the numeric thresholds independently for each accepted rule set. Call any modified result True Count's Hi-Lo curriculum, not an unchanged Schlesinger or BJA chart.
- For an initial deterministic training convention, supply remaining decks in half-deck increments and truncate RC/decks toward zero: +7/2→+3, −7/2→−3. Preserve unrounded RC for any validated sign exception. Do not import sign exceptions from BJA automatically into a differently generated index family.
- Before estimating depth in continuous table practice, fix exactly what is estimated: propose all cards whose ranks remain unobserved, including the concealed dealer card and unseen burn cards, divided by 52; round that denominator to the nearest half deck, halfway upward. This is a proposed modeling choice, **not established as BJA's or Schlesinger's convention**. Specify a positive minimum denominator and compatible shuffle point before implementation. Alternatively choose a shoe-only estimate, but regenerate/validate indices using that same choice.
- Keep a denominator supplied by the drill distinguishable from a player estimate. Never count a supplied-count drill as independent counting proficiency.

## Smallest closed follow-up

Create one content-validation artifact covering exactly the four accepted combinations, with no new systems or variants. Its completion criteria should be:

1. Pin the full rules, observable-card/depth convention, integer conversion, shuffle/depth domain, and chosen finite deviation situation list. Resolve whether surrender is allowed after splitting, whether insurance can precede surrender, and whether mixed ten-value ranks can split; the accepted ticket does not fully state these details.
2. Obtain a properly usable source package with these assumptions, or generate action values/indices under the fixed assumptions. Record whether thresholds maximize expected value or use another criterion; do not mix those index types.
3. Produce rule-specific basic/fallback tables and explicit deviation records. Verify all baseline cells plus below/equal/above threshold cases, RC sign near zero, insurance/peek order, LS/noLS fallback, unavailable doubles, split cap, forced split aces, and revealed-card updates. Record actual results and unresolved mismatches rather than only writing a future test checklist.
4. Require independent mathematical/reference comparison at disputed cells and every changed index; retain source/version and generation settings. Content publication/reuse permission is separate from numerical correctness.

This closes the evidence investigation: exact source gaps and a finite acceptance boundary are identified. It does not close the parent product decision or certify launch coaching. Neither a marketing claim nor a trainer exposing a setting substitutes for the missing validation artifact.
