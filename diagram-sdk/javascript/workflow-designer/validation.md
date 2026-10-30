---
layout: post
title: Validation in JavaScript Workflow Designer control | Syncfusion®
description: Learn how the Syncfusion® JavaScript Workflow Designer control validates workflows and how to read validation messages.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Validation in JavaScript Workflow Designer control

<<<<<<< HEAD
The designer validates the workflow before every run. Errors stop the run. Warnings and info messages don't.
=======
The designer validates the workflow before every run. Errors stop the run, while warnings and info messages don't. The canvas also marks problems on the affected steps.

To validate the workflow from code, call [`validateWorkflow`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#validateworkflow):
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const result = designer.validateWorkflow();
if (!result.isValid) {
    result.messages
        .filter((m) => m.type === 'Error')
        .forEach((m) => console.log(m.code, m.stepId, m.message));
}

{% endhighlight %}
{% endtabs %}

<<<<<<< HEAD
Each `WorkflowValidationMessage` contains:

| Property | Description |
|---|---|
| `type` | `'Error'`, `'Warning'` or `'Info'`. |
| `code` | A stable code such as `'CYCLE'`. |
| `message` | Localized text. |
| `stepId`, `connectionId`, `propertyPath` | Where the problem is. |

## What is checked
=======
Each `WorkflowValidationMessage` contains the following properties:

| Property | Description |
|---|---|
| `type` | `'Error'`, `'Warning'`, or `'Info'`. |
| `code` | A stable code, such as `'CYCLE'`. |
| `message` | The localized text. |
| `stepId`, `connectionId`, `propertyPath` | Where the problem is. |

## What's checked
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

| Area | Codes |
|---|---|
| Identifiers | `ID_REQUIRED`, `ID_DUPLICATE`, `ID_INVALID` (see [Identifier rules](./workflow-steps#identifier-rules)) |
| Structure | `TRIGGER_REQUIRED`, `TRIGGER_INCOMING`, `MERGE_TOPOLOGY`, `CYCLE` (a Loop step's `loop` port is allowed), `FANOUT` (each output port can lead to only one step), `CONNECTION_ENDPOINT`, `CONNECTION_SELF`, `CONNECTION_DUPLICATE`, `SOURCE_PORT_INVALID`, `TARGET_PORT_INVALID`, `UNREACHABLE_STEP` (warning) |
| Required settings | `REQUIRED_PROP` |
| Conditions | `CONDITION_REQUIRED`, `CONDITION_FIELD`, `CONDITION_OPERATOR`, `CONDITION_VALUE`, `CONDITION_VALUE_TYPE` |
| Switch | `SWITCH_BRANCH`, `SWITCH_BRANCH_NAME`, `SWITCH_BRANCH_UNIQUE` |
| Set Variable | `SET_VARIABLE_REQUIRED`, `SET_VARIABLE_NAME`, `SET_VARIABLE_UNIQUE`, `SET_VARIABLE_TYPE`, `SET_VARIABLE_VALUE`, `SET_VARIABLE_MATH`, `SET_VARIABLE_ZERO` |
| Form input | `FORM_FIELDS`, `FORM_FIELD_NAME`, `FORM_FIELD_TYPE`, `FORM_FIELD_UNIQUE`, `FORM_FIELD_OPTIONS` |
| Scheduled trigger | `SCHEDULE_TYPE`, `SCHEDULE_INTERVAL` |
| Webhook trigger | `WEBHOOK_METHOD`, `WEBHOOK_PATH`, `WEBHOOK_AUTH`, `WEBHOOK_AUTH_MODE`, `WEBHOOK_AUTH_HEADER`, `WEBHOOK_AUTH_SIG_HEADER`, `WEBHOOK_RESPONSE_CODE` |
| Other steps | `DELAY_DURATION`, `DELAY_DYNAMIC`, `LOOP_MAX`, `APPROVE_REVIEWERS`, `APPROVE_REQUEST_FIELDS`, `URL_PROTOCOL` |
| Expressions and secrets | `EXPRESSION_SYNTAX`, `SECRET_FORBIDDEN` |

`UNREACHABLE_STEP` is a warning. Every other code is an error.

## Validation on import

<<<<<<< HEAD
`importWorkflow` rejects a workflow with a `WorkflowImportError` (code `IMPORT_INVALID_STRUCTURE`) when it has a structural error: `ID_REQUIRED`, `ID_DUPLICATE`, `ID_INVALID`, `CONNECTION_ENDPOINT`, `CONNECTION_SELF`, `CONNECTION_DUPLICATE`, `SOURCE_PORT_INVALID`, `TARGET_PORT_INVALID`, `CYCLE`, `MERGE_TOPOLOGY` or `TRIGGER_INCOMING`. The error's `messages` property lists them. Content problems, such as missing settings or invalid expressions, don't block an import. They are reported by validation, so a workflow saved mid-edit can always be reopened.

Problems are also marked on the steps in the canvas.
=======
`importWorkflow` rejects a workflow that has a structural error. The promise rejects with a `WorkflowImportError` whose code is `IMPORT_INVALID_STRUCTURE`, and the error's `messages` property lists the problems. The following codes count as structural errors: `ID_REQUIRED`, `ID_DUPLICATE`, `ID_INVALID`, `CONNECTION_ENDPOINT`, `CONNECTION_SELF`, `CONNECTION_DUPLICATE`, `SOURCE_PORT_INVALID`, `TARGET_PORT_INVALID`, `CYCLE`, `MERGE_TOPOLOGY`, and `TRIGGER_INCOMING`.

Content problems, such as missing settings or invalid expressions, don't block an import. Validation reports them instead, so you can always reopen a workflow that was saved mid-edit.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
