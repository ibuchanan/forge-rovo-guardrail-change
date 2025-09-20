import type { LogAssessmentPayload } from "./actionpayload";

export function logAssessment(e: LogAssessmentPayload) {
  const resource = e.context.jira?.issueKey || e.context.confluence?.contentId;
  // console.log(`assessment: ${JSON.stringify(e)}`);
  console.log(`"${resource}": ${e.assessment}`);
}
