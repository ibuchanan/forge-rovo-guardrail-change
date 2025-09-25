import YAML from "yaml";
import api, { route } from "@forge/api";
import type {
  FetchContentFromChangePayload,
  FetchMetaForIssuePayload,
} from "./actionpayload";
import {
  Meta,
  mapFieldsToExpand,
  mapFieldsToRealized,
  mapResultToCard,
  ResultIssue,
  ContentFields,
  RealizedContentField,
  SpecifiedFields,
} from "./jira/issue";
import { changeContentFields } from "./jira/jsm/change";
import type { CommonEvent } from "./forge/events";
import type { RovoContext } from "./rovo/action";

export async function fetchContentFromChange(
  payload: FetchContentFromChangePayload,
) {
  console.debug(`Change: Issue Key "${payload.issue}"`);
  const issueWithMeta: string | FetchContentFromIssuePayload =
    await fetchMetaForIssue(payload);
  if (typeof issueWithMeta === "string") {
    console.error(`Failed fetchMetaForIssue: ${issueWithMeta}`);
    return issueWithMeta;
  }
  const issueContent = await fetchContentFromIssue(issueWithMeta);
  if (typeof issueContent === "string") {
    console.error(`Failed fetchContentFromIssue: ${issueContent}`);
    return issueContent;
  }
  const content = formatIssueContent(issueContent);
  return content;
}

export async function fetchMetaForIssue(payload: FetchMetaForIssuePayload) {
  console.debug(`Request: Meta for Issue Key "${payload.issue}"`);
  try {
    const response = await api
      .asUser()
      .requestJira(route`/rest/api/3/issue/${payload.issue}/editmeta`, {
        headers: {
          Accept: "application/json",
        },
      });
    console.debug(`Response: ${response.status} ${response.statusText}`);
    // console.debug(JSON.stringify(await response.json()));
    if (response.ok) {
      console.debug(`Success: Meta for Issue Key "${payload.issue}"`);
      const responseJson = (await response.json()) as Meta;
      console.debug(
        `Issue: Found ${Object.keys(responseJson.fields).length} fields`,
      );
      const realizedFields = mapFieldsToRealized(
        changeContentFields,
        responseJson,
      );
      console.debug(`realizedFields: ${realizedFields.length}`);
      const reply: FetchContentFromIssuePayload = {
        issue: payload.issue,
        meta: responseJson,
        realizedFields: realizedFields,
        context: payload.context,
      };
      return reply;
    }
    // TODO: check status codes and throw errors
    console.error(`Failed: Meta for Issue Key "${payload.issue}"`);
    return `Failed to fetch Meta for Issue Key "${payload.issue}"\n`;
  } catch (error) {
    console.log(error);
    return `Failed to fetch Meta for Issue Key "${payload.issue}"\n`;
  }
}

interface FetchContentFromIssuePayload extends CommonEvent {
  issue: string;
  meta: Meta;
  realizedFields: RealizedContentField[];
  context: RovoContext;
}

async function fetchContentFromIssue(payload: FetchContentFromIssuePayload) {
  console.debug(`Request: Issue Key "${payload.issue}"`);
  const requestedFields = mapFieldsToExpand(payload.realizedFields);
  console.debug(`fields=${requestedFields.join()}`);
  try {
    const response = await api
      .asUser()
      .requestJira(
        route`/rest/api/3/issue/${payload.issue}?fields=${requestedFields.join()}&expand=renderedFields`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );
    console.debug(`Response: ${response.status} ${response.statusText}`);
    // console.debug(JSON.stringify(await response.json()));
    if (response.ok) {
      console.debug(`Success: Issue Key "${payload.issue}"`);
      const responseJson =
        (await response.json()) as ResultIssue<ContentFields>;
      console.debug(`Issue: ${responseJson.id} ${responseJson.self}`);
      // Map fields to FormatIssueConentPayload: specified, frontmatter, rendered
      const content = mapResultToCard(responseJson, payload.realizedFields);
      return content;
    }
    // TODO: check status codes and throw errors
    console.error(`Failed: Issue Key "${payload.issue}"`);
    return `Failed for Issue Key "${payload.issue}"\n`;
  } catch (error) {
    console.log(error);
    return `Failed for Issue Key "${payload.issue}"\n`;
  }
}

interface FormatIssueConentPayload extends CommonEvent {
  specified: SpecifiedFields;
  frontmatter: Record<string, string | string[]>;
  rendered: Record<string, string>;
  context: RovoContext;
}

function formatIssueContent(payload: any): string {
  // Frontmatter: simple string key-values & arrays,
  // representing most structured fields of a workitem.
  let doc = "---\n";
  doc += YAML.stringify(payload.frontmatter);
  doc += "\n---\n";

  // Markdown content: formatted text,
  // representing the unstructured content on a workitem.
  // First, the fields that exist for all workitems
  doc += `# ([${payload.specified.key}](${payload.specified.url})) ${payload.specified.summary}\n\n`;
  doc += `${payload.specified.description}\n`;
  // Next, the rendered content fields
  Object.entries(payload.rendered).forEach(([key, value]) => {
    doc += `\n## ${key}\n`;
    doc += `\n${value}\n`;
  });

  // TODO: Comments
  // doc += "\n---\n";

  console.debug(`doc: ${doc}`);
  return doc;
}
