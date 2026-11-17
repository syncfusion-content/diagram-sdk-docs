---
layout: post
title: Rulers in Blazor Diagram Component | Syncfusion®
description: Measure and align Blazor Diagram Component elements with horizontal and vertical rulers that show tick marks and a cursor guide.
platform: diagram-sdk
control: Blazor Diagram Component
documentation: ug
---

# Rulers in Blazor Diagram Component

The Ruler provides horizontal and vertical guides for measuring in the Blazor Diagram Component. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful in creating scale models.

## How to Add Rulers to the Blazor Diagram Component

The [RulerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.SfDiagramComponent.html#Syncfusion_Blazor_Diagram_SfDiagramComponent_RulerSettings) property of [SfDiagramComponent](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.SfDiagramComponent.html) is used to control the visibility and appearance of the ruler in the diagram. The [HorizontalRuler](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_HorizontalRuler) and [VerticalRuler](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_VerticalRuler) properties of the `RulerSettings` are used to define and customize the horizontal ruler and vertical ruler in the diagram canvas.

The following code demonstrates how to add a ruler to the diagram.

```cshtml
@using Syncfusion.Blazor.Diagram

<SfDiagramComponent Height="600px" >
	<RulerSettings>
        <HorizontalRuler>
          </HorizontalRuler>
        <VerticalRuler >
          </VerticalRuler>
    </RulerSettings>
</SfDiagramComponent>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/rXhnNdqDMaqHNpnd?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Ruler](images/Ruler.webp)" %}

## How to Customize the Ruler

The `HorizontalRuler` and `VerticalRuler` properties `RulerSettings` class are used to customize the appearance of the rulers in the diagram. The following properties are used to customize the appearance of both the horizontal and vertical rulers.

* [Interval](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramRuler.html#Syncfusion_Blazor_Diagram_DiagramRuler_Interval) - This property allows to define the number of intervals to be present on each segment of both horizontal and vertical rulers.
* [IsVisible](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramRuler.html#Syncfusion_Blazor_Diagram_DiagramRuler_IsVisible) - This property determines whether the horizontal and vertical rulers are displayed in the diagram. This can be useful for toggling rulers on and off depending on your needs.
* [TickAlignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramRuler.html#Syncfusion_Blazor_Diagram_DiagramRuler_TickAlignment) - This property controls the placement of the tick marks (also called hash marks) on the ruler. Typically choose to have them positioned on the left or right for the vertical ruler and on the top or bottom for the horizontal ruler.
* [MarkerColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramRuler.html#Syncfusion_Blazor_Diagram_DiagramRuler_MarkerColor) - This property defines the color of the marker line, also known as the cursor guide. This line appears in the diagram and aligns with the ruler, visually indicating the current position of your cursor.

The following code illustrates how to customize the diagram ruler.

```cshtml
@using Syncfusion.Blazor.Diagram

<SfDiagramComponent @ref="@_diagram" Height="600px" >
	<RulerSettings>
        <HorizontalRuler  IsVisible="true" Interval="@_rulerInterval" 
                            TickAlignment="@_rulerTickAlignment" MarkerColor="@_rulerMarkerColor">
        </HorizontalRuler>
        <VerticalRuler IsVisible="false"  Interval="@_rulerInterval" 
                        TickAlignment="@_rulerTickAlignment" MarkerColor="@_rulerMarkerColor">
        </VerticalRuler>
    </RulerSettings>
</SfDiagramComponent>

@code
{
    //Reference to diagram.
    private SfDiagramComponent _diagram;
    //Defining Ruler Interval of Rulers
    private int _rulerInterval = 20;
    //Defining Tick Alignment of Rulers
    private TickAlignment _rulerTickAlignment = TickAlignment.RightAndBottom;
    //Defining Marker color of Rulers
    private string _rulerMarkerColor = "green";

}

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LjhxXxUtCkKuYBGV?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/Blazor-UG-Examples/blob/master/Diagram/Server/Pages/Ruler/Ruler.razor)

## Ruler measurement units

The [Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_Unit) property of [RulerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html) specifies the unit in which ruler values are displayed. Set it to a [DiagramUnit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnit.html) value to show measurements in physical units such as inches or centimeters instead of pixels.

| Value | Description | Equivalent in pixels |
|---|---|---|
| Pixel | Displays ruler values in pixels. This is the default. | 1 px |
| Point | Displays ruler values in points (1/72 in). | ≈ 1.3333 px |
| Inch | Displays ruler values in inches. | 96 px |
| Centimeter | Displays ruler values in centimeters. | ≈ 37.7953 px |
| Millimeter | Displays ruler values in millimeters. | ≈ 3.7795 px |

The size and position tooltip shown while dragging or resizing elements also uses the configured unit.

The following code shows how to display ruler values in centimeters.

```cshtml
@using Syncfusion.Blazor.Diagram

<SfDiagramComponent Width="1000px" Height="600px">
    <RulerSettings Unit="DiagramUnit.Centimeter">
        <HorizontalRuler IsVisible="true" />
        <VerticalRuler IsVisible="true" />
    </RulerSettings>
</SfDiagramComponent>
```

N> The unit affects only how measurements are displayed. Node and connector properties such as OffsetX and Width are always specified in pixels. Conversions assume 96 pixels per inch, so on-screen lengths may differ slightly from physical lengths depending on the display.

### Change the unit at runtime

The Unit property can be changed at runtime, and the rulers update immediately. The following example lets the user choose the ruler unit from a drop-down list.

```cshtml
@using Syncfusion.Blazor.Diagram

<div>
    <label for="rulerUnit">Ruler unit:</label>
    <select id="rulerUnit" @bind="rulerUnit">
        @foreach (DiagramUnit unit in Enum.GetValues<DiagramUnit>())
        {
            <option value="@unit">@unit</option>
        }
    </select>
</div>

<SfDiagramComponent Width="1000px" Height="600px">
    <RulerSettings Unit="@rulerUnit">
        <HorizontalRuler IsVisible="true" />
        <VerticalRuler IsVisible="true" />
    </RulerSettings>
</SfDiagramComponent>

@code {
    private DiagramUnit rulerUnit = DiagramUnit.Pixel;
}
```

### Convert values between units

Node and connector properties are always specified in pixels. To work in other units, use the static ConvertUnit method of SfDiagramComponent. It takes the value, the source unit, and the target unit, and returns the converted value as a double.

```csharp
double centimeters = SfDiagramComponent.ConvertUnit(300, DiagramUnit.Pixel, DiagramUnit.Centimeter); // ≈ 7.9375
double inches = SfDiagramComponent.ConvertUnit(96, DiagramUnit.Pixel, DiagramUnit.Inch);            // 1
double pixels = SfDiagramComponent.ConvertUnit(8, DiagramUnit.Centimeter, DiagramUnit.Pixel);        // ≈ 302.3622

Node node = new Node()
{
    ID = "node1",
    OffsetX = 200,
    OffsetY = 200,
    Width = SfDiagramComponent.ConvertUnit(5, DiagramUnit.Centimeter, DiagramUnit.Pixel),
    Height = SfDiagramComponent.ConvertUnit(2, DiagramUnit.Centimeter, DiagramUnit.Pixel)
};
```
