---
layout: post
title: Accessibility in TypeScript Workflow Designer control | Syncfusion®
description: Learn about keyboard shortcuts, screen reader support and right-to-left layout in the Syncfusion TypeScript Workflow Designer control.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: typescript
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in TypeScript Workflow Designer control

The Workflow Designer provides keyboard navigation, ARIA labels on its controls and panels, and live announcements of changes and run progress for screen readers.

## Keyboard shortcuts

On macOS, use <kbd>⌘</kbd> instead of <kbd>Ctrl</kbd>. Shortcuts aren't handled while focus is in a text field or a dialog.

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Run or stop the workflow |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Export the workflow |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Import a workflow |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Lock or unlock editing |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zoom in / out |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset zoom |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> | Fit to page |
| <kbd>Shift</kbd> + <kbd>S</kbd> | Add a sticky note |
| <kbd>Shift</kbd> + <kbd>A</kbd> | Arrange the workflow automatically |
| <kbd>S</kbd> / <kbd>P</kbd> | Select tool / Pan tool |
| <kbd>Alt</kbd> + <kbd>Arrow</kbd> keys | Move the selection to the nearest step in that direction |
| <kbd>Enter</kbd> | Open the selected item in the property panel |
| <kbd>Alt</kbd> + <kbd>N</kbd> | Add the next step |
| <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> / <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | Clear the workflow, after confirmation |

## Right-to-left

Set `enableRtl` to `true` to display the designer from right to left.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const designer: WorkflowDesigner = new WorkflowDesigner({ enableRtl: true });

{% endhighlight %}
{% endtabs %}
