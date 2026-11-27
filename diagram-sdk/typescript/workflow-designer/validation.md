---
layout: post
title: Validation in TypeScript Workflow Designer control | Syncfusion®
description: Learn how the Syncfusion TypeScript Workflow Designer validates workflows before a run and on import, and which validation codes it reports.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Validation in EJ2 TypeScript Workflow Designer

The Workflow Designer validates the workflow before every run, so that problems are reported before any step runs. Errors stop the run, while warnings and information messages don't. The canvas also marks problems on the affected steps, and the execution log lists them.

## Validate a workflow

The `validateWorkflow` method validates the current workflow without running it and returns a `WorkflowValidationResult`. Use it to check a workflow before you save or publish it.

| Property | Description |
|---|---|
| `isValid` | Specifies whether the workflow has no errors. Warnings and information messages don't affect this value. |
| `messages` | Lists the validation messages (`WorkflowValidationMessage`), described in the following table. |

| Property | Description |
|---|---|
| `type` | Specifies the severity of the message: `'Error'`, `'Warning'`, or `'Info'`. |
| `code` | Specifies a stable code that identifies the problem, such as `'CYCLE'`. Use it to handle specific problems in code. |
| `message` | Specifies the localized description of the problem, suitable for display. |
| `stepId`, `connectionId`, `propertyPath` | Specify where the problem is: the affected step or connection and, for a setting, its path, such as `'props.url'`. |

The following example validates the loaded workflow when the **Validate workflow** button is clicked.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/workflow-designer-validation/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/workflow-designer-validation/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/workflow-designer-validation" %}

## Validation codes

The following table lists the codes that validation reports, grouped by the area they check. All codes are errors except `UNREACHABLE_STEP` and `CREDENTIAL_LOOKS_LIKE_KEY`, which are warnings.

| Area | Codes | Description |
|---|---|---|
| Identifiers | `ID_REQUIRED`, `ID_DUPLICATE`, `ID_INVALID` | An item has a missing, duplicated, or invalid identifier. See [Identifier rules](./workflow-steps#identifier-rules). |
| Triggers | `TRIGGER_REQUIRED`, `TRIGGER_INCOMING` | The workflow has no trigger, or a connection ends at a trigger. |
| Connections | `CONNECTION_ENDPOINT`, `CONNECTION_SELF`, `CONNECTION_DUPLICATE`, `SOURCE_PORT_INVALID`, `TARGET_PORT_INVALID`, `FANOUT`, `MERGE_TOPOLOGY` | A connection is invalid, duplicated, uses an unsupported port, or shares an output port with another connection. See [Connection rules](./connections#connection-rules). |
| Flow | `CYCLE`, `UNREACHABLE_STEP` | The workflow loops back to an earlier step outside a Loop step, or a step can't be reached from any trigger (warning). |
| Required settings | `REQUIRED_PROP`, `URL_PROTOCOL` | A required setting is missing, or a URL doesn't use `http` or `https`. |
| Conditions | `CONDITION_REQUIRED`, `CONDITION_FIELD`, `CONDITION_OPERATOR`, `CONDITION_VALUE`, `CONDITION_VALUE_TYPE` | A condition rule is missing or incomplete. |
| Switch | `SWITCH_BRANCH`, `SWITCH_BRANCH_NAME`, `SWITCH_BRANCH_UNIQUE` | A Switch step has no branches, or a branch name is missing or duplicated. |
| Set Variable | `SET_VARIABLE_REQUIRED`, `SET_VARIABLE_NAME`, `SET_VARIABLE_UNIQUE`, `SET_VARIABLE_TYPE`, `SET_VARIABLE_VALUE`, `SET_VARIABLE_MATH`, `SET_VARIABLE_ZERO` | A variable is missing, misnamed, duplicated, has the wrong value type, or has an invalid calculation, such as division by zero. |
| Form input | `FORM_FIELDS`, `FORM_FIELD_NAME`, `FORM_FIELD_TYPE`, `FORM_FIELD_UNIQUE`, `FORM_FIELD_OPTIONS` | A form has no fields, or a field is missing a name, type, or options, or duplicates another field. |
| Scheduled trigger | `SCHEDULE_TYPE`, `SCHEDULE_INTERVAL` | The schedule type or interval is invalid. Problems with the schedule dates, time zone, or cron expression are reported in the execution log when the run starts. |
| Webhook trigger | `WEBHOOK_METHOD`, `WEBHOOK_PATH`, `WEBHOOK_AUTH`, `WEBHOOK_AUTH_MODE`, `WEBHOOK_AUTH_HEADER`, `WEBHOOK_AUTH_SIG_HEADER`, `WEBHOOK_RESPONSE_CODE` | A webhook setting is missing or invalid. |
| Other steps | `DELAY_DURATION`, `DELAY_DYNAMIC`, `LOOP_MAX`, `APPROVE_REVIEWERS`, `APPROVE_REQUEST_FIELDS` | A Delay, Loop, or Approve step has an invalid or missing setting. |
| Expressions and secrets | `EXPRESSION_SYNTAX`, `SECRET_FORBIDDEN`, `CREDENTIAL_LOOKS_LIKE_KEY` | An expression is invalid, a setting contains a secret value, or a credential reference looks like a raw API key instead of a name (warning). |

## Validation on import

The `importWorkflow` method rejects a workflow that has a structural error, because such a workflow can't be displayed or run reliably. The promise rejects with a `WorkflowImportError` whose code is `IMPORT_INVALID_STRUCTURE`, and the `messages` property of the error lists the problems. The following codes count as structural errors: `ID_REQUIRED`, `ID_DUPLICATE`, `ID_INVALID`, `CONNECTION_ENDPOINT`, `CONNECTION_SELF`, `CONNECTION_DUPLICATE`, `SOURCE_PORT_INVALID`, `TARGET_PORT_INVALID`, `CYCLE`, `MERGE_TOPOLOGY`, and `TRIGGER_INCOMING`.

N> Content problems, such as missing settings or invalid expressions, don't block an import. Validation reports them instead, so a workflow that was saved mid-edit can always be opened again.
