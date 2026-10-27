---
layout: post
title: Overview of React Workflow Designer | Syncfusion
description: Learn about the Syncfusion React Workflow Designer, its features, layout and the step types it supports.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Overview of React Workflow Designer

The Workflow Designer is a visual editor for building, validating and running workflows in the browser. Users add steps from the step collection, connect them on the canvas, configure each step in the property panel, and run the workflow to see the result of every step in the execution log.

In React, render the `WorkflowDesignerComponent` in JSX and use a ref to call its methods. See [Getting started](./getting-started) for the React integration pattern.

## Key features

* **Visual canvas** – Drag, connect, select, pan and zoom steps. Undo and redo are built in, and automatic layout arranges the workflow.
* **18 built-in step types** – Triggers, data operations, branching, loops, approvals, notifications, AI, formatting and custom steps.
* **Property panel** – Every step type has a dedicated editor, with expression support for reading data from earlier steps.
* **In-browser execution** – Run the whole workflow or start from a single step. Runs report their progress through events.
* **Host integration** – Your application delivers notifications, collects approvals, supplies credentials and runs custom steps through events.
* **Validation** – Structural errors and configuration errors are reported before a run starts.
* **Import and export** – Workflows are saved and loaded as JSON.
* **AI Assist** – Generate a workflow, or change the current one, from a natural-language prompt.
* **Sticky notes** – Document the workflow on the canvas with Markdown notes.
* **Localization, RTL and keyboard support.**

## Layout

| Region | Description |
|---|---|
| Top toolbar | Execute, Layout, Lock, Undo, Redo, Import and Export commands. |
| Step collection | The panel that new steps are picked from. It opens when the user adds a step. |
| Canvas | The workflow diagram, with a floating canvas toolbar at the bottom. |
| Property panel | The editor for the selected step or connection. |
| Execution log | The panel below the canvas. It lists the progress and result of each step during a run. |
| AI Assist | An optional chat panel for prompt-based workflow generation. |

## Step types

| Category | Step types |
|---|---|
| Triggers | `ManualTrigger`, `ScheduledTrigger`, `WebhookTrigger`, `FormInputTrigger` |
| Actions | `SetVariable`, `Filter`, `Sort`, `ApiRequest`, `Delay`, `Formatter`, `Custom` |
| Flow | `Condition`, `Switch`, `Loop`, `End` |
| Human | `Approve`, `Notify` |
| AI | `AI` |

See [Workflow steps](./workflow-steps) for the settings of each step type.

N> Workflows run in the user's browser. API Request and AI steps make real network calls during a run. For production integrations, review [Security considerations](./security).
