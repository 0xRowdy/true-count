# True Count — MVP decision map

Label: wayfinder:map

## Destination

An implementation-ready MVP spec for iOS and Android, with the broader product vision mapped into later releases. The map is complete when implementation can proceed without unresolved product or technical decisions.

## Notes

- Planning only; implementation and release are separate efforts.
- Confirmed starting requirements: [True Count — confirmed planning inputs](brief.md).
- Use the wayfinder, grilling, and domain-modeling skills; use prototype for interaction decisions.
- Local Markdown is the issue tracker. Child tickets live in issues/. Open means unclaimed; blocked tickets wait until all listed dependencies are resolved. Claim before working; append the answer on resolution.
- Resolve at most one non-research ticket per working session.
- Preserve the agreed three-game launch scope.
- Recommendations are proposals until accepted. Research evidence and prototype feedback may reveal more tickets.
- Crapless craps is a planned enhancement after standard craps; carry its extensibility requirement into game-engine and strategy-model decisions. The accepted scope is recorded in [Launch game rules and practice strategies](issues/02-launch-rules-and-strategies.md).
- The first available ticket by number is the next decision; scan ticket metadata rather than duplicating open tickets here.

## Decisions so far

- [Launch subscription pricing evidence](issues/08-launch-pricing-research.md): First-party comparisons and a validation proposal informed launch pricing.
- [Training access and premium benefits](issues/01-training-and-premium.md): Accepted free/premium boundaries, configurable allowance trials, ad and downgrade rules, and provisional US monthly/annual pricing without an introductory trial.
- [Blackjack training modes and strategy evidence](issues/10-blackjack-strategy-research.md): Compared training combinations and counting systems, including requirements for rule-specific coaching.
- [Craps strategies across player levels](issues/11-craps-strategy-research.md): Compared thirteen candidate families, their teaching value, and table dependencies.
- [Roulette strategies across player levels](issues/12-roulette-strategy-research.md): Compared twelve candidates, their teaching value, and settlement dependencies.
- [Blackjack coaching conventions and coverage](issues/13-blackjack-coaching-coverage.md): Identified source mismatches and missing conversion assumptions; defined a finite reference-validation investigation.
- [Launch game rules and practice strategies](issues/02-launch-rules-and-strategies.md): Accepted table presets, four Hi-Lo modes, five strategies each for craps/roulette, and execution/limit defaults; exact blackjack coaching validation remains separate.
- [Counting challenges and progression](issues/03-counting-progression.md): Accepted Learn/Check and Observe/Play formats, configurable table count checkpoints, count visibility, accuracy scoring, pacing, personal bests, and advancement recommendations.

## Not yet specified

- Platform, game-engine, persistence, synchronization, authentication, and subscription implementation choices after content and interaction requirements are clearer.
- Release readiness: target markets, distribution requirements, content rights, privacy, account lifecycle, moderation operations, and accessibility. Create focused investigations as the relevant product choices expose their scope.
- Visual direction, onboarding, audio, and tutorials beyond the strategy-builder prototype.
- Delivery stages, acceptance criteria, and later-release boundaries once core decisions are resolved.
- Capacity and cost constraints for community strategy simulations.

## Out of scope

- Building, deploying, or submitting the production app during this planning effort.
- Holding funds or placing real-money wagers.
