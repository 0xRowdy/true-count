# Training allowance measurement and experiment rules

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:grilling
Type: grilling
Status: open
Assignee: none
Blocked by: 01, 02, 03

## Question

Given the selected game rules and counting challenge structure, how precisely are the configurable training allowances measured and evaluated? Preserve the accepted access and initial trial policy in [Training access and premium benefits](01-training-and-premium.md).

Define which activity consumes timed allowance (including pauses, backgrounding, and coaching), what a turn means for each game (including split blackjack hands and unresolved craps bets), and when a counting challenge consumes an attempt (including abandonment and retry). Specify trial turn counts and training-bankroll amounts, shared budgets across games, inability to place a legal bet, outstanding bets at exhaustion/reset, and how to move between policies without granting unintended extra allowance.

Define test-group assignment, when policy changes take effect between activities, user-facing allowance explanations, and success measures for comparing allowance methods. Keep pricing experiments separate enough to interpret results. Daily reset authority, device-clock manipulation, and cross-device/offline enforcement belong in [Offline access and subscription lifecycle](07-offline-lifecycle.md).

## Comments

[Counting challenges and progression](03-counting-progression.md) is resolved. Use its Answer for fixed challenge lengths, Learn/Check and Observe/Play formats, configurable table checkpoints, and pause/retry behavior. Decide explicitly which allowance applies to a Play table challenge that also exercises strategy decisions and optional betting; the challenge decision does not authorize charging both budgets. Distinguish the performance timer used for personal bests from allowance accounting, and cover assisted attempts, abandonment, retry, and interrupted recovery without silently granting additional allowance.
