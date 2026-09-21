---
layout: post
title: Execution in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about execution in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: ej2-typescript
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Execution in TypeScript Workflow Designer control

Execution begins from the **Execute** toolbar item or from the `runSimulation` method. The engine walks the graph from the trigger, resolving output ports as it goes, and highlights the active step on the canvas.

```ts

workflow.runSimulation().then((result) => {
    console.log(result.status, result.visitedSteps, result.visitedConnections);
});

```

Use `stopSimulation` to halt a run in progress.

## Execution events

| Event | Raised |
|---|---|
| `executionStarted` | A run begins |
| `executionStepStarted` | A step is reached |
| `executionStepCompleted` | A step completes |
| `executionStepFailed` | A step fails |
| `executionCompleted` | The run finishes |
| `executionFailed` | The run fails |
| `executionStopped` | The user stops the run |

```ts

const workflow: WorkflowDesigner = new WorkflowDesigner({
    executionStepCompleted: (args) => {
        console.log('completed', args);
    },
    executionCompleted: (args) => {
        console.log('finished', args);
    }
});

```

## Execution settings

`executionSettings` controls how a run is presented.

| Property | Values |
|---|---|
| `executionSpeed` | `Instant`, `Normal`, `Slow` |
| `delayMode` | `RealTime`, `FastForward` |
| `nodeStateColors` | Per-state node colours |
| `connectorStateColors` | Per-state connector colours |

`FastForward` collapses `Delay` waits so a long-running workflow can be previewed quickly.

## Sequential execution

Execution is sequential and depth-first. Where a step fans out to several branches, those branches run one after another rather than concurrently, and there is no synchronisation barrier on which they re-converge. Model concurrent real-world activity as a dependency sequence.

## Triggers

Trigger steps describe how a workflow is started in a deployed system. They do not start it here: there is no scheduler and no HTTP listener, so `ScheduledTrigger` and `WebhookTrigger` do not fire on their own. A run begins only when **Execute** is selected or `runSimulation` is called. Run state lives in the browser and is not persisted.

## See also

* [Host integration](./host-integration)
* [Validation](./validation)
