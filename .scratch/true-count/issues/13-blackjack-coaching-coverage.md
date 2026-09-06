# Blackjack coaching conventions and coverage

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:research
Type: research
Status: resolved
Assignee: Codex blackjack research agent

## Question

For the accepted six-deck Hi-Lo launch rules, what source-consistent basic/deviation curriculum and count-conversion conventions can provide correct coaching? Rules: U.S. hole card/peek; 3:2 blackjack; H17/S17 configurable; late surrender on/off; double any initial two cards including after splitting; up to four split hands, resplit non-aces, one card on split aces, no resplitting/doubling aces. Verify primary/original sources for rule-specific index coverage, running-count sign exceptions, conversion and remaining-deck estimation, legal-action fallbacks, insurance, and observable-card timing. Recommend a bounded coherent convention and identify precisely what evidence remains unavailable; do not certify unsupported combinations. Product selections remain with the parent ticket.

## Comments

Continue the existing [Blackjack training modes and strategy evidence](10-blackjack-strategy-research.md), avoiding repeated broad research. Findings belong in ../research/blackjack-coaching-coverage.md. This workspace is not a Git repository; use the local artifact instead of a research branch.

## Answer

Evidence investigation resolved in [Blackjack coaching conventions and coverage](../research/blackjack-coaching-coverage.md). No inspected public package completely specifies and certifies all four accepted combinations. BJA H17/S17 PDFs establish RC-sign exceptions and fallback keys but omit complete conversion/depth assumptions; a concrete S17 soft-18-versus-2 mismatch prevents treating the full BJA chart as exact rule-specific basic strategy. Wizard's authorized I18/F4 source is strong provenance, but its accompanying S17 simulation permits resplitting aces and does not certify the accepted matrix.

Recommend a finite I18-shaped Hi-Lo curriculum plus LS-only surrender situations, rule-specific basic policies, and one explicitly defined conversion/depth convention validated together. The report proposes half-deck divisors and truncation as a new validation target, not as established source behavior. A single bounded content-validation artifact must close numeric indices, fallback/reveal timing, exact remaining-card conventions, and the remaining minor rule ambiguities before coaching coverage is certified. Parent product selection remains open.
