# Launch game rules and practice strategies

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:grilling
Type: grilling
Status: resolved
Assignee: Codex
Blocked by: 10, 11, 12, 13

## Question

Which rule variants and configurable table conditions launch for blackjack, craps, and roulette? Select the five built-in strategies for each of craps and roulette, blackjack coaching coverage and counting system(s), and how unsupported conditions are handled. Identify authoritative evidence needed before catalog approval; do not invent or attribute source material.

## Comments

### Table configuration and strategy research direction

- Accepted named rule presets plus a bounded set of configurable table conditions, with coaching available for every supported combination. Exact presets and conditions remain undecided.
- Accepted a learning-oriented mix of straightforward betting approaches and contrasting progression systems for the five built-in craps and five built-in roulette strategies, measuring adherence separately from winnings. The user requested research across player levels before selection.
- Requested blackjack training combinations: “Basic, Basic with deviations, counting with basic, counting with deviations, etc.” Preserve these distinct combinations; exact coverage, deviation triggers, counting systems, and how supplied information differs from player-maintained counts remain open.
- Evidence is being gathered in [Blackjack training modes and strategy evidence](10-blackjack-strategy-research.md), [Craps strategies across player levels](11-craps-strategy-research.md), and [Roulette strategies across player levels](12-roulette-strategy-research.md). Candidate catalogs are proposals, not approved launch content.

### Research completed; catalog selection pending

- All three linked research investigations are resolved. Their answers link the evidence and proposed catalogs; no final catalog selection is implied by resolving research.
- An open clarification asks whether basic-with-deviations supplies the relevant count/condition while counting-with-deviations requires the player to maintain it. No response has been recorded yet.
- Next decisions are the five strategies per game, blackjack counting-system and mode coverage, and exact supported rule presets. Exact progression variants, deviation indices/conversion conventions, and configuration compatibility need explicit agreement before this ticket can resolve.

### Launch catalog and blackjack modes accepted

- The user accepted the proposed five craps strategies: Pass with odds; Flat place 6 and 8; Don't pass with lay odds; bounded Three-point Molly; capped press-and-collect.
- The user accepted the proposed five roulette strategies: Flat even-money; Fixed two-dozen coverage; capped Martingale; Three-win parlay; bounded Labouchere.
- These are the initial launch selections, with room to add or modify content later. The research reports contain candidate execution defaults; accepting the catalog names does not silently approve every parameter in those reports.
- Accepted Hi-Lo as the initial blackjack counting system and four modes: basic; basic with deviations; counting with basic; counting with deviations.
- In basic-with-deviations practice, the app supplies the relevant count/condition. In counting-with-deviations practice, the player maintains the count. Counting-with-basic retains basic playing decisions while the player practices counting.
- Exact table presets and configurable conditions, progression parameters, index/conversion conventions, and optional count-based betting practice remain open. The ticket stays claimed until those decisions are resolved.

### Launch table coverage accepted

- Blackjack starts with six decks, 3:2 blackjack, U.S. dealer hole-card/peek rules, doubling after splits, configurable dealer hit/stand on soft 17, and configurable late surrender. Matching coaching is required for every supported configuration. Exact splitting restrictions and remaining dealing/shoe details still need specification.
- Craps launches with standard craps, configurable table limits and maximum odds, configurable field payouts, and explicit come-out working/off behavior. Crapless craps and bonus bets are deferred from launch.
- The user explicitly identified crapless craps as a future enhancement and required the craps design to accommodate it. Carry this constraint into later game-engine and strategy-model decisions: standard-craps-specific rules must be identifiable and replaceable, and a strategy's compatibility must be checked for the selected variant. This does not approve crapless rules or content for the MVP.
- Roulette launches with single-zero and double-zero wheels, configurable table limits, and full-loss settlement on zero pockets for even-money bets. French half-loss and en-prison rules are deferred.

### Splitting, craps menu, and betting practice accepted

- Blackjack permits up to four hands through splitting, with resplitting of non-aces. Split aces receive one card each, cannot be resplit or doubled, and split-hand 21 pays as an ordinary win. Doubling is allowed on any initial two cards of other hands, including after splitting.
- The craps launch menu includes pass/come and their don't equivalents, odds, place/buy/lay, field, hardways, and standard one-roll propositions. Exact proposition coverage, payouts, commission rules, and working defaults remain to be specified.
- Count-based bet sizing is an optional launch exercise alongside either counting mode. Fixed bets remain the default. An enabled bet schedule prescribes stakes at each count, and betting adherence is scored separately. Exact schedule parameters remain open.
- [Blackjack coaching conventions and coverage](13-blackjack-coaching-coverage.md) verifies the remaining evidence needed for a consistent rule-specific deviation curriculum.

### Coaching evidence boundary

- The coaching-conventions investigation is complete. It identified mismatches between simplified teaching charts and rule-specific basic decisions, plus incomplete published count-conversion assumptions.
- [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md) will establish the exact numeric reference after this ticket fixes the remaining product rules and conventions. This is a separate research prerequisite for an implementation-ready map, not a claim that supported coaching has already been certified.

### Proposed defaults presented for review

These preserve the proposed defaults. The later acceptance comment records which portions the user accepted; other portions remain proposals.

**Blackjack shoe and bet schedule:** deal roughly 75% of the six-deck shoe before shuffling; finish the round that reaches the cut card. Offer penetration settings from 50% through 80% in five-percentage-point steps. Default to the learner playing alone against the dealer; allow up to four simulated additional players, following the same rule-specific basic strategy. Count only exposed cards, including the dealer hole card only when revealed. Keep unseen cards unknown to the learner. The proposed introductory count-based schedule is one base unit below true count +1, two at +1, four at +2, six at +3, and eight at +4 or higher. This is a practice schedule for adherence, not a claim of optimal bankroll management. Count-conversion conventions and deviation references await the linked evidence review; detailed drill timing, aids, and scoring belong to Counting challenges and progression.

**Craps baseline:** default maximum taking odds to 3-4-5x on 4/10, 5/9, and 6/8, respectively. For don't odds under this preset, cap the amount laid at six times the base, yielding wins of 3/4/5 times the base. Also offer flat 1x, 2x, 5x, and 10x odds presets, with don't-odds limits stated as the maximum amount to win. Don't pass/don't come push on 12. Default field pays 2:1 on 2 and 3:1 on 12; offer 2:1 on both as the alternate field setting. Place/buy and come odds default off on come-out; established come bases, don't contracts/odds, standalone lay bets, and hardways stay active. Show working status explicitly and permit legal per-bet working/off instructions. Rule evidence: [original craps rules and odds analysis](https://wizardofodds.com/games/craps/basics/), [regulator lifecycle reference](https://www.nj.gov/oag/ge/docs/Regulations/CHAPTER69F.pdf). Buy/lay commission, exact proposition menu/payouts, and denomination/limit settings still require their own explicit defaults.

**Roulette progression defaults:** use a one-unit base, red for the initial even-money selection, and the first two dozens for the initial two-dozen selection (one unit on each). Let players select other equivalent even-money bets or two different dozens before starting. Martingale doubles after a full loss, resets after a win, and permits stakes 1, 2, 4, 8, 16, 32 units; a loss at 32 ends the cycle at its cap. Three-win parlay uses 1, 2, 4 and resets after a loss or the third consecutive win. Labouchere starts with [1,2,3], removes first and last entries after a win (the sole entry if only one remains), appends the lost stake after a loss, and completes when the list empties; cap the required next stake at 32 units. A required wager beyond bankroll, strategy cap, or table limits stops new bets and reports the reason. Show a cycle result at completion/cap; the user can explicitly start another cycle with the initial state and remaining balance. A lower legal bankroll/table limit can stop a cycle before the strategy cap. These parameter choices are proposed bounded variants of the sourced families in [Roulette strategy research](../research/roulette-strategies.md).

### Craps defaults and roulette progression parameters accepted

- In response to Q13, the user accepted the 3-4-5x default odds cap, don't bets pushing on 12, field double on 2/triple on 12, alternative odds-cap settings, and the double-on-both field option. The exact menu of alternative odds caps has not yet been confirmed.
- Accepted place/buy bets and come odds defaulting off on come-out, while established come bases, don't bets, standalone lay bets, and hardways remain working. Working status must be visible, with legal working/off instructions available.
- In response to Q14, accepted a one-unit roulette progression base: Martingale 1/2/4/8/16/32 with reset after a win and cycle termination after a loss at 32; three-win parlay 1/2/4 with reset after a loss or the third consecutive win; Labouchere starting list [1,2,3] with a maximum required stake of 32 units.
- Accepted stopping new roulette bets with an explanation when the required bet exceeds balance or a limit. Show the result when a cycle completes or is exhausted; starting another cycle is explicit and uses the remaining balance.
- Q12 was not answered. Blackjack penetration, additional simulated players, and the proposed introductory bet schedule remain unaccepted proposals. No acceptance is inferred from the answers to Q13 and Q14.

### Blackjack shoe and introductory bet schedule accepted

- The user subsequently accepted Q12: shuffle after approximately 75% of the six-deck shoe, finishing the current round, with penetration adjustable from 50% to 80%.
- Default to the learner playing alone against the dealer; permit up to four optional simulated additional players.
- Accepted optional count-based betting schedule in base units: 1 below true count +1; 2 at +1; 4 at +2; 6 at +3; 8 at +4 or higher. Fixed wagers remain the default unless betting practice is enabled.
- The five-percentage-point penetration step, simulated-player policy, and exact count/deck-estimation convention in earlier proposals remain to be specified. Accepting Q12 does not certify numerical deviation references.

### Craps strategy execution proposal — awaiting review

Use the following starting behavior on a simulated 10-unit-minimum table. These amounts define the initial teaching examples; adapting them to other limits must retain legal increments and the selected strategy's meaning.

| Strategy | Proposed starting behavior |
| --- | --- |
| Pass with odds | Flat 10 on pass; add 10 odds after the point is established. Repeat after resolution. |
| Flat place 6 and 8 | Place 12 each after a point is established, including when 6 or 8 is the point. Collect every payout and leave both stakes unchanged. |
| Don't pass with lay odds | Flat 10 don't pass; once established, lay enough odds to win 10: 20 against 4/10, 15 against 5/9, or 12 against 6/8. |
| Bounded Three-point Molly | Flat 10 pass plus at most two concurrent 10 come bases, counting a pending come-area bet toward that cap. Add 10 odds to each established contract. Before a point-on roll, add one come base if room remains; resolve the roll before scheduling replacements. |
| Capped press-and-collect 6 and 8 | Start 12 each. Track each number independently: collect its first hit, add 12 from its next payout, then alternate collect/press until that number reaches 48; collect all later hits at the cap. |

Retain place stakes and press counters through a made point, with bets off on come-out; rebuild/reset after seven-out. Established come bases remain working on come-out, with their odds off under the accepted baseline. Do not remove or refund committed pass/come bases merely because an exercise stops. The detailed interaction when a complete strategy action is unaffordable, illegal, or conflicts with an override remains part of [Intuitive executable strategy creation](04-strategy-builder.md).

### Craps strategy execution accepted

- The user accepted Q15's starting rules on a simulated 10-unit-minimum table: pass 10 plus 10 odds; flat place 6/8 at 12 each; don't pass 10 plus odds sized to win 10; Three-point Molly with pass 10 and at most two concurrent come bets of 10, each established contract receiving 10 odds; and independent collect/press alternation on 6/8 from 12 in increments of 12 to a cap of 48.
- Accepted replacing resolved come bets while the table point is on. Accepted place bets off on come-out, preserving amounts and press counters through a made point and resetting after seven-out. Established come bets remain working, with their odds off.
- These amounts are illustrated in simulated currency; they do not settle casino-session ledger currencies or imply actual wagers. Cross-limit compatibility and private modifications remain subject to the strategy-builder decision.

### Remaining defaults package — proposal for Q16–Q18

Everything in this section is proposed, pending the user's review. These are True Count simulation choices, not claims that every casino uses them.

**Q16 — Craps commissions and wager menu**

- Buy commission: 5% of the buy stake. Standalone lay commission: 5% of the potential gross win. Collect commission only on winning resolutions; calculate separately per winning bet, round upward to the next whole simulation currency unit, with a minimum of one unit. Taking/laying odds attached to line/come bets remains commission-free. Do not automatically convert place wagers into buys.
- Fix these commission rules initially; custom commission timing and rounding are later configuration enhancements.
- The alternative odds-cap menu is 1x, 2x, 3-4-5x, 5x, and 10x, retaining 3-4-5x as default. For flat multiples, don't odds are limited by the amount to win; the 3-4-5x preset caps the laid stake at 6x the base.
- Proposition menu: individual 2 and 12 pay 30:1; individual 3 and 11 pay 15:1; any craps (2/3/12) pays 7:1; any seven pays 4:1. Horn is an equal allocation across 2/3/11/12, settled as its components. Hard 4/10 pay 7:1; hard 6/8 pay 9:1. All ratios are net winnings, with a winning stake returned/retained separately. Defer hop bets, horn-high/world shortcuts, Big 6/8, put bets, and place-to-lose from the launch menu; custom combinations of supported component bets remain possible. The underlying payout options are documented in [Craps rules and payouts](https://wizardofodds.com/games/craps/basics/); this exact selection and commission-rounding policy are product proposals.

**Q17 — Table-limit defaults and compatibility**

- Use simulated 10 minimum / 1,000 maximum for blackjack initial wagers and craps line/come, place/buy/lay, and field wagers; use 1 / 100 for craps hardways and propositions. Limits apply per wager/number, not to the entire table's aggregate exposure. Craps odds are governed by the selected odds multiple instead of the ordinary flat-bet maximum. A buy/lay commission is additional to the stake and must be fundable.
- Roulette: 1 / 100 per inside placement and 10 / 1,000 per outside placement, with no extra table-wide aggregate cap. A strategy unit defaults to 10 simulation currency units; each of the two dozens receives one full strategy unit. Blackjack's default base unit is also 10. Blackjack doubling, splitting, and insurance follow their specific legal amounts even when total exposure exceeds the initial-wager maximum.
- Permit changing these minima/maxima before a new session, using whole positive currency units and requiring minimum <= maximum. Preserve fixed payout schedules; table limits do not change payouts. Proper wager increments still apply (for example place 6/8 in multiples of 6, other place numbers in multiples of 5, and odds increments yielding whole-unit payouts). Blackjack may settle half-unit amounts; whole-unit input limits do not discard owed fractions.
- Reject an incompatible strategy/table pairing before guided play with the conflicting requirement identified. Let the user select a compatible table or edit a private strategy copy; never silently change the strategy's amounts or payout rules. The interaction and runtime bankroll/override handling remain with [Intuitive executable strategy creation](04-strategy-builder.md).
- Roulette supports the ordinary straight, split, street/trio, corner/first-four, six-line, dozen, column, and even-money placements legal on its selected single-/double-zero layout, plus the double-zero five-number basket. Fixed net payouts by coverage are 35:1, 17:1, 11:1, 8:1, 5:1, 2:1, and 1:1, with 6:1 for the five-number basket. A layout must explicitly enumerate legal zero-adjacent placements rather than treating arbitrary same-sized number sets as a legal bet. [Roulette payout reference](https://wizardofodds.com/games/roulette/basics/).
- The initial flat even-money/progression target is red; the initial two-dozen targets are 1–12 and 13–24. Players may choose another even-money target or two distinct dozens before starting. No target switches during a built-in cycle. This does not restrict private strategies from expressing other supported choices.

**Q18 — Blackjack counting and remaining rule conventions**

- Use half-deck estimates of cards remaining physically in the shoe, rounding to the nearest half deck (ties upward), with a minimum divisor of 0.5 decks. In isolated supplied-count drills, the displayed positive half-deck divisor is authoritative. Divide running count by this divisor, then truncate toward zero: +7/2 becomes +3 and -7/2 becomes -3. Use that same integer true count for the accepted bet schedule. This chooses a shoe-only denominator rather than the all-unobserved-cards alternative discussed in the research.
- Use the Illustrious 18 situation list as the initial compact deviation curriculum, plus the Fab 4 surrender situations only when late surrender is enabled. Numeric indices and legal-action fallbacks must be independently checked for every supported rule configuration and this conversion convention by [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md). This is a validation target, not an assertion that existing published thresholds already match it. Preserve any independently justified running-count-sign cases explicitly; do not import them merely because another chart uses them.
- Count cards only when exposed. Recompute at each decision, not only at the initial wager. An unrevealed dealer hole card never contributes to the learner's count; a negative peek does not reveal its rank. Reveal the dealer's hole card at round end even if all player hands have finished; use no burn card in the launch simulator. These final reveal/burn choices are explicit simulator defaults.
- Allow splitting equal card values, including mixed ten-value ranks. Late surrender is available only on the initial unsplit two-card hand, after any required peek excludes dealer blackjack. Insurance is offered against an ace before the peek, up to half the original initial wager, pays 2:1 on dealer blackjack, and resolves separately; a player can subsequently surrender the main hand if legal. Even money is the equivalent insurance choice on a natural blackjack. No surrender after a split, hit, or double; no double-for-less. Split-hand blackjack remains an ordinary 21 under the accepted rule.
- Default preset: dealer stands on soft 17 and late surrender enabled; expose the accepted H17/S17 and surrender toggles. Use penetration settings 50/55/60/65/70/75/80%, default 75%. Additional simulated players use rule-specific basic strategy and fixed wagers; they do not use the learner's deviation/betting policy. Draw/deal timing, depth aids, and scoring interaction remain with [Counting challenges and progression](03-counting-progression.md).

These settings complete the proposed product-rule boundary. Exact coaching reference validation and the already-linked interaction/progression decisions remain separate work on the map.

### Remaining defaults accepted

The user accepted Q16 and Q17 and agreed to Q18. The remaining-defaults package above is accepted. The consolidated answer below is the final product-rule resolution; earlier comments retain the discussion history.

## Answer

Launch with blackjack, standard craps, and single-/double-zero roulette, using named presets and bounded table configuration. The selections below were accepted in the live discussion. They establish product rules and initial teaching content; numerical blackjack coaching validation remains a separate research prerequisite for the implementation-ready map.

### Shared table and strategy policy

- Every supported configuration must have matching coaching for compatible strategies. Reject incompatible strategy/table pairings before guided play, identify the conflict, and offer a compatible table or a private strategy edit. Do not silently alter the strategy's amounts or the game's payouts.
- Measure strategy adherence separately from financial outcomes. Counting and optional bet-schedule adherence are separate from playing decisions. Difficulty labels describe what the learner manages; the catalog is not a ranking of profitability.
- All wagers here are simulated. The numerical examples do not settle real casino-session currencies or starting bankroll policy, which belong to [Bankroll ledgers and session tracking](06-session-ledgers.md).
- Configure positive whole-unit minima/maxima before a new session, requiring minimum <= maximum and retaining proper wager increments. Payout schedules stay fixed. Preserve owed fractional blackjack payouts; whole-unit input limits do not authorize rounding them away.

| Wager category | Default minimum | Default maximum | Limit basis |
| --- | --- | --- | --- |
| Blackjack initial wager | 10 | 1,000 | Per initial wager; legal insurance, splits, and doubles can increase total exposure |
| Craps line/come, place/buy/lay, field | 10 | 1,000 | Per wager/number |
| Craps hardways and propositions | 1 | 100 | Per component wager |
| Roulette inside placement | 1 | 100 | Per placement |
| Roulette outside placement | 10 | 1,000 | Per placement |

Craps odds use their selected odds cap instead of the flat-wager maximum. Commission must be fundable in addition to the stake. Roulette has no additional aggregate table cap. Place 6/8 use multiples of 6, other place numbers multiples of 5, and odds use increments producing whole-unit payouts. Blackjack and roulette default strategy base units are 10 simulation currency units.

### Blackjack rules and presets

- Six decks, U.S. dealer hole-card/peek dealing, blackjack paying 3:2. Offer dealer H17/S17 and late-surrender on/off as four supported rule combinations. Default to S17 with late surrender enabled.
- Double any initial two cards of an eligible hand, including after splitting; no double-for-less. Split equal values, including mixed ten-value ranks, up to four hands. Resplit non-aces. Split aces receive one card each, cannot be resplit or doubled, and finish as ordinary hands; split-hand 21 is not a natural blackjack.
- Late surrender applies only to the original unsplit two-card hand, after any required peek excludes dealer blackjack. No surrender after a split, hit, or double.
- Offer insurance against an ace before the peek, up to half the original initial wager, paying 2:1 on dealer blackjack. Settle it separately; subsequent surrender of the main hand is allowed if legal. Even money is the equivalent insurance choice for a natural.
- Shoe penetration settings are 50/55/60/65/70/75/80%, default 75%; finish the round reaching the cut card before shuffling. Use no burn card. Reveal the dealer hole card at round end even if all player hands have finished.
- Default to the learner alone against the dealer; allow zero through four additional simulated players. Additional players follow rule-specific basic strategy with fixed wagers.

### Blackjack modes, counts, and betting

Hi-Lo is the initial counting system. Preserve four table-practice modes:

| Mode | Playing policy | Count responsibility |
| --- | --- | --- |
| Basic | Rule-specific basic strategy | No maintained count required |
| Basic with deviations | Basic plus the selected deviation curriculum | App supplies the relevant count/condition |
| Counting with basic | Rule-specific basic strategy | Player maintains the count |
| Counting with deviations | Basic plus the selected deviation curriculum | Player maintains the count |

The four agreed counting challenge categories remain card-value recognition, running counts, true-count conversion, and counting during simulated table play. Detailed challenge progression, timing, assistance, and scoring belong to [Counting challenges and progression](03-counting-progression.md).

- Count cards only when exposed, recomputing at each decision. A concealed dealer card is excluded until revealed; a negative peek does not reveal its rank.
- Estimate decks remaining physically in the shoe to the nearest half deck, ties upward, with a minimum divisor of 0.5. A supplied positive half-deck divisor is authoritative in an isolated conversion drill. This uses the shoe-only denominator, not the alternative all-unobserved-card model explored in research.
- Divide running count by that divisor and truncate toward zero: +7/2 -> +3 and -7/2 -> -3. Use the same integer true count for betting guidance.
- The initial deviation curriculum uses the Illustrious 18 situation list plus Fab 4 surrender situations in LS configurations. Actual indices, count-sign exceptions, and legal-action fallbacks require independent validation under the selected rules and conversion convention. Do not treat a published table with different assumptions as certified for these presets.
- Fixed bets are the default. Optional betting practice is available alongside either counting mode, using the following schedule and separate adherence scoring.

| Integer true count | Bet in base units |
| --- | --- |
| Below +1 | 1 |
| +1 | 2 |
| +2 | 4 |
| +3 | 6 |
| +4 or higher | 8 |

This is a practice schedule, not an optimal-bankroll claim. Evidence and outstanding verification: [Blackjack training modes and strategy evidence](10-blackjack-strategy-research.md), [Blackjack coaching conventions and coverage](13-blackjack-coaching-coverage.md), and [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md).

### Standard craps rules

- Support pass/come and their don't equivalents, attached odds, place/buy/standalone lay, field, hardways, and the propositions specified below. Don't pass/don't come push on 12.
- Default maximum taking odds to 3-4-5x for 4/10, 5/9, and 6/8 respectively. Under that preset, don't odds permit a laid stake up to 6x the base. Also offer flat 1x, 2x, 5x, and 10x taking-odds caps, with the corresponding don't cap expressed as the amount to win.
- Field defaults to double on 2 and triple on 12, with double-on-both as the alternate. Other winning field totals pay even money.
- Place/buy bets and come odds default off on come-out. Established come bases, don't contracts/odds, standalone lay bets, and hardways remain working. Display working status and allow legal working/off instructions.
- Buy commission is 5% of stake; standalone lay commission is 5% of potential gross winnings. Collect only on winning resolutions, separately per bet, rounding upward to the next whole simulation currency unit with minimum one. Attached odds are commission-free. No automatic place-to-buy conversion. Commission timing/rounding customization is deferred.

| Bet | Net payout |
| --- | --- |
| Pass/come and don't base wins | 1:1 |
| Taking odds / buys on 4/10, 5/9, 6/8 | 2:1, 3:2, 6:5 respectively; buys also incur commission |
| Laying odds / standalone lays against 4/10, 5/9, 6/8 | 1:2, 2:3, 5:6 respectively; standalone lays also incur commission |
| Place 4/10, 5/9, 6/8 | 9:5, 7:5, 7:6 respectively |
| Hard 4/10; hard 6/8 | 7:1; 9:1 |
| Individual 2/12; individual 3/11 | 30:1; 15:1 |
| Any craps (2/3/12); any seven | 7:1; 4:1 |

Horn allocates equally across individual 2/3/11/12 and settles each component. Payout ratios above are profit; winning stakes are returned or retained separately. The mathematical and lifecycle references are linked from [Craps strategies across player levels](11-craps-strategy-research.md).

### Five built-in craps strategies

Starting amounts below apply to the default 10-minimum example table. Other table settings require compatible legal amounts or a deliberate private strategy modification.

| Strategy | Executable starting behavior |
| --- | --- |
| Pass with odds | Flat 10 pass; add 10 odds after point establishment. Repeat after resolution. |
| Flat place 6 and 8 | Place 12 on each after point establishment, including either number when it is the table point. Collect every win, retaining unchanged stakes. |
| Don't pass with lay odds | Flat 10 don't pass; after establishment, lay to win 10: 20 against 4/10, 15 against 5/9, 12 against 6/8. Keep the base through its bar-12 push. |
| Bounded Three-point Molly | Flat 10 pass and at most two concurrent 10 come bases, including a pending come-area base in that cap. Add 10 odds to each established contract. Before a point-on roll, add one come base if there is room; settle the entire roll before scheduling replacements. |
| Capped press-and-collect 6 and 8 | Start 12 each. Independently per number, collect its first hit, add 12 from its second payout, then alternate collect/press to a 48 stake cap. Collect every hit once capped. |

Keep place amounts and press counters through a made point, with bets off on come-out; reset/rebuild after seven-out. Established come bases remain working on come-out with odds off. An exercise stopping cannot refund or cancel committed pass/come bases. Exact interaction around unaffordable actions, overrides, and stopping with outstanding bets belongs to [Intuitive executable strategy creation](04-strategy-builder.md).

### Roulette rules and five strategies

- Support single-zero and double-zero wheels with full-loss zero settlement for even-money wagers. Support the normal legal straight, split, street/trio, corner/first-four, six-line, dozen, column, and even-money placements for the selected layout, plus the double-zero five-number basket.
- Net payouts are 35:1 straight, 17:1 split, 11:1 street/trio, 8:1 corner/first-four, 5:1 six-line, 2:1 dozen/column, 1:1 even-money, and 6:1 five-number basket. Legal zero-adjacent placements must be explicitly represented; arbitrary number sets with equal coverage are not interchangeable bets.
- Default even-money target is red. Players may choose another even-money target before starting. Default two-dozen targets are 1–12 and 13–24; players may choose any two distinct dozens before starting. Built-in cycles keep their chosen targets unchanged.

| Strategy | Executable starting behavior |
| --- | --- |
| Flat even-money | Repeat one strategy unit on the selected even-money target. |
| Fixed two-dozen coverage | Repeat one full strategy unit on each selected dozen, settling both component wagers. |
| Capped Martingale | Stakes 1/2/4/8/16/32 units after successive losses. A win completes the cycle and resets its state to 1; a loss at 32 terminates the cycle at its cap. |
| Three-win parlay | Stakes 1/2/4 after consecutive wins; a loss or the third consecutive win completes the cycle and resets its state. |
| Bounded Labouchere | Start [1,2,3]. Wager first plus last entries, or the sole entry. A win removes endpoints; a loss appends the lost stake. Empty list completes the cycle. Maximum required next stake is 32 strategy units. |

If the required wager exceeds available balance, table limits, or the strategy cap, stop new bets and explain the reason. Show a result when a progression cycle completes or exhausts its capacity. Starting another cycle is explicit and resets the strategy state using the remaining balance; it does not replenish funds. See [Roulette strategies across player levels](12-roulette-strategy-research.md) for evidence and source-specific variants.

### Later enhancements and boundaries

- Crapless craps is a planned enhancement. Design standard-craps-specific rules so the later variant can replace them, and check strategy compatibility against the selected variant. Preserve this constraint in the game-engine and strategy-model decisions; crapless content is not part of MVP launch.
- Defer craps bonus bets, hop bets, horn-high/world shortcuts, Big 6/8, put bets, and place-to-lose. A private strategy may still combine supported component bets. Defer customizable buy/lay commission timing and rounding.
- Defer French half-loss/en-prison roulette. Preserve room to add or revise strategies and counting systems in later content releases.
- [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md) is now unblocked. It must establish the exact numerical teaching reference before the map is implementation-ready. This product decision does not close that evidence gap.
- [Counting challenges and progression](03-counting-progression.md) defines teaching progression and scoring. [Intuitive executable strategy creation](04-strategy-builder.md) defines creation, compatibility interaction, legal-action and bankroll handling, and the executable strategy model. Community comparisons and ledgers remain with their existing tickets.
