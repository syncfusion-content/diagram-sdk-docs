---
layout: post
title: Layout in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about layout in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: ej2-typescript
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Layout in TypeScript Workflow Designer control

The `layoutWorkflow` method arranges steps and connections automatically.

```ts

workflow.layoutWorkflow();

```

Layout is also available as the **Layout** toolbar item, and is configured through `workflowSettings.layoutSettings`. Sticky notes are excluded from layout.

Steps can instead be placed explicitly through each step's `position`.

```ts

{ id: 'start', stepType: 'ManualTrigger', nodeName: 'Start', props: {}, position: { x: 120, y: 200 } }

```

Because automatic layout spaces nodes uniformly, a step that renders a larger card, such as a configured `Formatter`, may sit closer to its neighbours than a standard step.

## See also

* [Customization](./customization)
