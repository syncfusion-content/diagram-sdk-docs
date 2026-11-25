---
layout: post
title: Accessibility in TypeScript Workflow Designer control | Syncfusion®
description: Learn about the keyboard shortcuts and screen reader support of the Syncfusion TypeScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Accessibility in EJ2 TypeScript Workflow Designer

The Workflow Designer supports keyboard navigation and provides Accessible Rich Internet Applications (ARIA) labels on its toolbars, panels, steps, and connections. It also announces changes and run progress to screen readers, so users who rely on assistive technology can build and run workflows.

## Keyboard shortcuts

The following shortcuts are available while focus is on the Workflow Designer. On macOS, use <kbd>⌘</kbd> instead of <kbd>Ctrl</kbd>. Shortcuts aren't handled while focus is in a text field or a dialog, so they don't interfere with typing.

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Runs the workflow, or stops the run in progress. |
| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | Undoes the last change. |
| <kbd>Ctrl</kbd> + <kbd>Y</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redoes the last undone change. |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Exports the workflow as a JSON file. |
| <kbd>Ctrl</kbd> + <kbd>O</kbd> | Imports a workflow from a JSON file. |
| <kbd>Ctrl</kbd> + <kbd>L</kbd> | Locks or unlocks editing. |
| <kbd>Ctrl</kbd> + <kbd>+</kbd> | Zooms in. |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> | Zooms out. |
| <kbd>Ctrl</kbd> + <kbd>0</kbd> | Resets the zoom level to 100%. |
| <kbd>Ctrl</kbd> + <kbd>1</kbd> | Fits the whole workflow to the page. |
| <kbd>Shift</kbd> + <kbd>S</kbd> | Adds a sticky note. |
| <kbd>Shift</kbd> + <kbd>A</kbd> | Arranges the workflow automatically. |
| <kbd>S</kbd> | Switches to the selection tool. |
| <kbd>P</kbd> | Switches to the pan tool. |
| <kbd>Alt</kbd> + arrow keys | Moves the selection to the nearest step in that direction. |
| <kbd>Enter</kbd> | Opens the selected item in the property panel. |
| <kbd>Alt</kbd> + <kbd>N</kbd> | Adds the next step after the selected step. |
| <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> or <kbd>Ctrl</kbd> + <kbd>Delete</kbd> | Clears the workflow after the user confirms. |

## Screen reader support

* Steps, connections, and sticky notes have accessible names. A step is announced by its name and type, and a connection by the steps it links.
* The status of a run is announced as it changes, for example when a run starts, waits for input, completes, fails, or is stopped.
* Validation messages and run errors are reported in the execution log, which screen readers can navigate.

The announced text comes from the localization keys, so it follows the `locale` of the designer. See [Localization](./localization).

## See also

* [Localization](./localization)
* [Customize the user interface](./user-interface)
