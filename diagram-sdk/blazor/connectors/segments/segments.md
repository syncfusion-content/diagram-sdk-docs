---
layout: post
title: Connector Segments in Blazor Diagram Component | Syncfusion®
description: Define Blazor Diagram Component connector paths with straight, orthogonal, or Bezier segments for flexible relationship rendering.
platform: diagram-sdk
control: Diagram Component
documentation: ug
---

# Segments in Blazor Diagram Component

The path of the connector is defined with a collection of segments. Each segment determines how the connector travels between its source and target points. The Diagram component supports the following types of segments.

## Overview

A segment represents a single line or curve between two points of a connector. Multiple segments can be combined to create connectors that follow complex paths, change direction, or route around obstacles between the source and target. The connector [Type](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Connector.html#Syncfusion_Blazor_Diagram_Connector_Type) must match the segment `Type` so that the path renders correctly. Choose the segment type based on the desired connector behavior:

* **Straight Segments** — use direct lines between points for simple, straight connectors.
* **Orthogonal Segments** — use horizontal and vertical lines that bend at right angles, ideal for structured diagrams such as flowcharts and org charts.
* **Bezier Segments** — use curved paths defined by control points or vectors for smooth, free-form connectors.

## See also

* [How to create a Straight Segments](../connectors/connector-segments/straight.md)

* [How to create a Orthogonal Segments](../connectors/connector-segments/orthogonal.md)

* [How to create a Bezier Segments](../connectors/connector-segments/bezier/bezier.md)