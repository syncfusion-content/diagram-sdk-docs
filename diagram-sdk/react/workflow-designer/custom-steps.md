---
layout: post
title: Custom steps in React Workflow Designer control | Syncfusion®
description: Learn how to define custom steps with their own fields, icon, and appearance in the Syncfusion React Workflow Designer and run them from your application.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Custom Steps in React Workflow Designer

Custom steps add application-specific work to the step collection, such as checking a credit score or creating a record in an internal system. Each custom step definition has its own name, icon, and fields, so users configure it in the property panel like a built-in step. When a custom step runs, the Workflow Designer triggers the `customExecutionRequested` event, and your application performs the work and returns the result.

## Define a custom step

Add custom step definitions to the `custom` property of `stepCollectionSettings`. Each definition appears in the **Custom** category of the step collection. The category is hidden when no definition is provided.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-definition-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-definition-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-definition-cs1" %}

A custom step definition (`WorkflowCustomStepDefinition`) has the following properties.

| Property | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | `''` | Specifies the stable identifier of the definition. It must be unique within `custom`, and it's stored in the `customStepId` of every step created from the definition, so don't change it after workflows are saved. |
| `name` | `string` | `''` | Specifies the name shown in the step collection and used as the default name of new steps. |
| `description` | `string` | `''` | Specifies a short description of the step, shown as its tooltip in the step collection to help users choose the right step. |
| `iconCss` | `string` | `''` | Specifies the CSS class of the icon displayed for the step, such as a Syncfusion icon class. |
| `fields` | `WorkflowCustomFieldDefinition[]` | `[]` | Specifies the fields that users fill in the property panel. |
| `size` | `WorkflowSize` | `{}` | Specifies the `width` and `height` of new steps. When not set, the default step size is used. |
| `appearance` | `WorkflowStepAppearance` | `{}` | Specifies the colors and icon of new steps, so custom steps stand out from built-in steps. See [Appearance properties](./appearance#appearance-properties). |

## Fields

Each field (`WorkflowCustomFieldDefinition`) defines one setting of the custom step. The value that the user enters is stored in the step's `props` object under the field's `key`.

| Property | Type | Default | Description |
|---|---|---|---|
| `key` | `string` | `''` | Specifies the name under which the value is stored in `props`. It must be unique within the definition. |
| `label` | `string` | `''` | Specifies the label shown above the field in the property panel. |
| `type` | `WorkflowCustomFieldType` | `'TextBox'` | Specifies the input displayed for the field. The supported types are listed in the following table. |
| `defaultValue` | `any` | `null` | Specifies the value of the field when a step is created. |
| `required` | `boolean` | `false` | Specifies whether the user must provide a value. |
| `disabled` | `boolean` | `false` | Specifies whether the field is disabled. A disabled field is dimmed and can't be focused or changed. |
| `readOnly` | `boolean` | `false` | Specifies whether the field is read-only, so its value is shown but can't be changed. |
| `placeholder` | `string` | `''` | Specifies the hint text shown when the field is empty. |
| `description` | `string` | `''` | Specifies help text shown with the field, for example the expected format. |
| `options` | `WorkflowCustomFieldOption[]` | `[]` | Specifies the choices of a `DropDownList`, `MultiSelect`, or `RadioButton` field, each with a `text` and a `value`. |
| `validation` | `WorkflowCustomFieldValidation` | `{}` | Specifies validation rules: `minLength` and `maxLength` for text, `min` and `max` for numbers, and a regular expression `pattern`. |

The following field types are supported.

| Type | Description |
|---|---|
| `'TextBox'` | A single-line text input. |
| `'TextArea'` | A multiline text input, suited to longer text such as a message. |
| `'NumericTextBox'` | A numeric input with optional `min` and `max` limits. |
| `'DropDownList'` | A list from which the user selects one option. |
| `'MultiSelect'` | A list from which the user selects several options. |
| `'DatePicker'` | A date input. |
| `'DateTimePicker'` | A date and time input. |
| `'CheckBox'` | A check box for a `true` or `false` value. |
| `'RadioButton'` | A group of radio buttons from which the user selects one option. |

N> The `validation` rules are checked in the property panel while the user edits a field, and the field shows a message when its value is invalid. They aren't checked by the `validateWorkflow` method, so validate the values in your `customExecutionRequested` handler as well.

## Run a custom step

When a step created from a definition runs, the Workflow Designer triggers the `customExecutionRequested` event. Identify the definition with `args.step.customStepId`, read the field values from `args.step.props`, and then call `args.complete` with the result or `args.fail` with an error. The value passed to `complete` becomes the response of the step, so later steps can read it with expressions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-execution-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-execution-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/custom-steps/custom-step-execution-cs1" %}

N> `args.step.props` contains the field values as they are saved in the workflow. Expressions in these values, such as <code>&#123;&#123;$.previousStep.response.name&#125;&#125;</code>, aren't resolved before the event. To pass resolved data to your handler, use a built-in `Custom` step, whose `input` setting is resolved and provided in `args.input`. See [Custom steps in host integration](./host-integration#custom-steps).

## Limitations

* **Missing definitions:** When a workflow contains a step whose `customStepId` has no matching definition, the step is still displayed and its values are kept, but they can't be edited until the definition is available again. Keep every definition that saved workflows use in the `custom` array.
* **Sensitive values:** Field values are saved and exported as entered. Don't use custom step fields for secrets such as tokens; resolve secrets in your handler instead.

## See also

* [Host integration](./host-integration)
* [Customize step appearance](./appearance)
* [Workflow steps](./workflow-steps)
