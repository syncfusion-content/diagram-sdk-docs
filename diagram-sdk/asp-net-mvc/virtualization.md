---
layout: post
title: Virtualization in Syncfusion® ASP.NET MVC Diagram Component
description: Learn here all about Virtualization in Syncfusion® ASP.NET MVC Diagram component of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Virtualization
publishingplatform: diagram-sdk
documentation: ug
---


# Virtualization in Diagram

## Virtualization in Diagram

Virtualization is the process of loading the diagramming objects available in the visible area of the Diagram control, that is, only the diagramming objects that lie within the ViewPort of the Scroll Viewer are loaded (remaining objects are loaded only when they come into view).

This feature gives an optimized performance while loading and dragging items to the Diagram that consists of many Nodes and Connectors.

```javascript
var diagramElement = document.getElementById('element');
var diagram = diagramElement.ej2_instances[0];
//Enable virtualization in diagram
diagram.constraints = DiagramConstraints.Default | DiagramConstraints.Virtualization,
diagram.dataBind();
```
