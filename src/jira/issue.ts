interface NamedObject {
  name: string;
}

export interface ContentFields {
  summary: string;
  description: string;
}
export const contentFields = ["summary", "description"];

export interface CardFields {
  issuetype: NamedObject;
  summary: string;
  status: NamedObject;
  // updated: ResultDate;
  assignee?: NamedObject;
  priority?: NamedObject;
}
export const cardFields = [
  "issuetype",
  "summary",
  "status",
  "assignee",
  "priority",
];

export interface ResultIssue<T> {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: T;
  renderedFields?: T;
}

interface IssueCard {
  key: string;
  url: string;
  issuetype: string;
  summary: string;
  status: string;
  // updated: ResultDate;
  assignee?: string;
  priority?: string;
}

export function mapResultToCard(input: ResultIssue<CardFields>) {
  const issueCard: IssueCard = {
    key: input.key,
    url: input.self,
    issuetype: input.fields.issuetype.name,
    summary: input.fields.summary,
    status: input.fields.status.name,
    // updated: ResultDate;
    // Might be null assignee
    assignee: input.fields.assignee?.name,
    // Might be null priority
    priority: input.fields.priority?.name,
  };
  return issueCard;
}

/*
* **Summary** – A short description of the change request.
* **Reporter** – The person who submitted the change request.
* **Component/s** – Segments of your IT infrastructure that relate to the request. For example, Billing services or VPN server. These are used for labeling, categorization, and reporting.
* **Attachment** – Files or images added to the change request.
* **Description** – A more detailed description of the change request.
* **Linked work items** – A list of other work items that affect (or are affected by) the change request. If your business uses other Atlassian products, this list may include linked development work items.
* **Assignee** – The team member assigned to work on the change request.
* **Priority** – The importance of the change request’s resolution, usually in regards to your business needs and goals. Sometimes, priority is calculated by impact and urgency.
* **Labels** – A list of extra custom labels used for categorizing or querying records.
* **Work item participants** – A list of extra customers who take part in the change request, for example, people from other teams, or vendors.
* **Approvers** – A list of people responsible for approving the change request, usually business, financial or technical contacts.
* **Organizations** – A list of customer groups interested in the change request’s resolution. Learn more about organizations in Jira Service Management.
* **Impact** – The effect of the change, usually in regards to service level agreements.
* **Urgency** – The time available before the business feels any impact.
* **Change type** – The category of the change (usually standard, normal, or emergency). For example, a standard change does not require action from change managers. A normal change does.
* **Change reason** – A short description or code that indicates why the reporter needs the change.
* **Change risk** – The risk of implementing the change determined by the change advisory board. Usually based on complexity, scope, testing, recovery, timing, etc.
* **Planned start** or **Planned start date** – when the change request is planned to start. This field is required for change requests to appear on the change calendar. Learn more about date fields and the change calendar.
* **Planned end** or **Planned end date** – when the change request is planned to end. This field is required for change requests to appear on the change calendar.
* **Actual start** or **Change start date** – The actual date and time the change started. This field is required for change requests to appear on the change calendar, and can be filled out automatically.
* **Actual end** or **Change completion date** – The actual date and time the change ended. This field is required for change requests to appear on the change calendar, and can be filled out automatically.
* **Change advisory board (CAB)** – A list of individuals responsible for assessing, approving, and scheduling the change.
* **Pending reason** – A short description or code that indicates why the change is not progressing.
*/
export interface ChangeFields {
  issuetype: NamedObject;
  summary: string;
  // reporter: User;
  // components: Compontent[];
  // attachment: Attachment[];
  description: string;
  // linkedWorkitems: Links;
  // approvers: Users[];
  // organizations: Organization[];
  // impact: ?
  // urgency: ?
  // changeType: ?
  // changeReason: ?
  // changeRisk: ?
  // plannedStart: ResultDate;
  // plannedEnd: ResultDate;
  // actualStart: ResultDate;
  // actualEnd: ResultDate;
  // cab: Users[];
  // pendingReason: ?
  status: NamedObject;
  // updated: ResultDate;
  assignee?: NamedObject;
  priority?: NamedObject;
}
export const changeFields = [
  "issuetype",
  "summary",
  "status",
  "assignee",
  "priority",
];
