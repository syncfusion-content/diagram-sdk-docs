---
layout: post
title: Overview of React Workflow Designer control | Syncfusion®
description: Learn about the Syncfusion React Workflow Designer control, its key features, layout, and the workflow steps it supports.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Overview of React Workflow Designer

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Workflow Designer is a visual editor for building, validating, and running workflows in the browser. Users add steps from the step collection, connect them on the canvas, and configure each step in the property panel. When a workflow runs, the execution log reports the progress and result of every step, while the host application handles work that only it can do, such as delivering notifications.

## Key features

* **Visual canvas:** Add, connect, select, and arrange steps on a canvas that supports panning, zooming, undo and redo, and automatic layout.
* **Built-in steps:** Use 18 step types for triggers, data operations, branching, loops, approvals, notifications, AI, and output formatting.
* **Custom steps:** Define application-specific steps with their own fields, icon, and appearance, and run them through your application code.
* **Property panel:** Configure each step in a type-specific editor. Settings accept expressions that read data produced by earlier steps.
* **In-browser execution:** Run the whole workflow from a trigger, or execute a single step to test its settings. Execution events report every stage of a run.
* **Host integration:** Deliver notifications, run custom steps, and inspect, change, or block outgoing API and AI requests from your application.
* **Validation:** Detect structural and configuration problems before a run starts, with the affected step or connection identified.
* **Appearance customization:** Replace the content of every step with a template, and assign default sizes, colors, and connector styles.
* **Programmatic editing:** Add, update, and remove steps, connections, and sticky notes from code.
* **Import and export:** Save and load workflows as JSON. Sensitive values, such as AI API keys and authorization headers, are removed on export.
* **AI Assist:** Generate a workflow, or change the current one, from a natural-language prompt.
* **Sticky notes:** Document a workflow on the canvas with Markdown-formatted notes.
* **Localization and accessibility:** Translate all designer text, display it right to left, and use keyboard shortcuts for common commands.

## Layout

The Workflow Designer is made up of the following regions. Each region except the canvas can be shown, hidden, or configured. For details, see [Customize the user interface](./user-interface).

| Region | Description |
|---|---|
| Top toolbar | Contains the workflow commands: **Execute**, **Layout**, **Lock**, **Undo**, **Redo**, **Import**, and **Export**. While a workflow runs, **Execute** is replaced by **Stop**. |
| Step collection | Lists the steps that users can add, grouped by category. It opens when the user adds a step and is collapsed otherwise. |
| Canvas | Displays the workflow diagram. A floating canvas toolbar at the bottom provides the add, sticky note, selection, pan, and zoom commands. |
| Property panel | Displays the editor of the selected step or connection, where users change its settings. |
| Execution log | Docked below the canvas. It lists the status, input, and output of each step during a run. |
| AI Assist | An optional chat panel that generates or changes workflows from prompts. |

## Step categories

The step collection groups the built-in steps into the following categories. Custom step definitions appear in an additional **Custom** category.

| Category | Step types | Purpose |
|---|---|---|
| Triggers | `ManualTrigger`, `ScheduledTrigger`, `WebhookTrigger`, `FormInputTrigger` | Start a workflow run. |
| Actions | `SetVariable`, `Filter`, `Sort`, `ApiRequest` | Create, transform, and fetch data. |
| Flow | `Delay`, `Condition`, `Switch`, `Loop` | Pause a run, choose a path, or repeat steps. |
| Human | `Approve`, `Notify` | Wait for a reviewer's decision or notify people. |
| AI | `AI` | Send a prompt to an AI provider and use the answer in later steps. |
| Output | `Formatter`, `End` | Format results and end a path of the workflow. |
| Custom | `Custom` | Run application-specific work through your application code. |

For the settings of each step type, see [Workflow steps](./workflow-steps).

N> Workflows run in the user's browser, and API Request and AI steps make real network calls during a run. Before you build a production integration, review [Security considerations](./security).

## Sample browser

To see the Workflow Designer in action, open the [Default Functionalities demo](https://ej2.syncfusion.com/javascript/demos/#/tailwind3/workflow-designer/default-functionalities.html) in the JavaScript sample browser.

## See also

* [Getting started](./getting-started)
* [Workflow steps](./workflow-steps)
* [Running workflows](./execution)
