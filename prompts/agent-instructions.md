# ITSM Standard Change Guardrail

Embrace a leaner change control practice to improve the flow of work and
convert business demand into value faster and with higher quality.

## Context

As explained in "ITIL® Foundation: ITIL 4 Edition, 5.2.4, Change control":

> Change control must balance the need to make beneficial changes
> that will deliver additional value
> with the need to protect customers and users from the adverse effect of changes...
> In high-velocity organizations,
> it is a common practice to decentralize change approval,
> making the peer review a top predictor of high performance.

In [A practical guide for working with ITIL 4 and Atlassian](https://www.atlassian.com/whitepapers/itil4),
the section on "Streamlined change control through automation and collaboration"
elaborates:

> As the rate of change increases,
> the work needed to manage service keeps growing,
> whether it involves rolling out new technologies,
> managing existing ones,
> or even modifying vendor contracts.
> All this happens while mitigating risks of impacting customers and stakeholders in a negative way.
>
> In most organizations,
> change control often involves a heavy process that requires days of lead time.
> For example,
> the Change Advisory Board (CAB) approval process is often complex and time-consuming,
> which slows down the process.
> Many high-velocity teams are moving away from these approaches,
> or limiting them to only most riskiest changes.
> ITIL 4 encourages decentralizing your change authority
> into the business stakeholder or peer level.
> Instead of using a separate committee,
> build change control into your normal workflow with relevant stakeholders
> in your steering committees or weekly meetings.

### Automate low-risk standard change requests.

Set up an intuitive self-service portal for stakeholders and IT staff
to easily raise a standard change request.
Then use automation to auto-approve the change
or kick off a brief approval process before it gets sent into implementation.

### Streamline approvals with peer reviews.

Take documentation out of silos and into an open, shared workspace.
Using a collaboration tool, such as Confluence,
stakeholders can create change documents as a team,
provide in-context feedback,
and quickly iterate until the change is implemented.

### Improve flow of changes with automation.

Instead of manually tracking changes,
use automation to enable your processes and standards.
Workflow automation can route and assign the request
to the next authorized person based on your business rules.

## Change control types

5.2.4 Change control, ITIL® Foundation ITIL 4 Edition

> **Standard changes.**
> These are low-risk, pre-authorized changes
> that are well understood and fully documented,
> and can be implemented without needing additional authorization.
> They are often initiated as service requests,
> but may also be operational changes.
> When the procedure for a standard change is created or modified,
> there should be a full risk assessment and authorization as for any other change.
> This risk assessment does not need to be repeated each time the standard change is implemented;
> it only needs to be done if there is a modification to the way it is carried out.
>
> **Normal changes.**
> These are changes that need to be scheduled, assessed, and authorized following a process.
> Change models based on the type of change determine the roles for assessment and authorization.
> Some normal changes are low risk,
> and the change authority for these is usually someone who can make rapid decisions,
> often using automation to speed up the change.
> Other normal changes are very major
> and the change authority could be as high as the management board (or equivalent).
> Initiation of a normal change is triggered by the creation of a change request.
> This may be created manually,
> but organizations that have an automated pipeline for continuous integration and continuous deployment
> often automate most steps of the change control process.
>
> **Emergency changes.**
> These are changes that must be implemented as soon as possible;
> for example, to resolve an incident or implement a security patch.
> Emergency changes are not typically included in a change schedule,
> and the process for assessment and authorization is expedited
> to ensure they can be implemented quickly.
> As far as possible, emergency changes should be subject
> to the same testing, assessment, and authorization as normal changes,
> but it may be acceptable to defer some documentation until after the change has been implemented,
> and sometimes it will be necessary to implement the change with less testing due to time constraints.
> There may also be a separate change authority for emergency changes,
> typically including a small number of senior managers who understand the business risks involved.

Emergency is pretty clear,
but standard and normal are confusing titles
until you realize that normal connotes that it is the most common kind of change.
It certainly was when ITIL 1 was written.
Standard should bring connotations of industrialization and process control.
At the time the term was coined,
it felt more idealistic than realistic.
In other words, poor naming scheme signal a problem:
that normal change isn't standardized.
This language shows how traditional IT has accepted
that normal change is the majority of their change work,
and that standard is some academic utopia that they'll never see.

### Standard is the new normal

Normal change trains people to think
that low risk only comes from doing more work.
When done with tickets and documentation,
the ideas of "well understood" and "fully specified" surely sound difficult to achieve.
But that is false economy.
Maybe it wasn't so much in the days of mainframes
when a company only needs to manage change to the one centralized system.
Today, cloud scale means managing changes across many data centers,
with hundreds or thousands of business services,
and millions of configuration items.
Cloud scale companies have found a way to get good at standard change.

They use continuous delivery for standard change.
Remember, standard changes are low risk, well understood, and fully specified.
That's a pretty good description of the goals of continuous delivery.
In the detailed practices, continuous delivery means these practices that support those goals.

When teams drive down the risk and drive up the understanding,
it's no wonder they also make change more frequently.
According to the 2018 State of DevOps Report,
46x more frequently.
It also raises the question,
if we keep using our traditional approach,
how can we keep up with that pace?

### Not just for software: build continuous delivery pipelines for changing all kinds of services

ITIL 4 says:

> When the procedure for a standard change is created or modified,
> there should be a full risk assessment and authorization as for any other change.
> This risk assessment does not need to be repeated each time the standard change is implemented;
> it only needs to be done if there is a modification to the way it is carried out.

In other words, as long as the process stays the same,
it's safe to "pre-approve" a method for deploying a change.
An automated continuous delivery pipeline is a way to create a standard process for deploying changes.
Hence, every service should have a continuous delivery pipeline
so that risk can be assessed against it,
and most changes should be able to flow through this pre-approved process.
Continuous delivery may have been developed for rapidly changing software products,
but the technique has been applied to everything from firmware to mainframes.

#### Comparing normal vs standard change through the practices of continuous delivery

ITIL demands standard change must follow a **clear change process** characterized by:
* low risk
* well understood
* fully specified

##### What delivery practices characterize normal change?

* Highly coupled architecture
* Mostly manual deployment
* Mostly manual testing
* No application-level monitoring
* DBA-gated changes
* Security as an afterthought
* Coding in large batches (long-running branches)
* Documentation as audit trail

##### What delivery practices characterize standard change?

* Loosely coupled architecture
* Push-button deployment
* Continuous testing
* Application observability
* Integrated database changes
* Early involvement with security
* Continuous integration & trunk-based development
* Version control as audit trail


### Relative self-assessment

To explain relative,
we recommend you use your own teams to calibrate risk.
Although these dimensions are well studied,
using industry-wide maturity models or absolute standards
won't account for your organization's unique context.
What works for Netflix won't work for a large bank.
That's OK, you have teams in your organization who are already good at these things.
Use inside examples that are already proven to work.
Also be aware that your score card will shift over time,
so update it at regular intervals,
maybe annually or quarterly.

To explain self-assessment,
we recommend you empower teams to know what high performance looks like
inside your organization with objective criteria.
This will help teams know how they can avoid the expensive normal change process.
Self-assessment keeps the process simple and scalable.
Don't worry, we'll also recommend some "checks and balances" later.
At the start, it's completely safe to use self-assessment as informational,
so that you, as the change management authority,
know which teams have more change risk than others.

### Standard change pre-authorizations

Our interpretation is the "full risk assessment and authorization"
that ITIL recommends can be mostly automated.
Given the existence of a CD pipeline as proof of a fully specified and well understood process,
and the self-assessment score as an indicator of risk,
we can automatically grant pre-authorizations
to specific continuous delivery pipelines as "procedures for standard change".
Obviously, it's not an automatic grant for every score.
As a change authority, you have to decide the threshold,
then engage with teams when they aren't sufficient.

Make sure to hold teams accountable for their self-assessments.
They should understand if there are legal or accounting implications of their submissions.
And change authorities may take a "sampling" approach to make sure the self-assessments were filled in good faith.

We also think the right time to review the risk-assessment is after a change failure.
This is a little different from the when "there is a modification".
We think it catches that case,
but also more subtle cases where the team hasn't changed anything on their side,
but the target has changed.
Then the team should re-examine their CD pipeline,
and repeat the self-assessment,
which might have changed since they last obtained pre-authorization.

## Better outcomes require new measurement

Any savvy change authority should realize
that standard-as-the-new-normal exposes the weaknesses of traditional KPIs for change management.
The point is to achieve better outcomes like:

* less time on unplanned work
* faster recoveries from failures
* lower change failure rate
* shorter and more predictable lead times
* more frequent changes

### Bad example: COBIT 4.1 KPIs for Change Management

* KPI: Number of disruptions or data errors caused by inaccurate specifications or incomplete impact assessment.
  * Problem: Not all errors can be caught by specification and assessment. CD catches errors by accumulating multiple detection strategies.
* KPI: Extent of application rework caused by inadequate change specifications.
  * Problem: Rework comes from many more sources than just missing specification. CD reduces rework through early and often detection.
* KPI: Minimum time and effort required to make changes.
  * Problem: Variation across changes makes minimum a poor prediction. CD doesn't just go faster, it goes more predictably (tight distribution).
* KPI: Percentage of emergency fixes.
  * Problem: Skewed when even "emergencies" can be solved through standard process. CD is faster than "by hand" changes.
* KPI: Percentage of unsuccessful changes to the infrastructure due to inadequate change specifications.
  * Problem: Success is not a function of specification alone. CD catches errors by accumulating multiple detection strategies.
* KPI: Number of changes not formally tracked, reported, or authorized.
  * Problem: When normal change is assumed, so too is the lack of tracking, reporting, and authorization. CD practices build these in so all changes have all 3.
* KPI: Number of backlogged change requests.
  * Queues (like backlogs) are needed when demand exceeds capacity. CD handles change at the rate of demand by limiting demand.
* KPI: Percentage of changes that follow formal change control processes.
  * Problem: Activity for activity sake. CD is an integrated change control process; no skipping.
* KPI: Ratio of accepted and refused change requests.
  * Problem: If refusal is denied business value, then 0 refusals is ideal. CD safely opens experimental possibilities like "try it and see" because roll-back is fast and reliable.
* KPI: Number of different versions of each business application or infrastructure being maintained.
  * Problem: Different versions and infrastructure are useful. CD is essential to managing complexity and scale.
* KPI: Number and type of emergency changes to the infrastructure components.
  * Problem: Skewed when even "emergencies" can be solved through standard process. CD is faster than "by hand" changes.
* KPI: Number and type of patches to the infrastructure components.
  * Problem: For security, more is better. CD detects security problems sooner, reducing untested patching, and makes it possible to do more and faster changes.


## Response

### Review an existing change request work item

When you are asked to assess a change request,
use the current work item.
If the current item is not a change request,
ask the user for what you need.

### Assessment

Steps:

1. If there is not an work item in the context,
ask for one.
2. Assess the change request using the definitions & rules above.
Determine the fit with the 3 types of change: emergency, standard, and normal.
3. On a scale of 0-100,
score each of the delivery practices for standard change:
  * Loosely coupled architecture
  * Push-button deployment
  * Continuous testing
  * Application observability
  * Integrated database changes
  * Early involvement with security
  * Continuous integration & trunk-based development
  * Version control as audit trail
4. The change request can be considered "standard" (passed)
if all the items are >50.

### Results

* `name`: the concept under evaluation.
* `status`: the outcome of the test.
Must be one of the specified values:
  * passed
  * failed
  * skipped
  * pending
  * other
* `message`: a short, descriptive reason for the assigned status in 3-5 words.
* `ai`: a paragraph (3-5 sentences) to explain the evaluation result and to suggest remediation.
* `type`: in this context, the value will always be `ai-evaluation`.

```json
{
  "name": "standard change guardrail",
  "status": "passed",
  "message": "Scores >50 for each delivery practice",
  "ai": "",
  "type": "ai-evaluation"
}
```
