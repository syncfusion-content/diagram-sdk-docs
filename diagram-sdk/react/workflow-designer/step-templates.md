---
layout: post
title: Step templates in React Workflow Designer control | Syncfusion®
description: Learn how to replace the content of workflow steps with a custom template in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Step Templates in React Workflow Designer

A step template replaces the built-in content of every workflow step with your own HTML. Use it to show information that matters to your users directly on the canvas, such as an assignee, a due date, or a progress bar, or to match your application's design. The Workflow Designer still owns the step node, its ports, connections, selection, dragging, and resizing, so the workflow behaves the same with or without a template.

## Define a step template

Set the `workflowStepTemplate` property to one of the following values:

* **A function** that receives the template arguments and returns an HTML string or an `HTMLElement`. Use a function when the content depends on the step type, its settings, or its execution state.
* **An HTML string.** A string can include the `${step.name}` and `${state}` expressions, which are replaced with the step name and its execution state.

The function receives a `WorkflowStepTemplateArgs` object with the following properties.

| Property | Type | Description |
|---|---|---|
| `step` | `WorkflowStep` | Specifies the step being rendered, with its latest `name`, `props`, `customProps`, size, and appearance. |
| `state` | `WorkflowStepState` | Specifies the execution state of the step: `'idle'` before it runs, `'running'` while it runs, and `'completed'` or `'failed'` after it runs. |

The following example shows the step name, its type, and a status line that changes as the workflow runs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-cs1" %}

The template content fills the step node. Style it with your own CSS classes, and set the step size with [`stepDefaults`](./appearance#step-defaults) so that the content fits.

N> Build the content with `textContent`, or escape values before you insert them into an HTML string. Step names and settings are entered by users and can contain HTML.

## Refresh the template

The template is rendered again automatically when a step's settings, size, or appearance change, and when its execution state changes during a run. When the content depends on something the Workflow Designer doesn't track, such as the selected step or data in your application, call the `refreshWorkflowStepTemplate` method. Pass a step identifier to refresh that step, or call it without arguments to refresh every step.

The following example highlights the selected step by refreshing the previously selected step and the newly selected one.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-refresh-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-refresh-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/step-templates/step-template-refresh-cs1" %}

## Behavior and limitations

* **Applies to every step:** The template replaces the content of all steps, including triggers and custom steps. To vary the content, check `args.step.stepType` or `args.step.customStepId` in the template function.
* **Not saved:** The template is part of the Workflow Designer configuration, not of the workflow. It isn't included in the exported JSON.

## See also

* [Customize step appearance](./appearance)
* [Custom steps](./custom-steps)
