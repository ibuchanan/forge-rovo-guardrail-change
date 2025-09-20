import api, { route } from "@forge/api";
import type { FetchContentFromIssuePayload } from "./actionpayload";
import {
  type ContentFields,
  contentFields,
  type ResultIssue,
} from "./jira/issue";

export async function fetchContentFromIssue(
  payload: FetchContentFromIssuePayload,
) {
  console.debug(`Request: Issue Key "${payload.issue}"`);
  try {
    const response = await api
      .asUser()
      .requestJira(
        route`/rest/api/3/issue/${payload.issue}?fields=${contentFields.join()}&expand=renderedFields`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );
    console.debug(`Response: ${response.status} ${response.statusText}`);
    // console.debug(JSON.stringify(await response.json()));
    if (response.ok) {
      console.debug(`Success: Issue Key "${payload.issue}`);
      const responseJson =
        (await response.json()) as ResultIssue<ContentFields>;
      console.debug(`Issue: ${responseJson.id} ${responseJson.self}`);
      return `<h1>${responseJson.fields.summary}</h1>\n${responseJson.renderedFields?.description}\n`;
    }
    // TODO: check status codes and throw errors
    console.error(`Failed: Issue Key "${payload.issue}"`);
    return `Failed for Issue Key "${payload.issue}"\n`;
  } catch (error) {
    console.log(error);
    return `Failed for Issue Key "${payload.issue}"\n`;
  }
}
