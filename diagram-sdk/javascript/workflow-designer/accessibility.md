---
layout: post
title: Accessibility in JavaScript Workflow Designer control | Syncfusion®
description: Learn about keyboard shortcuts, screen reader support and right-to-left layout in the Syncfusion® JavaScript Workflow Designer control.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Accessibility in JavaScript Workflow Designer control

<<<<<<< HEAD
The Workflow Designer provides keyboard navigation, ARIA labels on its controls and panels, and live announcements of changes and run progress for screen readers.
=======
The Workflow Designer supports keyboard navigation and provides Accessible Rich Internet Applications (ARIA) labels on its controls and panels. It also announces changes and run progress to screen readers.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

## Keyboard shortcuts

On macOS, use <kbd>⌘</kbd> instead of <kbd>Ctrl</kbd>. Shortcuts aren't handled while focus is in a text field or a dialog.

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Run or stop the workflow |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undo |
<<<<<<< HEAD
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Export the workflow |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Import a workflow |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Lock or unlock editing |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zoom in / out |
=======
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Export the workflow |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Import a workflow |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Lock or unlock editing |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> | Zoom in |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zoom out |
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Reset zoom |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> | Fit to page |
| <kbd>Shift</kbd> + <kbd>S</kbd> | Add a sticky note |
| <kbd>Shift</kbd> + <kbd>A</kbd> | Arrange the workflow automatically |
<<<<<<< HEAD
| <kbd>S</kbd> / <kbd>P</kbd> | Select tool / Pan tool |
| <kbd>Alt</kbd> + <kbd>Arrow</kbd> keys | Move the selection to the nearest step in that direction |
| <kbd>Enter</kbd> | Open the selected item in the property panel |
| <kbd>Alt</kbd> + <kbd>N</kbd> | Add the next step |
| <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> / <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | Clear the workflow, after confirmation |

## Right-to-left

Set `enableRtl` to `true` to display the designer from right to left.
=======
| <kbd>S</kbd> | Switch to the select tool |
| <kbd>P</kbd> | Switch to the pan tool |
| <kbd>Alt</kbd> + arrow keys | Move the selection to the nearest step in that direction |
| <kbd>Enter</kbd> | Open the selected item in the property panel |
| <kbd>Alt</kbd> + <kbd>N</kbd> | Add the next step |
| <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> or <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | Clear the workflow, after confirmation |

## Right-to-left

To display the designer from right to left, set `enableRtl` to `true`:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({ enableRtl: true });

{% endhighlight %}
{% endtabs %}
<<<<<<< HEAD
=======

## See also

* [Localization](./localization)
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
