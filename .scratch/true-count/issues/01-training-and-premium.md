# Training access and premium benefits

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:grilling
Type: grilling
Status: resolved
Assignee: Codex
Blocked by: 08

## Question

What exact training allowances, strategy tools, analytics, and community capabilities belong to free and premium accounts, given the confirmed access policy? Decide ad placement and frequency boundaries, subscription packaging, and what must remain usable after downgrade. Premium is ad-free; free offline access is one selected game and premium offline access is all three.

## Comments

### Training and analytics boundaries accepted

- Free accounts receive daily allowances for guided practice and counting challenges across the launch games; ordinary free play is unlimited. Premium removes training limits. Exact allowances remain open.
- Free accounts receive session logging, complete session history, and basic results and adherence summaries. Premium adds comparisons across strategies and trends over time. Downgrading preserves records and basic access.
- On whether creating, publishing, or practicing community strategies should require premium, the user replied: “Yes, I think so, to prevent spam.” The specific actions restricted to premium need clarification; the earlier recommendation to make these capabilities free is not accepted by assumption.

### Community, trial allowances, and advertising

- The user clarified and accepted premium requirements for publishing strategies and submitting ratings. Private strategy creation and community browsing remain free; practicing community strategies uses the free training allowance.
- The proposed daily allowance of 10 minutes of guided practice across games plus five counting challenges is accepted for trial, not as a settled permanent policy. The proposed timed policy excludes correction explanations and finishes the current hand, roll, or spin before stopping.
- The MVP must support testing alternative training allowance methods, including time, turns, and small simulated bankrolls. Their exact semantics and experiment controls remain to be decided.
- Free-account ads appear only after a session or challenge results screen, at most once per 10 minutes, with no ad before the first activity. No banners during play; watching an ad is never required to save results. Premium remains ad-free.

### Allowance experiments and billing

- Support assigned test groups for training allowance policies, initially using one policy for everyone. Clearly display each user's allowance and do not change their policy during an activity.
- The bankroll-based alternative uses a daily simulated training bankroll separate from saved balances. It lasts until depleted or the daily reset; winning players may train longer. Ordinary free play remains unlimited.
- Offer monthly and annual premium billing. Exact prices remain open. The proposal to omit an introductory subscription trial has not yet been explicitly confirmed.

### Resets, downgrade, and pricing research

- Daily allowances reset at midnight in the account's chosen timezone, without rollover. Restarting a session does not replenish them. Changing the device clock must not grant extra allowances. Cross-device and offline enforcement are specified in [Offline access and subscription lifecycle](07-offline-lifecycle.md).
- After downgrade, published strategies and ratings remain visible. Users can remove their submissions, but publishing, updating a published strategy, and submitting ratings require premium. Private strategy editing remains free.
- The user requested pricing research before choosing prices; see [Launch subscription pricing evidence](08-launch-pricing-research.md). Whether to offer an introductory subscription trial remains undecided.

### Pricing accepted

- The user accepted provisional US launch prices of $5.99/month and $39.99/year, and no separate introductory premium trial at launch.

## Answer

The following access and packaging decisions were accepted in the live discussion. Earlier comments preserve the discussion history; this resolution records the final policy.

### Free and premium access

- Preserve blackjack, craps, and roulette at launch. Ordinary free play is unlimited. Free accounts have all three games online and one selected game offline; premium includes all three offline games.
- Start with a trial free allowance of 10 minutes of guided practice shared across games plus five counting challenges per day. Exclude correction explanations from the timer and finish the current hand, roll, or spin before stopping. Premium has unlimited training.
- Support configurable time, turn, and training-bankroll allowance methods and assigned test groups. Begin with one policy for everyone, display each user's allowance clearly, and never change their policy during an activity. The initial timed allowance is provisional, not a permanent commitment.
- A bankroll-based trial uses a daily simulated training balance separate from saved practice and casino balances. It lasts until depleted or the daily reset, allowing winning players to train longer. Ordinary free play remains unlimited.
- Allowances reset at midnight in the account's chosen timezone, without rollover. Restarting a session does not replenish them. Device-clock changes must not grant extra allowance.
- Private strategy creation/editing and community browsing are free. Practicing community strategies uses the free training allowance. Publishing strategies, updating published strategies, and submitting ratings require premium, reflecting the user's spam-prevention intent.
- Session logging, complete history, and basic results/adherence summaries are free. Premium adds comparisons across strategies and trends over time.

### Advertising and downgrade

- Premium has no ads. Free-account ads appear only after a session or challenge results screen, at most once per 10 minutes, and never before the first activity. No banners during play, and watching an ad is never required to save results. Preserve the confirmed rule that unavailable ads do not prevent offline play.
- Downgrading preserves saved records and basic access. Published strategies and ratings remain visible; former subscribers may remove their submissions. Publishing, updating published strategies, and submitting ratings still require premium; private editing remains free.

### Subscription packaging

- One premium tier with identical benefits for monthly and annual billing.
- Provisional US launch prices: **US$5.99/month and US$39.99/year**. These are starting prices to validate, not proven willingness to pay. Evidence: [Launch subscription pricing evidence](08-launch-pricing-research.md).
- No separate introductory premium trial at launch; the recurring free training allowance provides the initial preview. Launch markets beyond the provisional US pricing and localized prices remain release-planning work.

### Follow-up decisions

- [Training allowance measurement and experiment rules](09-training-allowance-measurement.md) specifies per-game consumption, alternative trial budgets, and experiment evaluation once game and challenge behavior are known.
- [Offline access and subscription lifecycle](07-offline-lifecycle.md) specifies trusted reset time, timezone changes, clock-tampering protection, cross-device/offline enforcement, and subscription expiration behavior.
- The access boundaries are settled; detailed analytics and community behavior remain with [Bankroll ledgers and session tracking](06-session-ledgers.md) and [Community publication, rankings, and results](05-community-results.md).
