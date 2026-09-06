# Counting challenges and progression

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:grilling
Type: grilling
Status: resolved
Assignee: Codex
Blocked by: 02

## Question

How do the four agreed counting challenge types teach and measure accuracy, speed, and improvement? Decide difficulty, feedback, timing, scoring, personal bests, and transition to table play using the selected blackjack rules and counting systems.

## Comments

### First discussion round — proposals awaiting user decisions

- Progression: recommend a suggested path through card-value recognition, running counts, true-count conversion, and table counting, with every category available immediately within the accepted training allowance. Recommend the next step based on accuracy rather than locking content behind completion. Exact readiness thresholds remain for a later round.
- Feedback: recommend Learn and Check variants within each category. Learn provides immediate explanations and retries; Check withholds correctness feedback until the end. Keep their results separate, and retain first-answer accuracy even when a learner corrects an answer. Exact assistance, timing, and best-result eligibility remain to be decided.
- Default challenge sizes: propose 20 card-value questions, 52 exposed cards for a running-count challenge, 10 supplied-count/divisor conversion questions, and 10 completed blackjack rounds for a table challenge (split hands remain within their original round). These are activity sizes, not daily-allowance definitions. Checkpoint frequency, pacing, alternative lengths, and challenge/table-mode interaction remain open.

At the time this round was proposed, no selections had been accepted. Numerical blackjack coaching validation remains separate in [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md); this discussion does not certify deviation thresholds.

### Learning structure accepted

- The user accepted Q1: all four challenge categories are available immediately within the accepted training allowance, with an accuracy-based suggested path rather than prerequisite locks.
- The user accepted Q2: each category offers Learn with immediate explanations/retries and Check with correctness feedback withheld until the end. Results remain separate; corrected answers do not erase first-answer errors. Timing is optional.
- The user accepted Q3's default sizes: 20 card-value questions; 52 exposed cards for running count; 10 conversion questions with supplied running counts and deck divisors; 10 completed table rounds, including split hands within their originating round.

### Second discussion round — proposals awaiting user decisions

- Q4, running-count checkpoints: propose a zero starting count and a randomized 52-card segment from a six-deck shoe, without forcing the segment to balance to zero. Learn asks for the cumulative count after each card, explains mistakes, and establishes the correct count before continuing. Check asks after cards 13, 26, 39, and 52 without revealing correctness. Reference counts always come from actual exposed cards, not earlier learner answers.
- Q5, pacing: propose self-paced exercises by default, optional elapsed-time measurement, and optional automatic card presentation at 3, 2, or 1 seconds per card for running-count exercises. Automatic presentation pauses for count-entry checkpoints; input has no deadline. No forced speed increases or countdown failure. Table pacing is specified separately after its interaction format is selected.
- Q6, table challenge format: propose both Observe (simulated players make the playing/betting decisions while the learner counts) and Play (the learner also uses either accepted counting mode, optionally with the accepted bet schedule). Observe is the suggested entry point. In Play, Learn retains immediate strategy coaching; Check delays correctness feedback for both counts and strategic decisions until results, while still enforcing legal actions immediately. Check is an assessment distinct from corrective guided practice. Exact count prompts, deck-estimation aids, and scoring attribution remain open.
- Q7, results and personal bests: propose separate exact first-answer accuracy for card values, running count, and true-count conversion, with playing and betting adherence separately where applicable. Show errors and their magnitude without partial accuracy credit. Personal bests compare the same challenge configuration, length, assistance, and pacing; accuracy is the primary record, with fastest completion tracked only for perfect, completed, unassisted Check runs. Timer boundaries, interruption eligibility, and readiness thresholds remain open.

### Checkpoints, pacing, table formats, and results accepted

- The user accepted Q4 and requested a toggle to show or hide the running count. The toggle is an accepted capability; its defaults, effect on assessment, and availability in table challenges await the next round.
- Accepted Learn count entry after each card with correction before continuing, and Check entry every 13 cards without immediate correctness feedback. Running-count challenges start at zero and use 52 randomized cards from the six-deck shoe, without a forced zero final count.
- The user accepted Q5: self-paced by default, optional elapsed timing, and running-count automatic presentation at 3/2/1 seconds per card, pausing for entry without answer deadlines or automatic speed increases.
- The user accepted Q6: Observe and Play table challenges, with Observe the suggested entry point. Play supports counting with basic or counting with deviations and optional bet sizing. Learn coaches immediately; Check defers count and strategy feedback, while enforcing legal actions immediately.
- The user accepted Q7: exact first-answer accuracy with separate counting, playing, and betting results; error magnitude without partial credit; personal bests only across matching settings; fastest records only for perfect, completed, unassisted Check runs.

### Third discussion round — proposals awaiting user decisions

- Q8, running-count toggle: propose availability in both running-count and table challenges, hidden by default. It displays the app's reference running count, never concealed-card information. Revealing it during Check marks the whole attempt assisted, permanently for that attempt even after hiding it again; correctness explanations still wait until results. Keep the result but exclude it from unassisted records and advancement evidence. Learn is already assisted; preserve whether the count was revealed for result comparability. This is a proposed explicit exception to Check's absence of correctness-revealing aids, not yet accepted.
- Q9, table count prompts and deck information: propose entering running count and true count before each round's bet and running count after each round's final dealer-card reveal, including the tenth round. Counting-with-deviations additionally requests the relevant count at each count-dependent playing/insurance decision. Supply the correctly estimated half-deck divisor initially, applying the accepted shoe-only convention; defer estimating deck depth from a visual shoe to a later enhancement. A supplied divisor is part of the task definition and does not itself make the attempt assisted.
- Q10, suggested advancement: propose recommending the next category after two consecutive completed, unassisted Check attempts on the same settings, each with at least 95% exact first-answer accuracy in every counting metric being tested. With only four running-count answers or ten conversion questions this requires all answers correct. Learn/assisted attempts do not establish readiness. No content locks; no speed or winnings requirement. Exact interruption of a qualifying streak by incomplete or differently configured activity remains to be specified.
- Q11, interruptions and retries: propose pause/resume and automatic pause on backgrounding, preserving answers and sequence. Stop the optional performance timer while paused or in correction explanations; retain interrupted completed accuracy results but exclude paused/backgrounded attempts from fastest records. Incomplete attempts do not earn personal bests or advancement. Retry starts a fresh randomized challenge with separate results. These rules concern challenge results; attempt consumption and offline recovery remain with their existing tickets.

### Count visibility, table prompts, and advancement accepted

- The user accepted Q8: the running-count toggle is available in running-count and table challenges, hidden by default. Revealing it in Check permanently marks the attempt assisted, preserving the result but excluding it from unassisted records and advancement recommendations. Only exposed cards contribute to the displayed count.
- The user accepted Q9's proposed table prompts and supplied half-deck divisor, with an additional requirement: users can require count entry every N rounds and choose N. Visual shoe-depth estimation is deferred. How N replaces the otherwise accepted prompts remains to be clarified; do not keep every-round prompts unconditionally when N is greater than one.
- The user accepted Q10: recommend advancement after two consecutive completed unassisted Check attempts at matching settings, each with at least 95% accuracy in every counting metric tested. No speed/winnings prerequisite or access locks.
- Q11 was not answered. Pause/resume, timer interruptions, incomplete-attempt handling, and fresh-randomized retry semantics remain proposals.

### Fourth discussion round — checkpoint interval clarification

- Q12 proposal: for the default ten-round table challenge, select an integer N from 1 through 10 before starting, default 1. N=1 retains the accepted before-bet, round-end, and count-dependent decision prompts. N>1 replaces those with running-count and true-count entry after each N completed rounds, plus the final round if it is a partial block. For example N=3 prompts after rounds 3, 6, 9, and 10. Skip extra count-entry prompts between those checkpoints even in deviation mode; playing and betting decisions still occur normally. Learn corrections at checkpoints and normal immediate strategy coaching remain, while Check retains delayed feedback. Compare personal bests and advancement only at matching N/prompt configurations. This interpretation awaits acceptance.
- Repeat unanswered Q11 for decision; do not infer acceptance from Q8–Q10.

### Interruptions and configurable table checkpoints accepted

- The user accepted Q11: allow pause/resume and automatically pause on backgrounding, preserving sequence and answers. Exclude pauses and explanations from the performance timer. Completed accuracy results remain eligible, but any pause/background interruption disqualifies fastest records. Incomplete attempts earn neither personal bests nor advancement; retry starts a fresh randomized challenge.
- The user accepted Q12: choose N=1–10 before a ten-round table challenge, default 1. N=1 retains the agreed detailed prompts. N>1 replaces them with running-count and true-count entry after every N completed rounds and after the final partial block, suppressing intervening count-entry prompts even in deviation mode. For N=3, checkpoint rounds are 3/6/9/10. Playing and betting decisions continue normally. Comparison settings include N and the resulting prompt configuration.

### Final defaults round — proposals awaiting user decisions

- Q13, content and difficulty: retain the agreed challenge lengths as fixed MVP lengths. Card-value challenges mix all ranks and all three Hi-Lo values. Conversion challenges mix zero, positive, and negative running counts from -20 through +20, with supplied half-deck divisors from 0.5 through 6.0, including exact and fractional quotients to test truncation. Table challenges begin at a fresh six-deck shoe and zero count, defaulting to the accepted S17/late-surrender table with no additional players; expose the already accepted table settings, Observe/Play, optional bet schedule, and N. Table card reveals are self-paced, advancing through the normal dealing sequence rather than displaying a completed round at once; automatic table pacing and custom challenge lengths are later enhancements. Existing automatic 3/2/1-second running-count pacing remains. Supplied divisors reflect the accepted physical-shoe convention and are not an assistance flag.
- Q14, scoring attribution: grade reference running counts and true counts against actual exposed cards and the accepted conversion, and grade playing/betting adherence against the actual applicable reference policy. When a contemporaneous entered count is available, separately explain correct arithmetic or policy application to a wrong entered count without changing reference accuracy/adherence. Do not infer an unreported count or claim a specific cause for a mistake between N-round checkpoints. Repeated wrong cumulative counts remain separate wrong checkpoint answers; explanations may identify persistent drift. Show exact correct/total denominators and error review; do not create a blended winnings/skill score. Malformed count input is rejected without submission; an explicit skip is incorrect and feedback follows Learn/Check rules. Legal-action enforcement does not erase a learner's attempted deviation from adherence. A metric with no tested opportunities is N/A, not 100%; it cannot establish readiness for that metric.
- Q15, records and recommendation edge cases: keep readiness streaks per matching configuration. A completed below-threshold unassisted Check or an abandoned Check breaks that configuration's streak; Learn, assisted completed attempts, and activity at other configurations neither advance nor erase it. Once earned, retain the readiness milestone, offering review if later accuracy falls. After table counting, recommend Play or a more demanding existing setting without adding a locked tier. Performance timing runs from first exercise content to the final required answer, including presentation, thinking, count-entry time, and ordinary table actions, excluding accepted pauses and explanations; results review is outside the timer. Fastest records require every tested metric to be perfect, including playing/betting adherence when enabled, and no pause/backgrounding or assistance. Keep separate accuracy records for Learn, assisted Check, and unassisted Check and compare the same rules, mode, content/reference version, length, pacing, N, and aids. Preserve completed accuracy history and earned milestones if coaching references change, but start fresh comparison/streak groups for the new reference. Reports describe readiness only for the tested counting skill/settings.

Allowance charging for Observe versus Play, retries, and interruptions remains in [Training allowance measurement and experiment rules](09-training-allowance-measurement.md). Starting balances, inability to fund a legal strategy action, and offline recovery retain their existing ledger, strategy-builder, and lifecycle owners; this ticket does not silently settle those policies.

### Final defaults accepted

The user accepted Q13, Q14, and Q15. Together with the earlier accepted rounds, this settles the challenge structure, configurable prompts, scoring, pacing, records, and progression. The Answer below is the authoritative resolution; preceding proposals and acceptance comments preserve the discussion history.

## Answer

### Learning structure and challenge content

All four Hi-Lo challenge categories are immediately available within the accepted training allowance. Suggest card values → running count → true-count conversion → table counting, without prerequisite locks. Accuracy drives recommendations; speed and winnings do not.

Every category offers **Learn**, with immediate explanations and retries, and **Check**, with correctness feedback deferred until results. Corrections never erase the first submitted answer from accuracy. Keep Learn and Check results separate.

| Category | Fixed MVP length | Content and count entry |
| --- | --- | --- |
| Card-value recognition | 20 questions | Mix all ranks and all three Hi-Lo values. |
| Running count | 52 exposed cards | Begin at zero; use a randomized segment from a six-deck shoe, without forcing a zero final count. Learn requests the cumulative count after every card and establishes the correct count before continuing. Check requests it after cards 13, 26, 39, and 52 without revealing correctness. |
| True-count conversion | 10 questions | Supply running counts from −20 through +20 and positive half-deck divisors from 0.5 through 6. Include zero, both signs, and exact/fractional quotients requiring the accepted truncation convention. |
| Table counting | 10 completed rounds | Begin with a fresh six-deck shoe and zero count. Split hands remain within their originating round. Use Observe or Play and the checkpoint policy below. |

Use the rules and conversion convention in [Launch game rules and practice strategies](02-launch-rules-and-strategies.md). Table defaults are S17 with late surrender and no additional players. Expose the already accepted table conditions and zero through four additional players. Supply the correctly estimated half-deck divisor using the physical-shoe convention; this is part of the task, not an assistance flag. Concealed cards never contribute to the learner's reference running count until exposed.

### Table formats and configurable count checkpoints

- **Observe:** simulated players handle playing and betting decisions while the learner counts. Suggest this as the entry point to table counting.
- **Play:** the learner uses counting with basic or counting with deviations, with the accepted optional bet schedule. Learn retains immediate strategy coaching and retry/override behavior. Check defers strategic correctness feedback until results while still enforcing legal actions immediately.
- Select an integer checkpoint interval **N=1–10** before starting; default **N=1**.
- **N=1:** request running count and true count before each round's bet, and running count after each round's final dealer-card reveal, including the tenth. When playing with deviations, also request the relevant count at count-dependent playing or insurance decisions.
- **N>1:** replace those prompts with running-count and true-count entry after each N completed rounds, plus the final partial block. Suppress intervening count-entry prompts even in deviation mode; normal playing/betting decisions and Learn strategy coaching continue. For N=3, checkpoint rounds are 3, 6, 9, and 10.

### Assistance and feedback

Provide a **show/hide running count** toggle in running-count and table challenges, hidden by default. It displays the reference count of exposed cards. Showing it during Check permanently marks the entire attempt assisted, even if hidden again. Retain the result, but exclude it from unassisted records and advancement evidence. Other Check correctness explanations still wait until results.

Learn is assisted by its immediate feedback. Preserve count-visibility use for comparison purposes. Check's optional count reveal is an explicit exception to otherwise withheld correctness feedback.

### Pacing, interruptions, and retries

- Default to self-paced exercises with optional elapsed timing. Running-count exercises also offer automatic presentation at 3, 2, or 1 seconds per card, pausing for count entry. No answer deadline, automatic speed increase, or countdown failure.
- Table reveals are self-paced through the normal dealing sequence rather than showing the completed round at once.
- Allow pause/resume and automatically pause on backgrounding, preserving the sequence and answers. Any pause/background interruption excludes fastest records; completed accuracy results remain eligible.
- Measure performance time from first exercise content to the final required answer. Include presentation, thinking, count entry, and ordinary table actions; exclude pauses, correction explanations, and results review. This performance timer does not determine allowance consumption.
- Incomplete attempts earn no personal bests or advancement. Retry begins a fresh randomized challenge with separate results.

### Accuracy and error attribution

Use exact first-answer accuracy, with separate correct/total results for card values, running count, and true count, and separate playing/betting adherence where applicable. Show error magnitudes and explanations without partial accuracy credit or a combined winnings/skill score. A metric with no tested opportunities is **N/A**, not 100%, and cannot establish readiness for that metric.

Grade running counts against actual exposed cards and true counts against the accepted conversion of the reference running count. Grade playing/betting decisions against the actual applicable reference policy. Where a contemporaneous learner-entered count is available, explain correct arithmetic or policy application to an incorrect count without changing reference accuracy or adherence. Between checkpoints, do not infer the learner's count or claim a specific cause for an incorrect decision.

Each incorrect cumulative checkpoint answer remains an error even when it carries forward earlier drift; the review can explain that relationship. Malformed count input must be corrected before submission; an explicit skip is incorrect and follows Learn/Check feedback timing. Enforcing legality does not erase an attempted strategy error from adherence.

### Personal bests and progression

- Maintain separate accuracy records for Learn, assisted Check, and unassisted Check. Compare matching rules, mode, length, pacing, checkpoint configuration, aids, and teaching-reference version.
- Fastest records require a completed, unassisted, uninterrupted Check with every tested metric perfect, including playing and betting adherence when enabled.
- Recommend the next category after **two consecutive completed, unassisted Check attempts at matching settings**, each with **at least 95% exact first-answer accuracy in every counting metric tested**. Four running-count answers or ten conversion questions therefore require all answers correct. This is readiness for the tested counting skill/settings, not a profitability claim or speed requirement.
- Maintain streaks per matching configuration. A below-threshold completed unassisted Check or an abandoned Check breaks that configuration's streak. Learn, completed assisted attempts, and activity at other configurations neither advance nor erase it.
- Keep earned readiness milestones; later errors can trigger a review suggestion. After table counting, suggest Play or more demanding existing settings, without adding a locked tier.
- Preserve history and earned milestones when teaching references change, but begin fresh comparison/streak groups for the new reference.

### Later enhancements and remaining owners

- Defer visual shoe-depth estimation, custom challenge lengths, and automatic table pacing to later enhancements. Carry them into delivery-stage planning.
- [Training allowance measurement and experiment rules](09-training-allowance-measurement.md) defines charging for Observe/Play challenges, retries, abandonment, pauses, and recovery, including their relationship to guided-practice budgets. This resolution does not imply double charging or determine which budget applies.
- [Intuitive executable strategy creation](04-strategy-builder.md) owns legal-action fallbacks, limits, and insufficient-balance interaction; [Bankroll ledgers and session tracking](06-session-ledgers.md) owns starting balances and session records. Those decisions must account for Play challenges without redefining their scoring.
- [Offline access and subscription lifecycle](07-offline-lifecycle.md) owns durable recovery, synchronization, and cross-device enforcement. Preserve the accepted pause/result semantics when resolving those policies.
- [Blackjack coaching reference validation](14-blackjack-coaching-reference-validation.md) still must validate numerical basic/deviation references. Resolving challenge behavior does not certify that teaching content or make the entire map implementation-ready.
