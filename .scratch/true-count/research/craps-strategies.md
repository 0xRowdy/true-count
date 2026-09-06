# Craps practice strategies across player levels

Research date: 2026-09-05. Research complete; catalog and launch choices below are **proposals, not approved product decisions**. Scope: standard two-dice bank craps, independent fair rolls. Difficulty describes the bookkeeping and judgment being practiced, not an ability to predict dice.

## Recommendation

Propose five complementary launch strategies: **Pass with odds; Flat place 6 and 8; Don't pass with lay odds; Three-point Molly (bounded version); Capped press-and-collect 6 and 8**. These cover introductory rules, direct number betting, the don't side, concurrent contracts, and a positive progression. Keep regression, Iron Cross, and Martingale in the candidate catalog as useful contrasts. If launch must include a negative progression, replace the advanced press strategy with capped Martingale; this sacrifices place-bet progression teaching and is a product choice.

The executable variants below are True Count proposals assembled from documented wagers. They should not be marketed as a creator's canonical system. Every named system needs a versioned definition: a familiar name is not enough to determine its reset, odds, working, or collection rules.

## Verified rule and mathematical foundation

Bellagio's operator guide specifies place payouts of 9:5 on 4/10, 7:5 on 5/9, and 7:6 on 6/8. Taking odds pays 2:1, 3:2, and 6:5 respectively; laying reverses those ratios. It allows place bets to be taken down before the next roll. Its field pays double on 2 and triple on 12. These are a source-backed example preset, not a claim about every current casino table. [Bellagio Gaming Guide, printed pp. 13–14](https://static.mgmresorts.com/content/dam/MGM/bellagio/casino/bellagio-casino-gaming-guide.pdf)

The New Jersey regulator's published rules provide a useful explicit lifecycle model: established pass/come bases cannot be removed or reduced; don't bases can be reduced/removed but cannot then be restored; place/buy bets and come odds default off on a come-out, while other wagers remain on. Consequently, an established come base can lose to a come-out 7 while its inactive odds are returned. Use these as modeled table conditions, not universal casino behavior or current legal advice. [NJ DGE Chapter 69F, §§1.2–1.3](https://www.nj.gov/oag/ge/docs/Regulations/CHAPTER69F.pdf)

| Wager | House edge and denominator |
| --- | --- |
| Pass / come base | 1.414% of initial base stake per completed wager |
| Don't pass / don't come, bar 12 | 1.364% per wager made, including the come-out 12 push; about 1.403% excluding pushes |
| True odds | 0% on the odds component |
| Place 6 / 8 | 1.515% per resolved wager; about 0.463% of the active stake per roll |
| Place 5 / 9 | 4% per resolved wager; about 1.111% per active roll |
| Place 4 / 10 | 6.667% per resolved wager; about 1.667% per active roll |
| Field, double 2 / triple 12 | 2.778% per one-roll stake |
| Field, double both | 5.556% per one-roll stake |

The first three entries follow the [original derivations](https://wizardofodds.com/games/craps/appendix/1/); place figures and the need to distinguish resolved bets from rolls follow the [original comparison table](https://wizardofodds.com/games/craps/appendix/2/). Field values can be reproduced directly from the 36 equally likely ordered outcomes and the published payout schedule; changing triple 12 to double removes one unit of expected return in 36 outcomes.

Adding odds to an unchanged base lowers expected loss **as a percentage of average total stake**; it does not reduce the base wager's expected dollar loss. A $10 pass base loses about $0.1414 in expectation whether odds are zero or added. One-times pass odds gives about 0.848% against average total action, and full 3-4-5x gives about 0.374%. Neither is a per-roll percentage or a fraction of peak exposure. Larger odds increase amounts at risk. [Wizard's combined-odds derivation](https://wizardofodds.com/games/craps/appendix/1/), [odds comparison](https://wizardofodds.com/games/craps/basics/)

## Broad candidate catalog

Except for the explicitly sourced Iron Cross and Martingale definitions, execution choices in this table are proposed teaching variants. Source references establish the underlying wager mechanics, not authorship of the assembled routine.

| Candidate / level | Executable teaching variant | Learning value, conditions, and limitation |
| --- | --- | --- |
| Flat pass / beginner | One base bet on each come-out; wait for resolution; repeat unchanged, no odds. | Simplest point lifecycle. Standard pass rules; 1.414% base edge. Good first lesson inside Pass with odds. |
| Pass with odds / beginner | Flat pass; add a selected odds amount after a point; reset after resolution. | Separate base from odds and compare exposure. Needs the selected odds allowance and legal payout increments. |
| Flat place 6 and 8 / beginner | After point establishment, place equal legal amounts on both, collect each win, leave stakes unchanged; off on come-out; rebuild after seven-out. | Payout arithmetic and active/inactive bets. Two simultaneous wagers lose together on 7; no required line bet in this spectator variant. |
| Don't pass with lay odds / intermediate | Flat don't pass with bar-12 push; once established, lay enough odds to win a selected multiple of the base. | Reverse settlement, pushes, and risk-to-win distinctions. Requires explicit bar number and lay limits. More lay stake does not mean a better base edge. |
| Three-point Molly / intermediate | Pass plus at most two concurrent come contracts, each with fixed odds; replace a resolved come contract when there is room and the point is on. | Several independent points and differing come-out behavior. More contracts add exposure and expected base loss. Exact cap and replacement policy matter. |
| Three-point don't / advanced | Don't pass plus at most two don't-come contracts; fixed lay target per contract; replenish only with point on. | Mirrored multi-contract practice; existing don't contracts remain active on come-out. Come-out vulnerabilities are not erased by later favorable number positions. |
| Flat inside / intermediate | With point on, place 5/6/8/9 at legal matching units; collect unchanged; off on come-out; reset at seven-out. | Coverage and unequal payout ratios. Adding 5/9 introduces higher-edge wagers. Include the table point even if inside; no implied substitution. |
| Flat across / intermediate | Place 4/5/6/8/9/10; collect unchanged; same reset policy as inside. | Full box-number bookkeeping. Place 4/10 are particularly costly; buying them is a distinct commission-sensitive variant. |
| Capped press-and-collect / advanced | Alternate collecting and increasing the winning number by one initial place stake; cap at four initial stakes; count hits separately for 6 and 8. | Stateful positive progression and retained versus exposed chips. Requires legal increments and a cap; does not improve the underlying place odds. |
| Two-hit inside regression / advanced | Start 5/6/8/9 at two legal units each; after the second total inside hit, reduce every stake to one unit; collect thereafter; reset after seven-out. | Front-loaded exposure, hit counters, and regression. Two hits are a trigger, not a promise that starting exposure has been recovered. This is a generic proposal, not Casino Quest Squeeze Play. |
| Buy 4 and 10 / intermediate | Buy both at fixed stakes; pay the specified commission; collect and maintain; off on come-out. | Compare commission timing and rounding against place payouts. Needs exact commission basis, minimum, rounding, and on-win versus upfront collection. |
| Iron Cross / intermediate | $5 on field and place 5, $6 each on place 6/8; replace field after every roll; collect all profit; keep place stakes fixed. Work only with point on in this variant. | Settlement on several wager types and misleading win frequency. Every non-7 roll gives net profit at these ratios, but 7 loses $22. Original analysis gives expected loss $0.25 per active roll with triple-12 field: 1.136% of $22 active exposure per roll, **not** per resolved wager. [Original analysis](https://wizardofodds.com/ask-the-wizard/craps/betting-systems/) |
| Capped Martingale / intermediate | Pass base only: stakes B, 2B, 4B, 8B after successive losses; reset to B after a win; end the progression after losing 8B. | Negative progression and cap exhaustion. Requires 15B to fund four losses and a table maximum at least 8B. Original Martingale doubles after losses; the four-step cap is our proposed exercise. It changes the distribution of wins/losses, not the pass edge. [Original analysis](https://wizardofodds.com/gambling/betting-systems/) |

The buy-bet operator rule is true odds with a commission; MGM Detroit identifies a 5% commission and distinguishes buy stake from lay potential win as the commission basis. This alone does not specify collection timing or rounding. Do not invent a single buy strategy edge until those are chosen. [MGM Grand Detroit handbook, craps section](https://static.mgmresorts.com/content/dam/MGM/mgm-grand-detroit/casino/mgm-grand-detroit-casino-gaming-guide.pdf)

For the proposed two-hit regression, a $10-table example starts $20/$24/$24/$20 ($88). Each inside hit pays $28. After two hits, $56 has been collected; reducing to $10/$12/$12/$10 returns $44 and leaves $44 exposed. The next 7 would therefore leave $12 profit for this completed sequence, while a 7 before the first hit loses $88. This is direct payout arithmetic, not a claim about typical session results or a source's named system.

## Exact proposed launch defaults

These definitions make the recommendations reviewable; parameters can change when table presets are approved.

1. **Pass with odds:** B=$10, add exactly B in odds once the point is set. The selected table must support it and pay those increments exactly. No supplementary wagers. Repeat B on the next come-out after any resolution. A beginner lesson can set odds to zero first.
2. **Flat place 6 and 8:** $12 each; include both even when either is the table point. Collect every payout. Retain the unchanged bets off through come-out; resume after a point is set. Rebuild after seven-out. Pass the dice if a venue requires a line bet from the shooter; the teaching routine does not silently add one.
3. **Don't pass with lay odds:** B=$10; after a point lay to win B: $20 against 4/10, $15 against 5/9, $12 against 6/8. Leave the base through a bar-12 push. Keep the established contract until resolution. Re-enter B on a later come-out. No discretionary removal or unrelated lay bets.
4. **Three-point Molly:** B=$10 pass and one-times odds per established contract. Allow at most two live come bases, counting one in the come area toward the cap. Before a point-on roll, add one new come base when fewer than two exist. Set odds when it travels. On come-out, add the next pass base; make no new come bet; established come bases work, their odds are off. Resolve all wagers on a roll before scheduling replacements. A pending come bet can win on the same 7 that loses established contracts.
5. **Capped press-and-collect 6 and 8:** Start $12 each after point establishment. First hit of each number: collect. Second: add $12 to that same number using its payout, collect the balance. Repeat that collect/press alternation independently per number until its stake reaches $48; then collect every hit. Keep stakes and hit counters through a made point, with bets off on come-out. Reset both only after seven-out. This gives $12 → $24 → $36 → $48, not a full press or an undocumented power-press chart.

For all five: collect payouts before optional new placements; check bankroll and table limits before proposing a complete next action. If the specified stake cannot be funded or accepted, pause the routine and explain the constraint instead of silently borrowing, rounding into a different strategy, or escalating stakes. Existing contract bets still settle legally. Session stop conditions prevent new betting and remove removable wagers; they cannot cancel established pass/come bases. These are proposed simulator behaviors.

Score wager choice, amount, timing, odds sizing, working state, and progression state separately from profit. Report expected loss using a labeled denominator, total active exposure, peak exposure, drawdown, and bankroll exhaustion. A hot sequence is an outcome, not evidence of skill at forecasting independent rolls.

## Casino Quest / CEG attribution and unresolved variants

Casino Quest's own store explicitly distinguishes **Original Squeeze Play** (three hits) and **Ultimate Squeeze Play** (two hits) and advertises $25-table addenda and separate pressing charts. That verifies the names and their association with Casino Quest. The accessible description does not expose complete starting stakes, top-ups, per-number branches, resets, or final press sequences. Treat these as additional advanced candidates pending a directly inspectable creator specification, not as launch-ready implementations. [Casino Quest's own product page](https://shopcasinoquest.com/products/casino-quest-ultimate-craps-strategies-1-of-3)

A search result points to [“NEW BEST CRAPS SYSTEM ‘Squeeze Play’”](https://www.youtube.com/watch?v=ZPNMT-Rt8zc), but direct video retrieval failed. The often-cited [Triple Lux Part 1 video](https://www.youtube.com/watch?v=jgACbu72ZgQ) also could not be retrieved. CEG authorship and exact Triple Lux behavior were **not independently verified from accessible first-party material** in this investigation. Third-party forum references were used only as discovery leads. Do not infer that all press/press/collect routines are Triple Lux, or that Casino Quest invented all strategies it demonstrates.

Likewise “Double Tap,” “power press,” “three-point Molly,” and “Squeeze Play” are insufficient executable specifications by themselves. Proposed generic variants above have explicit behavior; creator-branded variants remain unresolved as implementations. No paid source was purchased, and no instructional transcript or chart was reproduced.

## Remaining product choices

Choose whether the fifth slot prioritizes positive progression, regression, negative progression, or Iron Cross coverage. Approve supported table conditions: odds caps, don't bar number, place/come-odds come-out defaults, field payout, commission rules, denominations, and limits. Keep standard craps and crapless craps separate; these recommendations do not automatically transfer to changed come-out rules. The research question is answered even though named proprietary variants and final launch selection require further product decisions.
