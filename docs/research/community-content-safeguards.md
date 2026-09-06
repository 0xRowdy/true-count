# Community content safeguards for iOS and Android

Research date: 2026-09-05. Evidence answer for [Community content safeguards](https://github.com/0xRowdy/true-count/issues/17), supporting [Community publication, rankings, and results](https://github.com/0xRowdy/true-count/issues/6).

## Conclusion

**Reporting is needed at public-community launch.** Automated publication checks can remain the default, but the community needs working abuse safeguards and an operated moderation process. Star-only ratings reduce the editable text surface; they do not remove the existing public strategy and profile surfaces. This is the application of the official requirements below to the accepted [product brief](../brief.md), not a store approval determination.

## Explicit platform requirements

| Official source | Requirements relevant to this decision |
| --- | --- |
| [Apple App Review Guidelines §§1.2, 1.2.1, 1.5](https://developer.apple.com/app-store/review/guidelines/#user-generated-content) | UGC apps need preposting objectionable-content filtering, offensive-content reporting with timely responses, abusive-user blocking, and published contact information. Violating content must be removed. Creator experiences within an app remain UGC; §1.2.1(a) requires identifying content exceeding the app’s age rating and restricting underage access using verified or declared age. §1.5 requires an accessible contact route in both the app and Support URL. |
| [Google Play User Generated Content, full policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en) | UGC means user contributions accessible to other users, including a subset. Require terms/user-policy acceptance before creating or uploading; define and prohibit objectionable content and conduct. Maintain effective, ongoing moderation proportionate to the content and act on violations. Public UGC explicitly requires in-app reporting of users and content and user blocking. Monetization must not encourage objectionable behavior. Incidental sexual content has additional default-filtering and child-access restrictions. |
| [Google’s official moderation explanation](https://support.google.com/googleplay/android-developer/answer/12923286?hl=en) | Even a small UGC component needs moderation. Terms consent cannot be skipped and differs from privacy-policy consent. Reporting/blocking must work, be clearly identifiable, and be readily accessible inside the app. The format is flexible; separate clearly labeled controls are recommended. Reported content/users need timely action. |
| [Google Play app support requirements](https://support.google.com/googleplay/android-developer/answer/113477?hl=en) | A valid support email is required and appears on the store listing; a support website is recommended. Paid-app/in-app-purchase support questions have a three-business-day response requirement; urgent product issues raised by Google have a 24-hour requirement. Those are support obligations, not a universal UGC-report deadline. |

Short source anchors: Apple requires “A mechanism to report offensive content and timely responses to concerns”; Google requires “robust, effective, and ongoing UGC moderation.” [Apple §1.2](https://developer.apple.com/app-store/review/guidelines/#user-generated-content), [Google UGC policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en).

Neither cited UGC policy requires human approval of every submission or specifies a numerical moderation-response deadline. Apple §1.2 does not itself prescribe mandatory terms acceptance; Google explicitly does. Google's public-UGC blocking requirement is independent of whether an app offers direct messages. [Apple](https://developer.apple.com/app-store/review/guidelines/#user-generated-content), [Google](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en).

## Application to True Count — interpretation

- Public executable strategy configurations are user contributions. Constraining their schema does not exempt their public titles, descriptions, authors, or accompanying content. Apple's structured-creator-content provision is relevant; this investigation does not classify arbitrary downloaded code. [Apple §1.2.1](https://developer.apple.com/app-store/review/guidelines/#user-generated-content).
- Public profiles and written strategy reviews fit Google's UGC definition; its explanation expressly includes user reviews in commerce apps. Individual visible star ratings also fit the broad definition, although neither policy specifically resolves an aggregate-only numerical rating surface. There is no identified star-only exemption for this app's other community content. [Google policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en), [Google explanation](https://support.google.com/googleplay/android-developer/answer/12923286?hl=en).
- A premium contribution gate does not replace moderation. The accepted free public browsing still exposes community submissions. A support email alone does not provide Google's required in-app report/block functionality. [Google policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en).

## Proposed launch scope — product recommendations

1. Keep automatic publication after execution, compatibility, completeness, and content checks. Cover every editable public field and every published revision; syntactic validity alone cannot detect an abusive description.
2. Provide separate Report content, Report user, and Block user actions. Attach reports to the actual content/revision and account. Blocking should immediately hide that author's community contributions for the blocker; moderators separately need removal and account-suspension controls. These detailed semantics are recommendations, not verbatim store requirements.
3. Obtain recorded community-terms acceptance before contributions, including profile publication and ratings. Keep terms and support reachable afterward.
4. Route reports to an owned queue with notifications, triage, removal/suspension, and action history. Define a practical response target and escalation coverage before launch. A dedicated moderation vendor or complex admin dashboard can wait; an unattended report button cannot serve the proposed process.
5. Consider star-only clarity/usefulness ratings for MVP and defer written reviews. If text reviews ship, apply the same content checks, reporting, blocking, and moderator tools to them.
6. Prohibit sexual/abusive content rather than introducing an incidental-mature-content mode. Include an age-inappropriate-content report reason and resolve creator-content age restrictions with the launch age-rating decision.

These proposals preserve immediate publication while making the required safeguards concrete. They do not select ranking formulas, settle response staffing, or investigate general gambling-app classification.
