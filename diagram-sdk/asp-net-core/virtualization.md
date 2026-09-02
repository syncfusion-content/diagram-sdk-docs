---
layout: post
title: Virtualization in ASP.NET Core Diagram | Syncfusion®
description: Enable virtualization in Syncfusion® ASP.NET Core Diagram to load only nodes and connectors inside the viewport, boosting performance on large diagrams.
platform: diagram-sdk
control: Virtualization
publishingplatform: diagram-sdk
documentation: ug
---


# Virtualization in ASP.NET Core Diagram

## Virtualization in Diagram

Virtualization is the process of loading the diagramming objects available in the visible area of the ASP.NET Core Diagram control, that is, only the diagramming objects that lie within the ViewPort of the Scroll Viewer are loaded (remaining objects are loaded only when they come into view).

This feature gives an optimized performance while loading and dragging items to the Diagram that consists of many Nodes and Connectors.

```javascript
var diagramElement = document.getElementById('element');
var diagram = diagramElement.ej2_instances[0];
//Enable virtualization in diagram
diagram.constraints = DiagramConstraints.Default | DiagramConstraints.Virtualization,
diagram.dataBind();
```
