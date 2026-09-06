# Roulette strategy research

Research date: 2026-09-05. Resolves [Roulette strategies across player levels](../issues/12-roulette-strategy-research.md); proposed product choices remain open in [Launch game rules and practice strategies](../issues/02-launch-rules-and-strategies.md).

## Findings and scope

A useful five-strategy launch proposal is **flat even-money, fixed two-dozen coverage, capped Martingale, three-win parlay, and bounded Labouchere**. Together they teach placement, payout accounting, increasing after losses, increasing after wins, and maintaining a sequence. These are curriculum recommendations, not rankings of profitability. “Advanced” below means more bookkeeping or analysis, never a better return merely from complexity.

The research assumes independent, equally likely pockets and ordinary fixed payouts. Under those assumptions, varying stakes or following recent outcomes cannot improve the expected return per amount wagered. Shackleford's original simulations compare staking systems and demonstrate this distinction; they are useful primary mathematical analysis, despite the commercial casino advertising on the hosting site. Historical invention claims and casino recommendations on that site are not relied upon. [Original betting-system analysis](https://wizardofodds.com/gambling/betting-systems/)

## Rules that change the comparison

Ordinary payout odds are net winnings: straight-up 35:1, split 17:1, street 11:1, corner 8:1, six-line 5:1, dozen/column 2:1, and red/black, odd/even, low/high 1:1. New Jersey's published rules also allow a double-zero table to choose half-loss or full-loss settlement for even-money wagers when 0 or 00 lands; its single-zero provision makes those wagers lose on zero. Therefore “American” or a location name is insufficient to specify settlement. These are documented rule examples, not a claim that every casino uses them. [NJ DGE, §13:69F-5.2, PDF pages 231–232](https://www.nj.gov/lps/ge/docs/Regulations/CHAPTER69F.pdf#page=231)

Single-zero has 37 pockets; double-zero has 38. La partage returns half an even-money stake on zero. En prison retains the stake for later resolution, and repeated-zero treatment varies; retrieving an imprisoned stake is a return of capital, not an even-money win. Do not assign one universal en-prison return without its exact transition rules. [Roulette mathematical analysis, European and French rules](https://wizardofodds.com/games/roulette/basics/)

**Independent derivation from the above pocket counts and payouts:** for a standard wager covering `k` pockets and returning `36/k` times the stake including principal, expected net per unit is `k/N × (36/k) − 1 = (36−N)/N`. This yields −1/37 (−2.7027%) for single-zero and −2/38 (−5.2632%) for double-zero. A double-zero five-number basket paying 6:1 instead yields `5/38 × 7 − 1 = −3/38` (−7.8947%). On single-zero even-money with la partage, expectation is `(18−18−0.5)/37 = −1/74` (−1.3514%); double-zero half-loss gives `(18−18−1)/38 = −1/38` (−2.6316%). These improve expected returns through settlement rules, not progression.

**Independent derivation for sessions:** when each new wager `B_t` has conditional expected net `−h B_t`, a session with a finite number of spins has expected net `−h × E[total amount wagered]`. Stop rules change exposure and the distribution of results; they do not change this expectation per wagered unit. For mixed bets, sum each stake's own edge. This argument does not assume unlimited credit or claim that every individual session loses.

## Candidate range

For each candidate below, the behavior is a concrete research proposal. A published core is distinguished from product-specific choices. All require legal denominations, adequate available bankroll, table limits, and the settlement policy described later. Unless explicitly stated, progression candidates use **one fixed even-money selection with full loss on zero**; they are not directly portable to dozens or overlapping portfolios.

| Candidate | Suggested learning level | Executable behavior | Learning value, conditions, and limitation |
| --- | --- | --- | --- |
| Flat even-money | Beginner | Select one of red/black, odd/even, or low/high before the exercise. Wager the same unit every resolved spin. | Simplest benchmark; recognize that zeros belong to neither side. Rule comparisons can include full-loss and half-loss. No progression state. |
| Flat single dozen or column | Beginner | Fix one dozen or column and repeat one unit. | Distinguish 2:1 profit from 3-unit returned stake. Hits 12 pockets; increased payout comes with fewer hits. |
| Flat straight-up | Beginner | Fix one number and repeat one unit. | Teaches 35:1 payout and sparse hits. High payout is not improved expectation. Can illustrate long droughts without forecasting a “due” number. |
| Fixed two-dozen coverage | Beginner → intermediate | Choose two different dozens before the exercise; place one unit on each every spin. | Two simultaneous wagers and net settlement. On either covered dozen, profit is +1 unit after the other stake loses; on the remaining dozen or zero, −2. Ordinary dozen rules, no la-partage benefit. |

These four are deliberately specified practice policies built from official bet definitions, rather than claims of historically named systems. [Singapore GRA, MBS rules §§3–4](https://www.gra.gov.sg/docs/default-source/game-rules/mbs/semi-automated-etg-games/semi-auto-etg---gra-website/mbs-electronic-double-zero-roulette-game-rules-version-3.pdf)

**Independent two-dozen calculation:** on single-zero, `P(+1)=24/37`, `P(−2)=13/37`; expected net is `−2/37` per two units wagered, again −1/37 per unit. A higher frequency of profitable spins does not imply a higher expected return.

| Candidate | Suggested learning level | Executable behavior | Learning value, conditions, and limitation |
| --- | --- | --- | --- |
| Martingale | Intermediate, simple arithmetic but significant exposure | Start at one unit; after each full loss double the next stake; a win completes the cycle. For repeated practice, reset to one unit. | Exponential stake growth and finite limits. Core described in [original Martingale analysis](https://wizardofodds.com/gambling/martingale/). Repeating cycles and terminating before an illegal bet are explicit product choices. |
| Three-win parlay / Paroli-style | Intermediate | Proposed bounded variant: stake 1, 2, then 4 units after consecutive wins; reset after any full loss or after the third win. | Positive progression and giving back earlier winnings. Derived from the [anti-Martingale core](https://wizardofodds.com/gambling/anti-martingale/); that source ends its session on a loss, so three-win resets are our stated variant, not a verbatim canonical rule. Avoid claiming “Paroli” identifies a unique cap. |
| D'Alembert | Intermediate | One-unit opening; add one unit after a full loss; subtract one after a win, with a one-unit floor. | Linear progression and stake floor. Published variants differ in targets and clipping; source supplies an explicit target-based variant. [Original D'Alembert analysis](https://wizardofodds.com/gambling/dalembert-betting-system/) |
| Fibonacci | Intermediate → advanced | Source-specific variant starts at the **second** 1 in `1,1,2,3,5,…`; loss moves forward one position, win back two; falling before the sequence completes the cycle. | Index state, duplicate initial values, and reset boundaries. Shackleford explicitly disputes versions starting at the first 1; specify the variant before scoring. [Original Fibonacci analysis](https://wizardofodds.com/gambling/fibonacci/) |
| Oscar's Grind | Advanced bookkeeping | Start at one unit, targeting +1 unit per cycle. Keep stake after a full loss; add one unit after a win, limited to the amount needed to reach the target; stop the cycle when target reached. | Track both stake and cycle profit. Source permits an all-in remainder when short; the proposed training policy instead stops before an unaffordable bet. [Original Oscar's Grind analysis](https://wizardofodds.com/gambling/oscars-grind/) |
| Labouchere / cancellation | Advanced bookkeeping | Start from a displayed positive list, e.g. proposed `[1,2,3]`; bet first plus last, or the sole remaining entry. Win removes endpoints; full loss appends the lost stake. Empty list completes the cycle. | List state and growing exposure. Source uses ten equal starting entries and defines partial-bankroll exceptions; proposed `[1,2,3]` and stop-before-limit must be labeled as selected variants. [Original Labouchere analysis](https://wizardofodds.com/gambling/labouchere/) |
| Fixed neighbours coverage | Intermediate → advanced placement | Choose a center pocket and one or two neighbours on either side in the actual wheel order; place one equal straight-up unit on every selected pocket each spin. | Wheel order versus layout adjacency, total stake, and aggregate payout. The GRA rules explicitly offer 3-, 5-, or 7-chip neighbour packages depending on terminal. [GRA neighbour rules, Appendix F](https://www.gra.gov.sg/docs/default-source/game-rules/mbs/semi-automated-etg-games/semi-auto-etg---gra-website/mbs-electronic-double-zero-roulette-game-rules-version-3.pdf#page=10) |
| Fixed French sector package | Advanced placement | Repeat the selected package's published chip decomposition unchanged: voisins uses 9 chips, tiers 6, orphelins 5. The exact constituent wagers must be visible before coaching. | Complex placement, overlapping coverage, unequal payouts. OLG describes these packages and warns availability depends on house rules. A sector name alone is insufficient executable content. [OLG operator education](https://www.playsmart.ca/table-games/roulette/how-to-play/european-roulette/) |

The advanced sector option needs its exact decomposition recorded before it could become an implementation specification; it is a sourced candidate, not implementation-ready merely from its label. Fixed neighbours is immediately specifiable from wheel order and neighbour count. Neither policy predicts pockets on the independent wheel assumed here; that is an inference from the stated model.

## Five complementary launch proposals

1. **Flat even-money (beginner):** placement and settlement benchmark, also suitable for the first wheel/rule comparison exercise.
2. **Fixed two-dozen coverage (beginner/intermediate):** more frequent positive spins, portfolio settlement, and total exposure. It broadens learning beyond a catalog made entirely of even-money progressions.
3. **Capped Martingale (intermediate):** demonstrate exponential growth and the difference between frequent small cycle wins and occasional larger losses. Cap the required next bet and terminate the cycle before violating it; do not silently replace doubling with maximum-table betting.
4. **Three-win parlay (intermediate):** provides the contrasting increase-after-win policy with a small, visible state of zero, one, or two consecutive wins. Call it “Three-win parlay (Paroli variant)” only with that variant description displayed.
5. **Bounded Labouchere (advanced):** an accessible advanced bookkeeping exercise with an explicit list, completion condition, and finite exposure. `[1,2,3]` is a proposed learning list, not a canonical requirement.

If “advanced” should emphasize table fluency rather than sequence arithmetic, fixed neighbours is the strongest replacement for Labouchere. This is a product choice for the parent issue. D'Alembert, Fibonacci, and Oscar's Grind remain useful expansion candidates, but add less new breadth than the proposed five together.

## Conditions required for correct coaching

These are **proposed specification requirements**, based on the ambiguities above:

- Keep wheel/payout/zero policy, bet selection, stake policy, and session stopping rules separate. Bind each preset to all four. Do not silently change the chosen strategy when table settings change.
- Each strategy declares base unit, initial state, permitted wager types, next-state transitions, cycle completion/reset, maximum stake, available-bankroll requirements, and exercise horizon. Portfolio checks validate both total commitment and each component.
- An unavailable required bet ends the cycle with a recorded reason such as bankroll or table maximum; it does not count as an arithmetic mistake. Never assume automatic top-ups, all-in remainder bets, or silent clipping. Historical descriptions vary on these points.
- Full-loss zero updates ordinary progression loss state. A void spin leaves it unchanged. Half-loss, prison entry, prison continuation, stake release, and full loss are separate events. The baseline proposed progression variants are unsupported on half-loss/en-prison until their transitions are explicitly selected; supported combinations must always retain coaching.
- Flat bets can support half-loss without progression ambiguity, provided fractional returned amounts are represented exactly. For en prison, decide whether to wait for resolution or allow new concurrent wagers and how locked chips affect available bankroll.
- A versioned teaching example should show the required stake and reason before scoring. Record strategy adherence separately from bankroll profit, observed hit rate, total turnover, maximum stake, and limit-triggered termination. A correct losing action remains correct.

**Independent examples:** Martingale stakes `1,2,4,8,16,32` consume 63 units after six full losses, with 64 required next. A three-win parlay produces +7 units after three wins; loss at any of its three stages yields −1 for that cycle, before repeating. The payoff distribution changes, but neither policy changes per-unit expectation.

## Evidence quality and remaining boundaries

The original research paper by Han and Wang proves an infinite expected largest bet for uncapped Labouchere when win probability is at most one half. That theoretical model is not a prediction that a finite training wallet has an infinite loss; it explains why unlimited-bankroll narratives are misleading. [Expectation of the Largest Bet Size in Labouchere System](https://arxiv.org/abs/1807.11729)

Physical roulette advantage techniques are a separate advanced topic. Small and Tse experimentally investigate wheel/ball position and velocity measurements, rather than a stake progression based only on past winning numbers. Such observation inputs are outside the independent-outcome practice model used here; do not market ordinary “hot numbers” or sectors as equivalent. [Predicting the Outcome of Roulette](https://arxiv.org/abs/1204.6412)

The study establishes evidence and candidate behavior, not historical authorship. Names such as Paroli, Fibonacci, and Labouchere do not uniquely determine reset or bankroll behavior. Before content implementation, choose exact variants and verify every advertised wheel/settlement pairing. No current casino availability, betting access, legal advice, or real-money recommendation is inferred from these sources.
