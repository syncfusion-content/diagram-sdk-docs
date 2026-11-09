---
layout: post
title: WebMCP Tools for Diagram - Syncfusion
description: Learn how WebMCP tools enable AI agents to create, edit, and manage diagrams using the Syncfusion Diagram control.
platform: diagram-sdk
control: Diagram
documentation: ug
---

# WebMCP Tools for Diagram SDK

**WebMCP** (Model Context Protocol) brings AI automation capabilities directly into the Syncfusion® Diagram. Instead of AI agents attempting to inspect the DOM or simulate user interactions, applications expose Diagram functionality through structured tools, giving AI assistants reliable and deterministic access to diagram operations.

## What is WebMCP?

WebMCP is a proposed web standard that enables web applications to expose functionality as structured tools that AI agents can invoke directly. Each tool includes:

- **Natural Language Description** — Explains what the tool does in human-readable terms
- **Input/Output Schemas** — JSON Schema definitions describing parameters and return values
- **Execution Context** — Direct function invocation without DOM manipulation or UI simulation

### Key Concepts

- **Tool**: A JavaScript function with schema definitions that agents can invoke
- **ModelContext**: The browser API (`document.modelContext`) that manages tool registration and invocation
- **Schema**: JSON Schema definitions describing tool inputs, outputs, and constraints
- **Agent**: An autonomous assistant (LLM-powered) that can understand goals and invoke registered tools to accomplish tasks

### Browser Support

WebMCP is currently available:

- Behind a feature flag in Chromium-based browsers (Chrome, Edge, Brave, and others)
- Experimental status; APIs and browser behavior may evolve as the standard changes
- Requires a secure context (HTTPS or localhost)

For local development, enable **WebMCP for testing** through `chrome://flags/`.

>WebMCP is an experimental browser standard. APIs and browser behavior may change as the specification evolves. The Syncfusion Diagram WebMCP integration is a preview feature.

## Why Use WebMCP for Diagram?

Syncfusion Diagram integration with WebMCP provides significant benefits for building AI-powered diagramming applications.

### Key Benefits

- **Universal Tool Access** — AI agents and MCP-compatible clients can discover and invoke diagram operations
- **Zero Custom Integration** — Inject the `WebMcpDiagram` module, enable WebMCP, and tool registration is handled automatically
- **Schema-Validated I/O** — Tools provide structured schemas for reliable AI interaction
- **Controlled Execution** — Applications can validate, approve, audit, or cancel tool execution through the `beforeWebMcpToolExecute` event
- **Multi-Instance Friendly** — Tool prefixes prevent conflicts when multiple diagrams exist on the same page
- **Native Integration** — Tools work directly with the Diagram control's built-in APIs and lifecycle
- **Real-Time Feedback** — Structured responses enable agents to verify outcomes and chain operations

## How WebMCP Works in Diagram

Understanding how WebMCP processes your request helps you write better prompts and get more reliable results.

### The Six-Stage Pipeline

When a WebMCP tool is invoked, the following occurs:

1. **Tool Discovery** — Available Diagram tool schemas are discovered
2. **Tool Registration** — Tools are registered through `document.modelContext`
3. **Tool Invocation** — An AI agent invokes a registered Diagram tool
4. **Request Routing** — Tool requests are routed to the Diagram WebMCP adapter
5. **Validation & Execution** — Optional validation, confirmation, or cancellation occurs before execution
6. **Structured Response** — Results are returned as structured success or error responses

## Integration

WebMCP integrates seamlessly into Syncfusion Diagram applications across all major platforms. Choose your framework below to get started with platform-specific setup instructions, API references, code examples, and sample prompts.

### Supported Platforms

- [WebMCP Integration for React Diagram](../react/webmcp) — React-based Diagram
- [WebMCP Integration for Angular Diagram](../angular/webmcp) — Angular-based Diagram
- [WebMCP Integration for Vue Diagram](../vue/webmcp) — Vue-based Diagram
- [WebMCP Integration for TypeScript Diagram](../typescript/webmcp) — TypeScript Diagram
- [WebMCP Integration for JavaScript Diagram](../javascript/webmcp) —  JavaScript Diagram


## Common Use Cases

### AI-Assisted Diagram Creation

Create diagram nodes, connectors, and relationships through natural language prompts.

Example: "Create a flowchart containing Start, Process, Decision, and End nodes."

### Diagram Editing and Organization

Select, align, distribute, group, and arrange diagram objects.

Example: "Align all selected nodes to the left and distribute them vertically."

### Diagram Navigation and Layout

Apply layouts, zoom, pan, and fit content within the viewport.

Example: "Apply an organizational chart layout to all nodes."

### Diagram Import and Export

Import or export diagram content in supported formats.

Example: "Export the current diagram as SVG."

### Diagram Management

Manage annotations, ports, layers, history operations, and z-order.

Example: "Add a label named Approve Request to the selected connector."

## Supported Features

WebMCP tools for Diagram are organized into the following categories:

| Category | Tools |
|----------|-------|
| Diagram Creation | createDiagramNode, createSpecializedDiagramNode, createDiagramConnector, createSpecializedRelationship |
| Selection & Editing | manageNodeSelection, manageInteractionMode, enableEditingMode |
| Arrangement | arrangeAndAlignObjects, arrangeZOrder |
| Content Management | manageAnnotationsAndLabels, managePorts, manageGroupsAndHierarchies, manageLayers |
| Navigation | navigateAndZoomDiagram |
| History & Clipboard | manageUndoRedo, manageClipboardOperations |
| File Operations | exportAndImportDiagrams |
| Layouts | applyLayoutToNodes |
| Object Removal | deleteFromDiagram |

## Available Diagram WebMCP Tools

The Syncfusion Diagram control exposes 19 built-in WebMCP tools.

- `createDiagramNode` – Creates standard Basic and Flowchart nodes.
- `createSpecializedDiagramNode` – Creates BPMN, ER, UML, and Swimlane nodes.
- `createDiagramConnector` – Creates connectors between nodes.
- `createSpecializedRelationship` – Creates ER and UML relationship connectors.
- `manageNodeSelection` – Selects nodes and connectors.
- `manageInteractionMode` – Switches between read-only and read-write modes.
- `enableEditingMode` – Enables or disables editing.
- `arrangeAndAlignObjects` – Aligns, distributes, and resizes objects.
- `deleteFromDiagram` – Removes selected, specified, or all objects.
- `manageUndoRedo` – Performs undo and redo operations.
- `manageClipboardOperations` – Supports cut, copy, and paste actions.
- `exportAndImportDiagrams` – Imports, exports, saves, loads, and prints diagrams.
- `arrangeZOrder` – Changes object stacking order.
- `navigateAndZoomDiagram` – Controls zooming and navigation.
- `manageGroupsAndHierarchies` – Manages grouping and parent-child relationships.
- `manageAnnotationsAndLabels` – Manages node and connector annotations.
- `managePorts` – Adds and removes ports.
- `manageLayers` – Creates, removes, and manages layers.
- `applyLayoutToNodes` – Applies predefined layouts to nodes.

## Writing Effective Prompts

Specific prompts help AI agents perform Diagram operations accurately.

### Good Prompt Examples

- "Create a flowchart with Start, Process, and End nodes connected sequentially."
- "Select all nodes and align them horizontally."
- "Export the current diagram as SVG."

### Vague Prompt Examples

- "Update this diagram"
- "Fix the layout"

### Tips for Effective Prompts

- **Be Specific** — Mention node types, connector types, and layout names
- **Provide Context** — Describe the desired diagram structure or workflow
- **One Goal at a Time** — Break complex tasks into smaller requests
- **Reference Objects Clearly** — Use exact node names or identifiers when possible
- **State Expectations** — Clearly describe the desired result

## Best Practices

- Expose only the required Diagram tools.
- Use the `name` property when multiple Diagram instances exist.
- Restrict access using the `exposedTo` property.
- Monitor activity through `beforeWebMcpToolExecute`.
- Validate tool arguments before modifying Diagram content.
- Use confirmation dialogs for destructive operations.
- Compare `toolName` instead of `registeredName` during event validation.

## Limitations

- WebMCP tools can perform only operations exposed through the Diagram public APIs.
- Prompt quality directly impacts AI execution quality.
- Browser support is currently experimental and may change in future WebMCP releases.
- Applications remain responsible for validating AI-generated requests before execution.

## See Also

- [Official WebMCP Specification](https://github.com/webmachinelearning/webmcp)
- [Chrome Developer Documentation](https://developer.chrome.com/docs/ai/webmcp/)