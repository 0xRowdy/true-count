# Offline access and subscription lifecycle — decision draft

Prepared from the user's accepted answers Q1–Q28. Pending final shared-understanding review. After that review, the resolution comment on [Offline access and subscription lifecycle](https://github.com/0xRowdy/true-count/issues/8) will be the canonical decision; this file is a review copy.

## Scope and existing contracts

Specify offline access, account separation, allowance ownership, recovery, and reconnection for the iOS/Android MVP with blackjack, standard craps, and roulette. This is planning, not implementation or certification of a particular platform API.

Preserve the accepted [access and premium benefits](https://github.com/0xRowdy/true-count/issues/2), [challenge semantics](https://github.com/0xRowdy/true-count/issues/4), [strategy execution model](https://github.com/0xRowdy/true-count/issues/5), [community lifecycle](https://github.com/0xRowdy/true-count/issues/6), [session ledgers](https://github.com/0xRowdy/true-count/issues/7), and [allowance accounting](https://github.com/0xRowdy/true-count/issues/10). In particular, the later ledger decision makes casino sessions strictly private; older community discussion does not authorize sharing them.

Ordinary free play remains unlimited within game-access rights. Free accounts have all three games online and one selected game offline. Premium includes all three offline, unlimited training, and no advertising. Session logging and complete saved-history/basic-results access remain free and available offline for locally held records. Reinstallation can restore synced records after online sign-in; it cannot guarantee recovery of device-only data. Ads never block saving or offline play and retain their accepted natural-break limits.

## Offline readiness and game selection — Q1, Q2, Q15

Bundle all three games and their built-in strategies with installation. Show explicit offline readiness. Saved community strategy revisions become available offline after downloading; browsing the community still requires connectivity. Identity, access rights, and content readiness remain separate.

Every account selects its free offline game during initial setup, including premium accounts. Keep this fallback visible in Settings. Changes require connectivity and follow the account on connected devices. A device still offline retains its last confirmed selection until reconnection, allowing temporary differences. The ready content must support the selected game; merely having other games installed does not grant offline access to them. Counting challenges remain blackjack content under the same game-access boundaries, apart from the already-started attempt completion exception below.

## Identity and account separation — Q8, Q22

Initial sign-in requires connectivity. A previously signed-in account can reopen offline without repeating sign-in, subject to the separate access and content rules.

Explicit sign-out saves and pauses unfinished activities. Retain unsynced records privately under their original account, explain that uploading requires signing back into that account, and require online sign-in before resumption after explicit sign-out. Another account cannot see, upload as its own, or inherit the prior account's records, activities, or allowances.

Premium is one True Count account-level entitlement across iOS and Android. Linking or restoring a purchase requires online verification. Do not silently attach the same purchase to a different True Count account. Store-specific verification, purchase-conflict handling, and account lifecycle implementation belong to the follow-up decisions; this policy does not assert that either store supplies cross-platform entitlement automatically.

## Offline premium verification — Q3, Q7, Q12, Q18, Q23

After successful positive online verification, the offline deadline is the earlier of:

- seven days after that verification; or
- 72 hours after the end of the last verified paid entitlement.

Explain the reconnect deadline to the player. Successful verification reporting expiration or revocation overrides remaining offline grace. Failure to verify leaves the existing deadline unchanged: it cannot extend it or prematurely end still-valid offline access. Cancellation of renewal alone preserves the verified paid period. Store-specific billing/verification states must be mapped to this contract in subscription implementation planning.

If the app cannot reliably determine whether an allowance or premium deadline has passed, require reconnection before starting further training or using premium-only access. Displayed-clock changes never extend access or grant allowance. Reboot and reinstall are not sources of fresh grants or verification periods. Architecture must establish how trustworthy elapsed time survives, or becomes unavailable, across device events; uncertainty uses this reconnect rule.

When access becomes unavailable, finish only an already-started blackjack round, craps roll, or roulette spin, then perform final settlement, save, and end the session. An already-started counting challenge may finish on its original device without another charge. Recheck access before starting another turn, including after pause/recovery, a daily reset, premium expiration, or loss of connectivity to a game outside the offline selection. Pausing never extends access to new turns.

Afterward, free access includes the selected offline game, any valid available free allowance, and complete locally saved history/basic results. This access boundary must not interrupt settlement or reinterpret already-resolved outcomes. A proven execution defect that prevents valid continuation follows the incomplete-record rule rather than invented settlement.

## Free allowance ownership, replenishment, and recovery — Q4, Q6, Q9, Q11, Q14

One designated allowance device holds the account's free guided-practice and challenge allowance. Other devices retain ordinary free play within their game-access rights; they do not receive duplicate free training budgets. Premium training is not limited to the allowance device.

Obtaining each new day's allowance requires connectivity. The allowance device can spend the remaining valid daily budget offline. Reconnection, restarting an activity, changing the clock, rebooting, reinstalling, or moving between devices never independently replenishes it. Preserve the accepted account-timezone midnight reset and no-rollover policy. An expired grant cannot fund further new turns merely because the next grant has not been obtained.

Timezone changes require connectivity and preserve the current allowance's scheduled expiry. The first reset in the newly selected timezone occurs at its next midnight strictly after that expiry. Show the resulting reset time before confirmation; changing timezones must never produce an extra grant.

Transferring unused allowance requires the original device to reconnect and reconcile usage. Finish guided practice and final settlement before transfer; outstanding training-bankroll wagers cannot travel as spendable allowance. An already-charged challenge can remain paused and later finish on the original device; unused attempts transfer separately. The transferred budget is the remaining budget, not a new daily amount.

If the original device is lost or broken, permit an online replacement immediately, but the replacement can obtain training allowance only from the next daily reset. Today's unused amount remains unavailable unless the original device reconnects and transfers it. The replaced device cannot obtain future grants. A disconnected old device cannot receive the replacement notification, but its existing grant still expires at its original boundary; it cannot overlap a replacement's new-day grant. Missing or unreconciled device data cannot justify duplicating a grant.

Allowance accounting retains the accepted contract: active-time inclusions/exclusions; charge turns at deal/roll/spin start; charge challenges once at first exercise content; no additional challenge charge for resumption; no guided-practice charge for Play challenges; and settlement without new allowance charges. At reset, finish the current turn and final settlement, then end the guided session. An already-started challenge can finish. Old training-bankroll settlement remains with its finished session and never augments a new day's grant.

## Policy versions and subscription transitions — Q13, Q19, Q24

Keep policy versions attached to usage and historical results. Changes receive advance notice and take effect at a daily reset. If a returning offline player missed notice, show it on reconnection, retain their previous assigned policy for the current allowance day, and apply the change at the next reset. Do not grant both old and new budgets or refill an existing allowance. Stable account assignment, configurable trial amounts, and experiment reporting remain governed by the allowance decision.

A verified upgrade unlocks premium immediately and stops further free-allowance consumption without refunding earlier usage. For a session using the free training bankroll, finish its current turn and final settlement and end that allowance-funded session. Its remaining valid daily bankroll stays separate. Premium practice starts a new session using ordinary practice funding; premium winnings cannot replenish free training allowance. Outstanding already-funded wagers retain their legitimate settlements.

After premium ends, use any remaining valid free allowance on the allowance device. Obtaining a missing daily grant requires connectivity and obeys ownership/replacement rules. Upgrading and downgrading are not independent sources of allowance. Ordinary practice funding defaults remain with [Practice funding and table-challenge balances](https://github.com/0xRowdy/true-count/issues/20); this decision does not invent those amounts.

## Durable activity recovery and progress — Q5, Q17, Q21

Unfinished sessions and challenge attempts stay on their originating device in the MVP. Cross-device continuation is a later enhancement. Closing the app, restarting it, or updating it must preserve recoverable activity state, not create a fresh randomized activity.

Preserve generated cards/outcomes and sequence, outstanding bets, settled payouts, pinned strategy/rule/teaching references, pending strategy actions, answers and first-answer accuracy, assistance and interruption flags, deviation events, and allowance consumption. Resume without rerolling, double charging, duplicate payouts, or rewriting resolved outcomes. Final settlement resumes the same record and creates one final result. This is an execution and durability contract for architecture to implement and verify.

Recovered challenges are interrupted for fastest-record eligibility. Preserve completed accuracy eligibility, Learn/Check and assisted/unassisted distinctions, and other accepted challenge semantics. If recovery data is unusable, retain recoverable history and mark the activity incomplete rather than inventing a result. Incomplete attempts earn no personal bests or readiness credit. Reinstallation restores synced records, but device-only unfinished activities may be lost; that loss does not authorize a fresh allowance grant.

Sync completed results, saved strategies, histories, eligible personal bests, and earned readiness milestones across the account. Maintain consecutive-attempt readiness streaks per device for MVP. Do not stitch offline attempts from different devices into a new streak or infer their order from displayed clocks. Keep the accepted matching-configuration/reference groups and streak-breaking rules; earned milestones remain earned.

## Automatic synchronization and conflicts — Q10, Q16, Q25, Q27

Synchronize automatically for the signed-in account. Reconcile access, allowance ownership, and privacy withdrawals before accepting new grants or public contributions. Upload private records automatically, retry failures without duplicating records, charges, payouts, or results, and show pending/error status. A synchronization failure alone does not block saving or locally permitted play. It does not bypass an independent access deadline or trusted-time requirement.

Independent new sessions merge normally. When devices concurrently edit the same private strategy or casino-session record, preserve both proposed versions and ask which to keep when the player next edits that item. Never silently overwrite conflicting changes or count two versions of one casino session.

While a casino-session conflict is unresolved, account totals use the last mutually synced version and mark that session as needing review. Resolving it replaces that session's contribution exactly once. Private strategy conflicts keep the last synced revision available, while active practice retains its pinned revision.

If deletion conflicts with an offline edit, do not automatically restore the item. Preserve the conflicting edit for review and offer explicit recovery. A deleted casino session stays out of totals unless restored. Ordinary nonconflicting casino corrections still overwrite without an edit history under the ledger decision; temporary conflict copies serve reconciliation, not an added audit-history product.

## Privacy, public queues, and saved community revisions — Q20, Q26, Q28

Permit offline practice-sharing disablement and requests to remove public contributions. Stop local sharing immediately, durably queue withdrawal, and clearly state that public removal awaits connectivity. Reconcile withdrawals before queued contributions. Withdrawal removes prior public practice aggregates and popularity contributions while preserving private histories; explicit ratings remain separate contributions unless separately removed.

Withdrawal invalidates the previous sharing period account-wide. Results queued under that period on another offline device remain private, even if sharing is later re-enabled. The stale device must reconnect and receive the new sharing state before future sessions can contribute again. Retries and late uploads never restore withdrawn contributions.

Enabling sharing, publishing, and submitting ratings require connectivity. Re-enabling sharing includes future sessions only, never historical backfill. Preserve premium requirements for public publication/updates/ratings, free withdrawal rights after downgrade, and the accepted authentication/profile and community checks. Casino-session records remain strictly private.

New executable community revisions are adopted only by player choice; active sessions and historical results retain their pinned revision. On reconnection, apply known public-text removals and mark unavailable sources while preserving saved executable copies under the accepted community rules. An offline device can only apply a removal when it learns of it.

If an execution defect makes a revision unusable, explain the block and preserve affected records. Do not silently substitute a different strategy, rewrite historical execution, reroll outcomes, or invent settlement results. Valid recovery/final settlement can proceed where supported; an activity that cannot be validly recovered remains incomplete. Account deletion and legal content-rights obligations remain release-readiness work.

## Architecture handoffs and map maintenance

Closing this product decision unblocks [Mobile platform and shared game-engine architecture](https://github.com/0xRowdy/true-count/issues/16). Its implementation contracts must cover durable exact recovery, separation of access enforcement from game execution, unchanged randomness/reference versions, safe stopping and settlement, and prevention of duplicated accounting. It must investigate technical feasibility rather than treating these product choices as already-verified capabilities.

The implementation-choice fog is now precise enough for three focused child decisions, each waiting for the mobile architecture choice (and this lifecycle resolution):

1. **Local persistence and account synchronization architecture:** choose local/remote persistence and synchronization approach; define durable activity checkpoints, account isolation, allowance ownership/grants/trusted-time enforcement, conflict/deletion reconciliation, consent ordering, retries, and migration/reinstall behavior. Specify acceptance checks for the lifecycle contract without implementing production services.
2. **Authentication and account lifecycle:** choose account identity/authentication and secure remembered-sign-in approach; define recovery, purchase/account identity boundaries, local-data isolation, and account export/deletion/revocation behavior. Investigate applicable privacy and store obligations before finalizing those choices. Coordinate identity contracts with persistence and subscriptions.
3. **Subscription verification and entitlement implementation:** choose store/provider integration and map purchase, restoration, renewal, cancellation, expiration, billing recovery, refund/revocation, duplicate/cross-account purchase cases, and cross-platform benefits into the accepted entitlement contract. Establish trustworthy verification/deadline behavior and operational reconciliation. Also wait for the authentication/account identity decision.

Create these as map children and wire native dependencies after final review. Remove only the graduated persistence/synchronization/authentication/subscription implementation bullet from the map's fog. Broader release readiness, visual direction/onboarding/audio/tutorials, and delivery staging remain. The authentication child takes ownership of account lifecycle; release readiness retains the broader privacy/release review.

Only this non-research ticket is being resolved in this session. No production app, subscription service, or synchronization implementation has been built. The numerical blackjack-reference validation and ordinary practice-funding decisions remain with their existing tickets.
