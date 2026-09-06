# Blackjack coaching reference validation

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:research
Type: research
Status: open
Assignee: none
Blocked by: 02

## Question

After Launch game rules and practice strategies fixes the full rules and count conventions, which exact basic decisions, legal-action fallbacks, and Hi-Lo deviation thresholds are valid for each supported configuration? Obtain a suitably usable reference package or generate and independently check the necessary action values under those fixed assumptions. Cover the finite selected deviation situation list, conversion/deck-estimation boundaries, insurance/peek/surrender order, split limits, forced split aces, and revealed-card timing. Record actual comparisons and discrepancies. Resolve the numeric teaching reference as a planning evidence artifact; do not implement the production app or treat a future test checklist as completed validation.

## Comments

The evidence gap and finite validation criteria are documented in [Blackjack coaching conventions and coverage](13-blackjack-coaching-coverage.md). Product choices in [Launch game rules and practice strategies](02-launch-rules-and-strategies.md) are prerequisites; do not choose those on the user's behalf. Findings belong in ../research/blackjack-coaching-validation.md. This workspace is not a Git repository; use the local artifact instead of a research branch. The map cannot be considered implementation-ready while this evidence remains unresolved.

### Product prerequisites settled

[Launch game rules and practice strategies](02-launch-rules-and-strategies.md) is resolved; use its final Answer as the authoritative rule and convention input. The accepted denominator is physical cards remaining in the shoe, estimated to the nearest half deck (ties upward, minimum 0.5), with true-count truncation toward zero. This supersedes the research report's alternative all-unobserved-card proposal. The answer also fixes penetration, reveal/burn behavior, mixed-ten splitting, insurance/surrender order, and the I18/F4 situation-list scope. This ticket is unblocked and remains unclaimed.
