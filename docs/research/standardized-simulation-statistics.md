# Standardized strategy simulation statistics

Research date: 2026-09-05. Evidence answer for [Standardized strategy simulation statistics](https://github.com/0xRowdy/true-count/issues/18), supporting [Community publication, rankings, and results](https://github.com/0xRowdy/true-count/issues/6).

## Conclusion

Use independent complete bankroll sessions as the sampling units, with revision-specific results under a versioned benchmark profile. Estimate average session net return, wager outcome shares, session outcome probabilities, and the distribution of maximum session drawdown separately. A fixed run size makes the experiment reproducible; it does not establish precision, simulator correctness, or profitable casino play.

A practical **candidate**, pending product approval and engine validation, is one fixed run of **100,000 sessions** per eligible revision/profile, approximate 95% intervals, explicit precision labels, and descriptive performance sorting without claims that the top strategy is statistically superior. Preserve wide-interval results on the strategy page; omit them from the default performance comparison. The count, tolerances below, and operational feasibility are proposals, not validated defaults.

## What the evidence establishes

| Primary source | Methodological support | Limit for this app |
| --- | --- | --- |
| [Nakayama, Analysis of Simulation Output, WSC 2003, §§2–3](https://informs-sim.org/wsc03papers/007.pdf) | Terminating simulations depend on initial conditions; independently replicate the whole experiment. Observations inside a run need not be independent. Mean intervals use variation across independent replications. | Does not validate True Count's rules, strategies, or any particular session count. |
| [NIST, confidence limits for a mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm) | Mean interval width depends on standard deviation and sample size; confidence describes repeated-sample coverage. | A narrow Monte Carlo interval covers sampling uncertainty under the simulated model. |
| [Cameron and Miller, cluster inference, §II.F](https://www.econ.ucdavis.edu/faculty/cameron/research/Cameron_Miller_JHR_2014_July_09.pdf) | Cluster bootstrap resamples whole clusters to retain internal dependence. | Applying this principle to complete session records is our proposed adaptation, not validation of gambling metrics. |
| [NIST, binomial intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) | Wilson intervals avoid basic Wald shortcomings; exact binomial intervals address rare counts. | Applies to independent session event indicators, not correlated wagers pooled as independent trials. |
| [NIST TN 2119, §5.3](https://nvlpubs.nist.gov/nistpubs/TechnicalNotes/NIST.TN.2119.pdf) | Population quantile intervals can use order statistics with binomial coverage. | Monetary outcomes have ties; use conservative rank coverage and an explicit quantile convention. |
| [Howard et al., confidence sequences](https://arxiv.org/abs/1810.08240) | Time-uniform intervals can support repeated examination and data-dependent stopping. | Ordinary fixed-sample intervals do not inherit that guarantee. |
| [NIST, Bonferroni's method](https://www.itl.nist.gov/div898/handbook/prc/section4/prc463.htm) | Simultaneous coverage requires accounting for the family of comparisons. | Per-strategy 95% intervals do not establish a 95%-certain winner across an expanding catalog. |

## Define the experiment before running it

The following is an application design derived from those methods and the accepted ticket constraints.

A benchmark profile must pin the game, complete table conditions, initial bankroll `B`, base unit `u`, horizon, initialization, settlement policy, and any benchmark participation restrictions. Record strategy revision, engine version, analysis-protocol version, RNG algorithm, stream allocation, and run identifier. Compare matching profiles and compatible engine/protocol versions only.

The horizon should count **table opportunities**, not the strategy's resolved wagers: blackjack rounds, craps rolls, roulette spins. A player sitting out must not freeze the horizon; the profile must define how the table and observable information advance during abstention. Different games have different opportunity meanings and remain separate comparisons. Exact horizon values and starting-shoe/table conventions are product choices still requiring specification.

Each session resets bankroll and strategy state and independently samples the profile's initial game state. If the profile starts blackjack at a fresh shoe, keep its early-shoe behavior; do not discard a statistical warm-up. Strategy-cycle completion restarts the cycle with the remaining balance. Strategy stops, unaffordable prescribed actions, progression caps, and the horizon stop new discretionary commitments. Complete already committed play according to a pinned policy, including legal blackjack continuation and settlement of outstanding wagers. Distinguish a failed new wager from an impossible continuation; the latter requires a legal fallback or validation failure, never invented credit.

**Settlement can exceed the horizon.** In ordinary craps, a contract waiting for a point or seven can encounter arbitrarily many other rolls; a finite new-bet horizon does not imply a deterministic runtime bound. The candidate policy closes discretionary betting and resolves only existing commitments. It must specify removable wagers, working status, and whether any settlement-time actions are obligatory. A watchdog resumes the same unfinished session later or marks the entire run incomplete. It cannot silently drop long sessions, replace their seeds, count them as zero, or treat a forced refund as an ordinary result. A hard tail cutoff with censoring would define a different estimator and needs a separate design.

Finite bankroll alone bounds losses, not necessarily gains. Before relying on finite-moment approximations, establish bounds on opportunities, aggregate stakes, payout multipliers, split/continuation exposure, and the number of remaining commitments. Under those restrictions and no new tail bets, monetary results can be bounded even when settlement time is unbounded. This is a proposed engine proof obligation, not a proved property of the current app.

## Metrics and their uncertainty

Store one analysis record per completed session: final settled balance, net return, W/L/P counts, resolved wager count, turnover, opportunities played, maximum drawdown, no-bet flag, stop cause, and final-settlement length. Keep monetary arithmetic exact in supported chip units. Classify each resolved wager by its net result after commissions. Split blackjack hands, insurance, and craps odds have separate outcomes; a double increases its hand’s stake. A cancelled wager returned without outcome is outside W/L/P.

### Return

For session `i`, let `X_i = (final balance_i - B) / u`. Headline return is the arithmetic mean of `X_i`, in base units per benchmark session. Also show mean return as a percentage of initial bankroll, `100 × u × mean(X) / B`. Neither denominator changes with the strategy's bet volume.

Use `mean(X) ± t_(n-1, .975) × s_X / sqrt(n)` as an **approximate** 95% Monte Carlo interval. NIST supplies this formula; exact t coverage requires normal observations, while simulation use relies on a suitable large-sample approximation. Severe skew or rare large payoffs can delay useful coverage. A median or trimmed mean estimates something different and must not replace expected net return. [NIST mean intervals](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm), [Nakayama, §3](https://informs-sim.org/wsc03papers/007.pdf)

For analysis validation, inspect the return distribution and contribution of the largest sessions to variance; compare across preassigned independent batches. These diagnostics can reveal a problem but cannot prove unseen tails absent. Do not trim inconvenient sessions. A zero observed variance needs special handling unless constancy is proved from the strategy/profile. Bootstrap agreement likewise does not establish coverage for unobserved rare events.

### Session events

Estimate profitable, losing, and unchanged session probabilities using indicators of `X_i > 0`, `< 0`, and `= 0`, with all completed sessions in the denominator. Use Wilson intervals for routine display and exact binomial intervals for rare events/boundaries. Each interval is marginal; the three intervals are not a joint region. [NIST binomial intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm)

Show literal settled bankroll exhaustion separately from stopping because the next prescribed action is unaffordable. A player can have money left and still be unable to continue a progression. Keep progression caps and strategy stops separate. Label these as probabilities **within this profile**, not lifetime risk of ruin.

No-bet sessions remain in session return, drawdown, and outcome denominators: zero profit is an unchanged session. Display the no-bet fraction and activity/turnover prominently. Conditioning results on having bet would answer a different question.

### Wager win/loss/push shares

For each session, write `N_i = W_i + L_i + P_i`. Report pooled wager win share `p_hat = sum(W_i) / sum(N_i)`, analogously for losses and pushes. This targets `E[W_i] / E[N_i]`; it is distinct from averaging each session's win percentage. No-bet sessions contribute zero to both totals; if the total is zero, the share is undefined.

A concrete session-level delta-method estimate is:

```text
Z_i = W_i - p_hat * N_i
SE(p_hat) = sample_sd(Z_i) / (sqrt(n) * mean(N_i))
approximate marginal 95% interval = p_hat ± 1.96 * SE(p_hat)
```

This is our derivation by linearizing the ratio of the two session means. The covariance of `W_i` and `N_i` is retained inside `Z_i`; a binomial interval based on total wagers would lose it. The underlying delta method uses a first-order approximation and requires a denominator expectation away from zero and suitable moments. [Owen, delta method notes](https://artowen.su.domains/courses/200/lec16.pdf)

As a validation check, resample the whole session vectors and recompute the ratios. Do not resample wagers independently. Sparse outcomes, dominant sessions, near-zero denominators, or degenerate resamples make these approximate intervals unreliable. Mark the affected ratio's uncertainty unavailable pending a suitable method; do not turn a boundary estimate into a zero-width interval. Intersect an otherwise valid approximate interval with [0, 1] for display; this does not repair poor coverage. A logically impossible outcome may instead be identified from the rules. [Cameron and Miller, §II.F and bootstrap diagnostics](https://www.econ.ucdavis.edu/faculty/cameron/research/Cameron_Miller_JHR_2014_July_09.pdf)

Net return per amount wagered, if added, is another ratio of totals requiring session-level uncertainty. A precise W/L/P share says little about monetary advantage when payouts and stakes differ.

### Drawdown

Define a reproducible settled-profit ledger: `E_t = B + cumulative net settled profit at event t`. Outstanding stakes are not deducted again as losses. Aggregate outcomes from the same resolution event before updating the curve; arbitrary bookkeeping order must not create artificial peaks. This candidate measures **drawdown of settled results**, not marked-to-market wealth or cash available to place a bet.

For each session, `D_i = max_t(max_(s<=t) E_s - E_t) / u`, including final settlement. Propose median and 95th percentile of `D_i`, with 95% order-statistic confidence intervals chosen using exact binomial ranks; use a documented inverse empirical-CDF quantile and conservative handling of ties. Do not confuse the 95th percentile of drawdown with 95% confidence in its estimate. [NIST TN 2119, §5.3](https://nvlpubs.nist.gov/nistpubs/TechnicalNotes/NIST.TN.2119.pdf)

Show observed worst drawdown only as the maximum in this finite sample, never the maximum possible loss. Report funding constraints using the separate affordability/exhaustion measures.

## Candidate run and publication protocol

All numeric thresholds here are **proposed product choices**, not empirical findings or performance promises.

1. During engine commissioning, use 10,000-session development runs to examine runtime, variance, tail behavior, and statistical coverage on tractable reference cases. These do not supply public evidence. Establish the supported strategy/profile bounds and analysis validity before enabling comparison eligibility.
2. Precommit to 100,000 independent completed sessions for each public run. Fix the revision, profile, streams, and analysis before observing results. Deduplicate equivalent submissions where possible. Retain the complete run, including early stops and losing sessions. A retry resumes the same realization; an engine correction creates a traceable new run/version.
3. Publish a completed result card with all estimable metrics, counts, intervals, methods, and activity/stop information. Use a separate eligibility gate for the default performance view: propose return interval half-width at most **0.25 base units per session** and losing-session and exhaustion interval half-widths at most **0.5 percentage points**, plus a validated analysis regime and nonzero activity. Wide results remain visible with “precision target not met.” Missing secondary W/L/P or drawdown uncertainty is disclosed beside that metric.
4. Do not treat passing these gates as simultaneous 95% coverage, proof of accuracy, or evidence of advantage. Selecting displayed results by their estimated precision can itself change conditional coverage; retain every completed card and describe these as display tolerances. Do not keep extending a failed run until an ordinary interval happens to pass. Any future adaptive sampling needs a predeclared sequential design such as valid confidence sequences. [Howard et al.](https://arxiv.org/abs/1810.08240)
5. Propose return sorting as descriptive, with risk and activity beside it. Exclude zero-activity strategies from default performance sorting, without deleting their results. A minimum activity restriction beyond zero is a product choice: imposing one can exclude legitimate strategies that wait or stop early. Avoid a single unqualified “best strategy” badge.

The 100,000-session count is statistically straightforward to analyze but **computational feasibility is unmeasured**. One record per session makes aggregation modest; engine cost depends on game, horizon, strategy complexity, and settlement tails. For illustration, 100,000 sessions with a 500-opportunity horizon imply up to 50 million scheduled opportunities before tails. This is arithmetic, not a timing or capacity estimate.

### What the proposed counts buy

Calculated from the Wilson formula at an observed proportion of 0.5, the approximate worst-case half-width is **0.980 percentage points at 10,000 sessions** and **0.310 at 100,000**. With zero observed events, the one-sided exact 95% upper bound is `1 - 0.05^(1/n)`: approximately **0.0300%** and **0.00300%**, respectively. Zero observed exhaustion therefore does not establish zero probability. [NIST binomial intervals](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm)

For mean return, the normal planning approximation is `n ≈ (1.96 × sigma / desired_half_width)^2`. Hypothetical session standard deviations of 10, 50, and 100 units give half-widths of approximately 0.062, 0.310, and 0.620 units at 100,000 sessions. Reaching 0.25 units would require approximately 6,147, 153,664, and 614,656 sessions, respectively, if those variances and the approximation were appropriate. These are illustrative calculations, not measured strategy results; an estimated variance can miss rare payoffs. [NIST mean interval formula](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm)

## Randomness, comparisons, and selection

Use a reputable generator with a documented independent-stream/substream scheme. Allocate per-session streams independently of execution order and persist them for retries. Neighboring integer seeds are not by themselves a demonstrated independent-stream design. [L'Écuyer et al., stream package](https://www.iro.umontreal.ca/~lecuyer/myftp/streams00/c%2B%2B/streams4.pdf)

Propose **independent streams across strategies for MVP**. Common random numbers can reduce the variance of a difference when they induce positive covariance; synchronization matters and a shared seed alone does not guarantee a useful coupling. If later using paired sessions, analyze the session differences with their paired variance. [Clark, WSC 1990, §1.2](https://informs-sim.org/wsc90papers/1990_0066.pdf)

Application-specific inference: blackjack strategies that hit or split differently consume cards differently, affecting dealer cards, later rounds, and shuffle timing. Reusing independently shuffled shoe sequences can define a valid coupling if each strategy retains its correct marginal game distribution, but does not guarantee variance reduction. Forcing matching per-hand outcomes or reassigning cards to synchronize decisions can change the game law. Validate the marginal distributions and observed covariance before using paired variance reduction; independence is across session pairs, not necessarily within each pair.

Keep public evidence separate from author-accessible development runs, and do not expose evaluation randomness to the executing strategy. New revisions and reruns selected after observing results create selection effects even if authors cannot choose individual runs. Preserve run history and avoid advantage or superiority claims based on repeated marginal intervals. For any future inferential comparison, freeze the candidate set and metric, use fresh evaluation data, estimate actual differences, and control the declared comparison family. Bonferroni is one conservative option; overlapping individual intervals are not a formal test of the difference. [NIST multiple comparisons](https://www.itl.nist.gov/div898/handbook/prc/section4/prc463.htm)

## Resolution and remaining work

This resolves the research question with a candidate method and explicit limits. It does not authorize the numerical defaults or certify launch comparisons. Product decisions remain: actual profiles/horizons, participation restrictions, drawdown wording, precision tolerances, and when a public result can appear in discovery.

Before implementation can claim validated evidence, a separate finite acceptance artifact must demonstrate game/payout correctness against independent references; settlement and exposure bounds; unbiased session inclusion and reproducible streams; coverage behavior for representative skewed, sparse, and boundary cases with known answers; and runtime/cost for supported strategies. Mathematical precision cannot repair model errors, identify casino conditions absent from the profile, or guarantee a player's future result.
