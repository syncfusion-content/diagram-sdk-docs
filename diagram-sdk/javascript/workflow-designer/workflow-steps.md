---
layout: post
title: Workflow steps in JavaScript Workflow Designer control | Syncfusion®
description: Learn about the step types of the Syncfusion JavaScript Workflow Designer, their settings, output ports, and condition rules.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Workflow Steps in EJ2 JavaScript Workflow Designer

A step is a unit of work in a workflow, such as starting a run, calling an API, or waiting for an approval. Every step is a `WorkflowStep` object in the `workflowSteps` array of the workflow. Its `stepType` determines what the step does, and its `props` object holds the settings of that step type.

## Step properties

The following properties are common to every step.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | Specifies the unique identifier of the step. Connections and expressions refer to the step by this value. See [Identifier rules](#identifier-rules). |
| `stepType` | `WorkflowStepType` | Specifies what the step does, such as `'ApiRequest'` or `'Condition'`. Defaults to `'ManualTrigger'`. |
| `name` | `string` | Specifies the display name shown on the canvas, in the execution log, and in the variable picker. |
| `props` | `object` | Specifies the settings of the step. The available settings depend on `stepType` and are described in the sections below. Values must be JSON-safe. |
| `customStepId` | `string` | Specifies the custom step definition that the step was created from. It's set only on steps created from [custom step definitions](./custom-steps). |
| `customProps` | `object` | Specifies application data that is saved with the step but isn't used by the designer, such as an owner or an internal reference. |
| `position` | `WorkflowPosition` | Specifies the `x` and `y` position of the step on the canvas. |

String settings in `props` accept [expressions](./expressions), such as <code>&#123;&#123;$.previousStep.response.body.id&#125;&#125;</code>, which read data produced by earlier steps.

N> To change the size and colors of steps, see [Customize step appearance](./appearance). To replace their content, see [Step templates](./step-templates).

## Identifier rules

The `id` of a step, connection, or sticky note must follow these rules:

* It must be unique across all steps, connections, and sticky notes in the workflow.
* It must start with a letter or an underscore (`_`).
* It can contain only letters, digits, underscores, and hyphens (`-`).
* It can't be a reserved name. Reserved names are built-in JavaScript object properties, such as `constructor`, `toString`, `hasOwnProperty`, `valueOf`, and `__proto__`.

| Valid | Invalid |
|---|---|
| `getOrder`, `_start`, `step-2`, `approval_1` | `2ndStep` (starts with a digit), `-step` (starts with a hyphen), `send email` (contains a space), `constructor` (reserved) |

An identifier that's missing, invalid, reserved, or duplicated is handled as follows:

* The `importWorkflow` method rejects the workflow with the `IMPORT_IDS` or `IMPORT_INVALID_STRUCTURE` code. See [Import](./import-export#import).
* The `validateWorkflow` method reports `ID_REQUIRED`, `ID_INVALID`, or `ID_DUPLICATE`. See [Validation](./validation).
* The `addWorkflowItem` method ignores the item and returns `false`. See [Add workflow items](./update-workflow#add-workflow-items).

## Triggers

A trigger starts a run, so every workflow needs at least one. Trigger steps have no input port. When a workflow has more than one trigger, the user chooses the trigger to start from, and the `runExecution` method takes the trigger identifier as its second argument.

### Manual trigger

The `ManualTrigger` step starts a run when the user clicks **Execute** or your code calls the `runExecution` method. It has no settings. Use it for workflows that people start on demand, and pass input data through the `context` argument of `runExecution`. See [Provide input data](./expressions#provide-input-data).

### Scheduled trigger

The `ScheduledTrigger` step runs the workflow at a set time or on a repeating schedule while the page is open, for example to send a daily summary.

| Setting | Description |
|---|---|
| `scheduleType` | Specifies the kind of schedule: `'Once'` runs at one time, `'Recurring'` repeats at an interval, and `'Cron'` follows a cron expression. |
| `startDateTime` | Specifies when the schedule starts. A `'Once'` schedule runs at this time. |
| `interval`, `intervalUnit` | For `'Recurring'` schedules, specify the repeat interval and its unit: `'Minutes'`, `'Hours'`, `'Days'`, or `'Weeks'`. |
| `cronExpression` | For `'Cron'` schedules, specifies a five-field cron expression, such as `'0 9 * * 1-5'` for 09:00 on weekdays. |
| `endDateTime`, `maxOccurrences` | Specify optional limits: the time after which the schedule stops, and the maximum number of runs. |
| `timeZone` | Specifies the IANA time zone that the schedule uses, such as `'Europe/London'`. Defaults to UTC. |

A schedule is activated in two stages:

1. The user clicks **Execute**, or your code calls `runExecution`. The trigger is armed, and the execution log shows when the workflow is scheduled to run.
2. The trigger starts the workflow when the configured time is reached. A `'Once'` schedule runs once at `startDateTime`, or immediately if that time has passed. `'Recurring'` and `'Cron'` schedules run at each occurrence until the end time or the maximum number of runs is reached, or until the user clicks **Stop**.

N> Schedules run only while the page is open. Closing or reloading the page cancels the schedule. For schedules that must run unattended, run the exported workflow on your server.

### Webhook trigger

The `WebhookTrigger` step starts a run when your application passes a webhook message to the `triggerWebhook` method, for example when an external system reports a new order. For its settings and usage, see [Webhook trigger](./webhook-trigger).

### Form input trigger

The `FormInputTrigger` step shows a form when the run starts and passes the submitted values to the workflow. Use it when a person must provide data before the workflow runs, such as the details of an expense claim.

| Setting | Description |
|---|---|
| `formTitle` | Specifies the title of the form dialog. |
| `fields` | Specifies the form fields. Each field has a `name`, a `type`, a `label`, and optionally a `placeholder`, a `defaultValue`, `required`, and `options` for choice fields. |

The supported field types are `'TextBox'`, `'TextArea'`, `'Number'`, `'Date'`, `'Password'`, `'Email'`, `'DropDown'`, `'CheckBoxes'`, and `'RadioButton'`. The submitted values become the response of the trigger, so later steps read them with expressions such as `$.nodes["expenseForm"].response.amount`. Canceling the form ends the run.

## Actions

### Set variable

The `SetVariable` step creates named values that later steps can use, such as a calculated total or a status text. It can store a value as entered or calculate one from two values.

| Setting | Description |
|---|---|
| `variables` | Specifies a list of variables. Each item has a `variableName`, a `value`, and a `valueType` of `'Auto'`, `'String'`, `'Number'`, `'Boolean'`, or `'Json'`. To calculate the value, set `isMathOperation` to `true` and provide `firstValue`, `operator`, and `secondValue`. |

The variables become the response of the step. For example, a variable named `status` on a step with the identifier `setStatus` is read with <code>&#123;&#123;$.nodes["setStatus"].response.status&#125;&#125;</code>, which the variable picker inserts when you select the variable.

### Filter

The `Filter` step keeps the items of a list that match a set of conditions, for example the orders whose status is `'Paid'`. Its response is the filtered list.

| Setting | Description |
|---|---|
| `itemsPath` | Specifies an expression for the list to filter, such as `$.nodes["getOrders"].response.body.items`. |
| `conditions` | Specifies the [condition rules](#condition-rules) that each item is tested against. Refer to the current item with `$.loop.currentItem`, which the **Array item fields** card of the variable picker inserts. |
| `conditionLogic` | Specifies how the rules are combined: `'AND'` keeps items that match every rule, and `'OR'` keeps items that match any rule. |

### Sort

The `Sort` step orders the items of a list by one field, for example to list the largest orders first. Its response is the sorted list.

| Setting | Description |
|---|---|
| `itemsPath` | Specifies an expression for the list to sort. |
| `sortBy` | Specifies the name of the item field to sort by. |
| `sortDirection` | Specifies the order: `'Ascending'` or `'Descending'`. |

### API request

The `ApiRequest` step sends an HTTP request from the browser, for example to read a customer record or update an order.

| Setting | Description |
|---|---|
| `method` | Specifies the HTTP method: `'GET'`, `'POST'`, `'PUT'`, `'PATCH'`, or `'DELETE'`. |
| `url` | Specifies the request URL. It must use `http` or `https`. |
| `queryParams` | Specifies the query parameters as a list of `{ key, value }` pairs. Displayed as **Query Parameters**. |
| `headers` | Specifies the request headers as a list of `{ key, value }` pairs. Headers that carry credentials can also be added at run time in the [`beforeRequestSend`](./host-integration#intercept-requests) event. |
| `bodyType`, `body` | Specify the request body and its kind: `'Json'`, `'Text'`, or `'Expression'`. `GET` and `DELETE` requests don't send a body. |
| `authRef` | Specifies the name of a credential, displayed as **Auth Reference**. Only the name is saved with the workflow, never a secret. |

The response of the step contains `status`, `statusText`, `headers`, and `body`. A response status outside the 2xx range fails the step.

N> Requests are sent with the Fetch API option `credentials: 'omit'`, so the browser never adds the page's cookies or HTTP authentication. Headers that you configure explicitly, such as an `Authorization` header, are still sent. The target server must allow cross-origin requests (CORS) from your page.

## Flow

### Delay

The `Delay` step pauses the run, for example to wait before sending a reminder.

| Setting | Description |
|---|---|
| `delayType` | Specifies how the delay is calculated: `'Fixed'` waits for a duration, `'Until'` waits until a date and time, and `'Dynamic'` waits only when conditions match. |
| `duration`, `timeUnit` | For `'Fixed'` delays, specify the duration and its unit: `'Seconds'`, `'Minutes'`, `'Hours'`, or `'Days'`. |
| `untilDateTime`, `timeZone` | For `'Until'` delays, specify the date and time to wait for and its IANA time zone. |
| `dynamicCondition`, `dynamicConditionLogic`, `dynamicDuration`, `dynamicTimeUnit` | For `'Dynamic'` delays, specify the condition rules and the duration that applies when they match. |

N> When `executionSettings.executionSpeed` is `0`, Delay steps complete without waiting, which is useful for testing. See [Execution speed](./execution#execution-speed).

### Condition

The `Condition` step evaluates [condition rules](#condition-rules) and continues from its `true` or `false` output port, for example to approve small expenses automatically.

| Setting | Description |
|---|---|
| `conditions` | Specifies the condition rules to evaluate. |
| `conditionLogic` | Specifies how the rules are combined: `'AND'` (default) requires every rule to match, and `'OR'` requires at least one. |

### Switch

The `Switch` step continues from the first branch whose condition matches, for example to route a ticket by its priority. Use it instead of nested Condition steps when there are more than two outcomes.

| Setting | Description |
|---|---|
| `branches` | Specifies a list of `{ branchName, condition }` items. Each branch name becomes an output port of the step. |
| `defaultBranch` | Specifies the name of the output port that the run continues from when no branch condition matches. Defaults to `'default'`. |

### Loop

The `Loop` step runs the steps connected to its `loop` output port once for each item of a list, and then continues from its `done` output port. Use it to repeat work for every item, such as sending a reminder for each unpaid invoice.

| Setting | Description |
|---|---|
| `itemsPath` | Specifies an expression for the list. A single value is treated as a one-item list, and a missing value runs the loop zero times. |
| `maxIterations` | Specifies the maximum number of iterations, which protects a run from unexpectedly long lists. |

The steps inside the loop read the current item with the following expressions, which the **Loop** card of the variable picker inserts:

| Expression | Description |
|---|---|
| `$.loop.currentItem` | Returns the item of the current iteration. |
| `$.loop.index` | Returns the zero-based position of the current item. |
| `$.loop.count` | Returns the number of items in the list. |
| `$.loop.all` | Returns the whole list. |

N> The steps of the loop body don't connect back to the Loop step. The body ends at its last step, and the Loop step then starts the next iteration.

## Human

### Approve

The `Approve` step pauses the run until a reviewer approves or declines a request, and then continues from its `approved` or `declined` output port. Use it for decisions that a person must make, such as approving an expense.

| Setting | Description |
|---|---|
| `reviewers` | Specifies who reviews the request, as a list of `{ type, value }` items. `type` is `'User'`, `'Role'`, `'Group'`, or `'Email'`. |
| `requestMessage` | Specifies the message shown to the reviewer. |
| `requestFields` | Specifies the details shown with the request, displayed as **Request Details**, as a list of `{ label, value }` items. Values accept expressions. |

When an Approve step runs, the designer shows a built-in approval dialog with the request details. The run continues from the port that matches the decision made in the dialog.

### Notify

The `Notify` step sends a notification through your application, for example an email to a customer. The `channel` setting determines which fields apply.

| Channel | Fields |
|---|---|
| `'Email'` | `to`, `cc`, `subject`, and `message` |
| `'SMS'` | `phoneNumber` and `message` |
| `'Push'` | `deviceToken` or `userId`, `subject`, and `message` |
| `'Teams'`, `'Slack'` | `channelId`, `mentionUsers`, `subject`, and `message` |
| `'Webhook'` | `webhookUrl`, `method` (`'POST'` or `'PUT'`), `headers`, `body`, and `message` |
| `'Custom'` | `target`, `subject`, and `message` |

The designer doesn't send notifications itself. Handle the `notifyRequested` event to deliver them; when no handler is bound, Notify steps fail. See [Notifications](./host-integration#notifications).

## AI

The `AI` step sends a prompt to an AI provider and passes the answer to the next step, for example to classify a support ticket or summarize a document. The settings that the property panel shows depend on `executionSettings.credentialMode`. For details, see [Credential mode](./security#credential-mode).

| Setting | Displayed as | Description |
|---|---|---|
| `serverUrl` | **Server URL** | Specifies your backend endpoint, which receives the request and calls the AI provider. Shown when `credentialMode` is `'Reference'` (the default). |
| `provider` | **Provider** | Specifies the AI provider: `'Gemini'`, `'OpenAI'`, or `'Claude'`. Shown when `credentialMode` is `'Inline'`. |
| `model` | **Model** | Specifies the model name, such as the Gemini model ID `gemini-2.5-flash`. Shown when `credentialMode` is `'Inline'`. |
| `apiKey` | **API Key** | Specifies a provider key that the browser uses directly. Shown when `credentialMode` is `'Inline'`. It's never exported, so use it for development only. |
| `systemPrompt`, `prompt` | **System Prompt**, **Prompt** | Specify the instructions and the prompt. Both accept expressions, so the prompt can include data from earlier steps. |
| `outputFormat` | **Output Format** | Specifies the format of the answer: `'Text'`, `'JSON'`, or `'Markdown'`. |
| `responseFields` | **Desired Response Fields** | For `'JSON'` output, specifies the fields that the answer should contain, each with a `name`, `type`, and `description`. Later steps can branch on these fields. |
| `memoryEnabled` | **Conversation Memory** | Specifies whether the step remembers its recent prompts and answers from earlier runs and sends them with each new request. The history is kept in the browser's session storage and is cleared when the tab is closed. |
| `memoryHistorySize` | **Memory History Size** | Specifies the number of recent prompt-and-answer pairs to remember, from 1 to 50. Defaults to `10`. |
| `timeoutSeconds` | **Timeout (seconds)** | Specifies how long the step can take before it fails. Defaults to `30`. |

## Output

### Formatter

The `Formatter` step converts data into readable output, for example a table of orders for a report.

| Setting | Description |
|---|---|
| `inputSource` | Specifies the data to format: `'PreviousStep'` uses the response of the previous step, and `'ContextPath'` uses the value of `sourcePath`. |
| `sourcePath` | Specifies an expression for the data when `inputSource` is `'ContextPath'`. |
| `format` | Specifies the output format: `'Text'`, `'JSON'`, `'Markdown'`, or `'Table'`. |

### End

The `End` step ends the current path of the workflow and has no output ports. The execution log shows its `endMessage`, which accepts expressions, so it can summarize the result of the run.

## Custom

The `Custom` step hands its work to your application through the `customExecutionRequested` event, for example to create a record in an internal system. The `actionType` setting identifies the action, and `input` holds the data that the action needs. To offer custom steps with their own fields in the step collection, see [Custom steps](./custom-steps).

## Condition rules

The Condition, Filter, Switch, and Delay steps use condition rules to test values. Each rule has the following properties.

| Property | Description |
|---|---|
| `field` | Specifies the value to test, usually an expression such as <code>&#123;&#123;$.previousStep.response.body.total&#125;&#125;</code>. |
| `valueType` | Specifies how the values are compared: `'String'`, `'Number'`, `'Date'`, `'Boolean'`, or `'Array'`. |
| `operator` | Specifies the comparison. The supported operators are listed in the following table. |
| `value` | Specifies the value to compare with. It isn't needed for `IsEmpty`, `IsNotEmpty`, `IsTrue`, and `IsFalse`. |

| Operator | Matches when |
|---|---|
| `Equal`, `NotEqual` | The field is equal, or isn't equal, to the value. |
| `Contains`, `NotContains` | The text contains, or doesn't contain, the value. |
| `StartsWith`, `NotStartsWith` | The text starts, or doesn't start, with the value. |
| `EndsWith`, `NotEndsWith` | The text ends, or doesn't end, with the value. |
| `MatchesRegex`, `NotMatchesRegex` | The text matches, or doesn't match, the regular expression in the value. |
| `IsEmpty`, `IsNotEmpty` | The field is empty, or has a value. |
| `ArrayContains`, `ArrayNotContains` | The list contains, or doesn't contain, the value. |
| `LengthEqual`, `LengthNotEqual`, `LengthGreaterThan`, `LengthLessThan` | The length of the text or list compares with the value as named. |
| `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, `LessThanOrEqual` | The number compares with the value as named. |
| `Before`, `BeforeOrEqual`, `After`, `AfterOrEqual` | The date is earlier or later than the value, as named. |
| `IsTrue`, `IsFalse` | The Boolean field is `true`, or `false`. |

## See also

* [Connections and ports](./connections)
* [Expressions and the variable picker](./expressions)
* [Custom steps](./custom-steps)
* [Validation](./validation)
