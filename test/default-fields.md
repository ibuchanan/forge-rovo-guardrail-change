# [Default form fields for change requests](https://support.atlassian.com/jira-service-management-cloud/docs/default-form-fields-for-change-requests/
)

Jira Service Management allows you to customize the fields used to collect information from customers and agents. Fields help agents assess, approve, categorize, and resolve work items. Fields for work items are based on work types. Read more about work types.

Note: For your change management deployment pipelines to work, only the Summary and Description fields should be set to Required for the Change work type. [Find out how to modify field behavior](https://support.atlassian.com/jira-cloud-administration/docs/specify-field-behavior/).

By default, we include the following fields in the work item view of a change request. [Read more about the work item view](https://support.atlassian.com/jira-service-management-cloud/docs/changes-to-requests-in-the-new-issue-view/).

These fields are based on the **Change** work type:

* **Summary** – A short description of the change request.
* **Reporter** – The person who submitted the change request.
* **Components** – Segments of your IT infrastructure that relate to the request. For example, Billing services or VPN server. These are used for labeling, categorization, and reporting.
* **Attachment** – Files or images added to the change request.
* **Description** – A more detailed description of the change request.
* **Linked Issues** – A list of other work items that affect (or are affected by) the change request. If your business uses other Atlassian products, this list may include linked development work items.
* **Assignee** – The team member assigned to work on the change request.
* **Priority** – The importance of the change request’s resolution, usually in regards to your business needs and goals. Sometimes, priority is calculated by impact and urgency.
* **Labels** – A list of extra custom labels used for categorizing or querying records.
* **Request participants** – A list of extra customers who take part in the change request, for example, people from other teams, or vendors.
* **Approvers** – A list of people responsible for approving the change request, usually business, financial or technical contacts.
* **Organizations** – A list of customer groups interested in the change request’s resolution. Learn more about organizations in Jira Service Management.
* **Impact** – The effect of the change, usually in regards to service level agreements.
* **Urgency** – The time available before the business feels any impact.
* **Change type** – The category of the change (usually standard, normal, or emergency). For example, a standard change does not require action from change managers. A normal change does.
* **Change reason** – A short description or code that indicates why the reporter needs the change.
* **Change risk** – The risk of implementing the change determined by the change advisory board. Usually based on complexity, scope, testing, recovery, timing, etc.
* **Planned start** – when the change request is planned to start. This field is required for change requests to appear on the change calendar. Learn more about date fields and the change calendar.
* **Planned end** – when the change request is planned to end. This field is required for change requests to appear on the change calendar.
* ? **Actual start** or **Change start date** – The actual date and time the change started. This field is required for change requests to appear on the change calendar, and can be filled out automatically.
* ? **Actual end** or **Change completion date** – The actual date and time the change ended. This field is required for change requests to appear on the change calendar, and can be filled out automatically.
* ? **Change advisory board (CAB)** – A list of individuals responsible for assessing, approving, and scheduling the change.
* ? **Pending reason** – A short description or code that indicates why the change is not progressing.

`$.fields[?(@.name === 'Pending reason')].key`

## Undocumented fields

* **Implementation plan**
* **Test plan**
* **Backout plan**
