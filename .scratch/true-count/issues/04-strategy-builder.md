# Intuitive executable strategy creation

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:prototype
Type: prototype
Status: open
Assignee: none
Blocked by: 02

## Question

What guided creation and editing flow lets recreational players express all agreed strategy rules without programming? Prototype representative blackjack, craps, and roulette strategies; cover conflicting rules, missing actions, invalid bets, table limits, exhausted balances, previews, and explanation generation. Decide the executable strategy model and the minimum support required for later tutorials through live user feedback.

## Comments

The accepted [Counting challenges and progression](03-counting-progression.md) Answer supplies a second consumer of strategy evaluation: Play table challenges. Preserve immediate corrections in Learn and deferred strategic feedback in Check, while enforcing legality immediately in both. Reference adherence uses the actual applicable count; explanations may separately identify consistency with a contemporaneous learner-entered count. Configurable checkpoints mean a learner count will not always be available. Include insufficient-balance and legal-action fallback behavior during these challenges in the existing prototype scope.
