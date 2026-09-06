# True Count

True Count is a table-game practice and performance-tracking app for recreational players first and beginners second. Its games include blackjack, craps, and roulette.

## Language

**Table conditions**:
The rules and betting constraints governing a simulated game, used to determine which actions and strategy guidance apply.

**Rule preset**:
A named starting configuration of table conditions that a player can customize within the supported choices.

**Strategy**:
A system prescribing a player's actions or bets under particular game conditions. A strategy is the reference for coaching and adherence measurement.

**Guided practice**:
Simulated play against a selected strategy, with corrections offered before a deviating move is executed. The player can retry or explicitly override the correction.

**Blackjack training mode**:
A combination of the playing decisions being practiced and responsibility for maintaining the count. Basic and deviation practice can use app-supplied conditions, while counting modes require the player to maintain the count.

**Playing deviation**:
A prescribed departure from blackjack basic strategy when a specified condition is met. Following a selected deviation is strategy adherence, distinct from a player overriding coaching.

**Counting system**:
The card values and count calculations used to summarize exposed cards for blackjack practice. A counting system is distinct from the playing decisions or bet amounts selected using its count.

**Bet schedule**:
A rule mapping a blackjack count to a prescribed wager amount. Following the schedule is assessed separately from maintaining the count and choosing playing actions.

**Running count**:
The accumulated counting-system values of cards exposed during the current blackjack shoe. Concealed cards do not contribute until revealed.

**True count**:
The running count adjusted for the estimated decks remaining in the shoe using the selected conversion convention. It supplies conditions for playing deviations and bet schedules.

**Shoe penetration**:
The portion of a blackjack shoe dealt before the shuffle point is reached. A round already in progress finishes before the shuffle.

**Strategy cycle**:
A sequence of bets governed by a strategy's starting state and completion or termination rules. Restarting a cycle resets its strategy state without replenishing the session balance.

**Free play**:
Simulated table-game play without a required strategy to follow.

**Strategy adherence**:
How consistently a player follows the selected strategy, measured separately from financial results.

**Practice session**:
A period of simulated play with its own performance history and simulated balance.

**Casino session**:
A manually recorded period of real casino play, tracked separately from simulated practice.

**Bankroll**:
A tracked balance allocated to play, rather than money held or wagered by True Count. Simulated and real-play balances remain separate.

**Community strategy**:
A strategy submitted by an authenticated user with a profile for others to practice and rate. Its popularity and reported performance are distinct measures.

**Offline game selection**:
The single game a free account selects for offline play. Premium accounts can access all three launch games offline.

**Premium account**:
A subscription tier with full training access, all three launch games available offline, and no advertising.

**Counting challenge**:
A short, replayable exercise in card-value recognition, running counts, true-count conversion, or counting during simulated table play. Progress rewards accuracy before speed.

**Learn variant**:
A counting challenge that provides immediate explanations and retries. Its accuracy preserves the learner's first answer even after correction.

**Check variant**:
A counting challenge that withholds correctness feedback until the end, except for a reference count the learner explicitly chooses to reveal. Its results are kept separate from Learn results.

**Assisted attempt**:
A challenge attempt that provides learning aids revealing the answer, including a Check attempt in which the learner shows the reference running count. Hiding the aid again does not restore unassisted status.

**Observe table challenge**:
A counting challenge in which simulated players make the playing and betting decisions while the learner maintains the count.

**Play table challenge**:
A counting challenge in which the learner also makes playing decisions, with optional bet-schedule practice.

**Count checkpoint**:
A point in a counting challenge at which the learner submits a running count, true count, or both for assessment.

**Readiness milestone**:
An earned indication that a learner met the counting-accuracy standard for a particular challenge configuration. It supports a next-step recommendation without restricting access to other challenges.

**Training allowance**:
The daily amount of guided practice or counting challenges available to a free account. Guided-practice allowances may be measured by time, turns, or a training bankroll.

**Training bankroll**:
A daily simulated balance used to limit guided practice under a bankroll-based allowance. It is separate from saved practice and casino balances.
