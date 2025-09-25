# ITSM Standard Change Guardrail Agent

[![Apache 2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

## Why this agent?

In ITIL, the workflow for change control fundamentally hinges on the type of change.
This agent assess change requests for the 3 primary ITIL-defined types:
* standard
* normal
* emergency

The goal of this agent is to enable more change to go through standard flow
so that IT orgs can convert business demand into value faster and with higher quality.

### Standard change is the key to high velocity ITSM

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

## Exploring this agent

You can install it directly using
[this link](https://developer.atlassian.com/console/install/fbad7f54-8bdf-455b-bf29-6f7482da2f45?signature=AYABeN6f3qjv9Lvi%2Bi3srJshSEMAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6NzA5NTg3ODM1MjQzOmtleS83ZjcxNzcxZC02OWM4LTRlOWItYWU5Ny05MzJkMmNhZjM0NDIAuAECAQB4KVgoNesMySI2pXEz4J5S%2B4but%2FgpPvEEG0vL8V0Jz5cBeXxtEEugl5snl%2FY7bp6b3gAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOyvpbW0DqLOrsllpwIBEIA7N838ldFrDSPz7ACEfrR00VWT0qqsRCe4ZaFjkXpP2WN7FyE6jp6uVeyEtUt99agfUt73lu36Z7vvaGsAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzU1OWQ0NTE2LWE3OTEtNDdkZi1iYmVkLTAyNjFlODY4ZWE1YwC4AQICAHig7hOcRWe1S%2BcRRsjD9q0WpZcapmXa1oPX3jm4ao883gGqede1ZGqG8bTBg5zrQ7dBAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM0FR%2FjgpzYGRwhWkuAgEQgDvvla%2FOjQvhUScBu3OPCCKndUrEf03a1XEi%2BoF4%2FTvUYM8ufmG5uzE1OscVG8KeS9i3ea3HR%2Fy6cFuj6gAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtd2VzdC0yOjcwOTU4NzgzNTI0MzprZXkvM2M0YjQzMzctYTQzOS00ZmNhLWEwZDItNDcyYzE2ZWRhZmRjALgBAgIAeBeusbAYURagY7RdQhCHwxFswh7l65V7cwKp%2BDc1WGoHAWJK%2F6oZiIFbHS7V1agT798AAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAw%2B00qfRKm7haXAZWwCARCAO%2B%2Fv5Uc3jkrjP6JnS070GG5f4flSC8itDglDe19vvF0rvrfKmVvrIVq9U%2FnCvL3ePlpxVQNkgn9%2F8atqAgAAAAAMAAAQAAAAAAAAAAAAAAAAAIiCd%2BEBfL17Ce2mKSbSc%2BT%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADIQUbTxmlBC2E9DXNTCkLZcbBMtmbbWUqb41NQeVYVCP1Hrr8lvSVXL0l79vTh%2BMok2l1qLiYOytP7PA%2F6SGyDZkVE%3D&product=jira).
Once installed you can use it directly as a Forge Agent.
You can learn from it directly by reading
the [agent instructions](./prompts/agent-instructions.md) (ie the prompt).
You can explore interactively with "no code".
Just copy/paste those instructions into [Rovo Agent instructions](https://support.atlassian.com/rovo/docs/write-instructions-for-your-agent/)
You can explore as a "pro code" project by forking,
and modifying the prompt and code-based actions.

- **Rovo**. If you're new to Rovo,
[check out how it helps teams quickly discover knowledge across Atlassian and third-party SaaS apps with less time and effort.](https://www.atlassian.com/software/rovo)
- **Atlassian Forge**. If this is your first Forge app,
[try a simple "hello world" app first](https://go.atlassian.com/forge)

Questions?
Join the Rovo conversation in
[the Atlassian user community](https://community.atlassian.com/t5/Rovo/ct-p/rovo-atlassian-intelligence),
or the Forge conversation in
[the Atlassian developer community](https://community.developer.atlassian.com/c/rovo/138).

## Contributions

Contributions to the Forge Rovo ITSM Standard Change Guardrail Agent repo are welcome!
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Copyright (c) 2025 Atlassian US., Inc.
Apache 2.0 licensed, see [LICENSE](LICENSE) file.

[![With ❤️ from Atlassian](https://raw.githubusercontent.com/atlassian-internal/oss-assets/master/banner-with-thanks-light.png)](https://www.atlassian.com)
