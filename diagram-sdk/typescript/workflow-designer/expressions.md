---
layout: post
title: Expressions in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about expressions in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: ej2-typescript
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Expressions in TypeScript Workflow Designer control

Step properties accept expressions that are resolved at run time against a shared runtime context.

## Available paths

| Path | Contents |
|---|---|
| `$.input.response` | Payload supplied by the trigger |
| `$.nodes.<stepId>.response` | Result of a completed step |
| `$.variables.<name>` | Values written by a `SetVariable` step |
| `$.previousStep.response` | Result of the immediately preceding step |
| `$.loop.currentItem` | Current item inside a loop body |

Inside a loop body, `$.loop.index`, `$.loop.count` and `$.loop.all` are also in scope.

## Usage

Fields that expect a single path, such as the `field` of a `Condition` rule, take the path directly.

```ts

conditions: [
    {
        field: '$.input.response.amount',
        valueType: 'Number',
        operator: 'GreaterThan',
        value: 1000
    }
]

```

Fields that accept text interpolate an expression wrapped in double braces.

```ts

props: {
    reviewers: [{ type: 'Role', value: 'Finance Manager' }],
    requestMessage: 'Approve this claim?',
    requestFields: [
        { label: 'Amount', value: '{% raw %}{{$.input.response.amount}}{% endraw %}' },
        { label: 'Category', value: '{% raw %}{{$.input.response.category}}{% endraw %}' }
    ]
}

```

Secrets are redacted from logged output.

## See also

* [Steps](./steps)
* [Execution](./execution)
