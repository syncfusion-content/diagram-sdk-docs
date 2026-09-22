---
layout: post
title: AI Assist in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about AI Assist in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# AI Assist in TypeScript Workflow Designer control

AI Assist generates or modifies a workflow from a natural-language prompt. It is disabled by default.

```ts

aiAssistSettings: {
    enabled: true,
    provider: 'Gemini',
    model: 'gemini-2.0-flash',
    credential: '<your API key>',
    mode: 'Direct'
}

```

| Property | Description |
|---|---|
| `enabled` | Enables AI Assist. The assist view is created lazily |
| `position` | Placement of the assist view |
| `provider`, `model` | Model to call |
| `credential` | API key or bearer token |
| `mode`, `serverUrl` | Transport mode, and the endpoint when proxying through a server |
| `promptSuggestions` | Prompts offered to the user |

## Validation of proposals

A proposal returned by the model is validated with the workflow validator before it is applied. An invalid proposal is rejected and the current workflow is left unchanged.

| Event | Raised |
|---|---|
| `aiAssistCompleted` | After a valid workflow is applied |
| `aiAssistFailed` | After a non-retryable error or exhausted retries |

The credential is supplied by the application. Use the server transport mode where an API key must not reach the browser.

## See also

* [Host integration](./host-integration)
