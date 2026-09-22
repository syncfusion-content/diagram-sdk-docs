---
layout: post
title: Validation in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about validation in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Validation in TypeScript Workflow Designer control

The `validateWorkflow` method checks the configured workflow and returns a result containing an overall flag and a list of messages.

```ts

const result = workflow.validateWorkflow();

if (!result.isValid) {
    result.messages.forEach((message) => {
        console.log(message.type, message.code, message.message, message.stepId);
    });
}

```

Each message carries a code, a severity of `Error`, `Warning` or `Info`, and the step or connection it refers to.

## Checks performed

* A trigger step is present
* Every step is reachable
* Identifiers are unique
* Connections reference existing steps and are not self-referencing
* Source ports are valid for the source step type, and every connection sets `targetPort` to `input`
* No cycles are introduced
* Required step properties are present and well formed

Representative message codes include `TRIGGER_REQUIRED`, `REQUIRED_PROP`, `TARGET_PORT_INVALID`, `SOURCE_PORT_INVALID`, `CONDITION_REQUIRED`, `CONNECTION_SELF` and `CYCLE`.

The `validationCompleted` event is raised after each validation pass.

## See also

* [Steps](./steps)
* [Execution](./execution)
