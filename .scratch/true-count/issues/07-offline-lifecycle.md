# Offline access and subscription lifecycle

Parent: [True Count — MVP decision map](../map.md)
Label: wayfinder:grilling
Type: grilling
Status: open
Assignee: none
Blocked by: 01, 06, 09

## Question

What precise rules govern remembered sign-in, offline game selection, content readiness, premium verification and grace periods, expiration during play, sign-out, and reconnection? Specify data preservation, sync conflicts, and account separation. Preserve offline session logging and access to saved sessions. Separate subscription enforcement from game execution.

Include enforcement of daily training allowances across devices and offline. Device-clock changes must not grant additional allowances. Specify trusted reset time, account-timezone changes, clock rollback/advance, reboot, reinstall, and reconnection behavior. Resolve how offline replenishment behaves when a trustworthy reset cannot be established, while preserving unlimited ordinary free play in the available offline game. The accepted allowance policy is recorded in [Training access and premium benefits](01-training-and-premium.md).

## Comments

[Counting challenges and progression](03-counting-progression.md) fixes pause/resume, background interruption, assistance flags, and result eligibility. Define durable challenge recovery after process termination or restart, synchronization of attempt results and readiness milestones, and preservation of assistance/interruption state without resetting allowance consumption. Reuse the accepted challenge semantics; recovery and cross-device policy remain decisions for this ticket.
