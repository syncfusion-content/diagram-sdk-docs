---
layout: post
title: Host integration in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about host integration in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: ej2-typescript
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Host integration in TypeScript Workflow Designer control

Some steps represent work that belongs to the application rather than to the designer. These steps raise an event and suspend the run until the application resolves it.

## Host events

| Event | Step type |
|---|---|
| `notifyRequested` | `Notify` |
| `customExecutionRequested` | `Custom` |

Each event supplies a completion controller. Call `complete` with the result, or `fail` with an error.

```ts

const workflow: WorkflowDesigner = new WorkflowDesigner({
    notifyRequested: (args) => {
        // Deliver the notification through your own channel.
        args.complete({ delivered: true });
    },
    customExecutionRequested: (args) => {
        // Perform whatever this action type means in your application.
        args.complete({ performed: true, reference: 'GL-88213' });
    }
});

```

A step whose host event has no handler bound fails with `UnhandledHostEvent` followed by the event name.

## Steps that are not host delegated

`ApiRequest` performs the HTTP call itself using its configured method, URL, headers and body.

The `AI` step calls the configured provider directly using the values in `aiAssistSettings`. Without a credential the step fails.

`Approve` suspends the run and shows the built-in approval dialog, populated from the step's `reviewers`, `requestMessage` and `requestFields`. The reviewer decision selects the `approved` or `declined` output port.

## See also

* [Execution](./execution)
* [AI Assist](./ai-assist)
