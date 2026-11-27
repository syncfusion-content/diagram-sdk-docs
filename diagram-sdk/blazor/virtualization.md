---
layout: post
title: Virtualization in Blazor Diagram Component | Syncfusion®
description: Enhance diagram performance with virtualization by rendering only visible nodes and connectors within the current viewport.
platform: diagram-sdk
control: Blazor Diagram Component
documentation: ug
---

# Virtualization in Blazor Diagram

Virtualization is used to improve rendering performance when working with large-scale diagrams containing thousands of nodes and connectors. When enabled, the diagram renders only the elements that are visible within the viewport and its extended buffer area, reducing DOM creation and improving scrolling performance. The underlying diagram model continues to maintain all diagram elements regardless of their rendered state.

## Enable Virtualization
Use the DiagramConstraints.Virtualization constraint to enable viewport-based virtualization in the diagram.

```cshtml
<SfDiagramComponent Width="100%"
                    Height="600px"
                    Constraints="DiagramConstraints.Default | DiagramConstraints.Virtualization">
</SfDiagramComponent>
```

How Virtualization Works

When virtualization is enabled, the diagram renders only the elements required for the current viewing area, significantly reducing DOM size and improving performance when working with large diagrams.

* Only nodes and connectors that intersect the extended viewport are rendered.
* To provide smooth scrolling and minimize rendering delays, the viewport is automatically expanded by 50% in all directions. Elements within this extended region are pre-rendered before they enter the visible area.
* Elements outside the extended viewport remain part of the diagram model but are not rendered in the DOM.
* Wrapper objects for out-of-view elements are created on demand when:
    ** The element enters the extended viewport.
    ** An operation such as selection, layout arrangement, or export requires access to the element.
    ** Virtualization is disabled.
* Once a wrapper is created, it is retained for future use and is not removed, even if the element later moves outside the extended viewport.

Note: Virtualization optimizes rendering performance only. All diagram elements remain available in the underlying data model regardless of their rendering state.

```cshtml
@using Syncfusion.Blazor.Diagram

<SfDiagramComponent Width="100%"
                    Height="600px"
                    Nodes="@Nodes"
                    Constraints="DiagramConstraints.Default | DiagramConstraints.Virtualization">
</SfDiagramComponent>

@code {
    public ObservableCollection<Node> Nodes { get; set; } = new();

    protected override void OnInitialized()
    {
        for (int i = 0; i < 5000; i++)
        {
            Nodes.Add(new Node()
            {
                ID = $"node{i}",
                OffsetX = (i % 100) * 150,
                OffsetY = (i / 100) * 100,
                Width = 80,
                Height = 40
            });
        }
    }
}
```

## Virtualization in Overview Panel
When using the Diagram Overview component together with virtualization, elements that are not currently rendered in the diagram viewport are displayed as outlines within the overview canvas. These outlines ensure that the complete diagram structure remains visible even though only a subset of elements is rendered.

### Customize Overview Outlines
The OutlineSettings property can be used to customize the appearance of these virtualized elements in the overview.

```cshtml
<SfDiagramComponent Constraints="DiagramConstraints.Virtualization">
    <OutlineSettings OutlineStyle="@OutlineStyle"></OutlineSettings>
</SfDiagramComponent>

@code {
    private ShapeStyle OutlineStyle = new ShapeStyle
    {
        StrokeColor = "#6BA5D7",
        StrokeWidth = 1,
        Fill = "transparent"
    };
}
```

## Outline Settings
Defines how virtualized elements that are not rendered in the diagram are displayed within the Overview component.

Property	Description
OutlineStyle	Specifies the style used to render virtualized elements as outlines within the Overview canvas.

Example

```cshtml
<SfDiagramComponent Constraints="DiagramConstraints.Virtualization">
    <OutlineSettings OutlineStyle="@OutlineStyle"></OutlineSettings>
</SfDiagramComponent>

@code {
    private ShapeStyle OutlineStyle = new ShapeStyle
    {
        StrokeColor = "#6BA5D7",
        StrokeWidth = 1,
        Fill = "transparent"
    };
}
```

### Best Practices
* Enable virtualization when working with large diagrams containing hundreds or thousands of elements.
* Use virtualization together with data binding and organizational layouts to improve initial load performance.
Keep overview outlines lightweight by using simple stroke styles.
* Expect DOM element counts to increase progressively as additional regions are visited because created wrappers are retained for future interactions.
### Limitations
* Virtualization affects rendering only. All nodes and connectors remain available in the diagram model.
* Wrapper objects for elements created during interaction are not released afterward.
* Overview rendering of non-visible elements is controlled through OutlineSettings.