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

## Ruler Measurement Units

The ruler measurement units feature enables displaying ruler values in different physical units instead of pixels only. Supported units include Pixel, Point, Inch, Centimeter, and Millimeter. This feature is useful for design workflows, print-oriented layouts, and technical drawings where measurements in familiar physical units are required.

### Supported Units

The following measurement units are supported for ruler display:

| Unit | Abbreviation | Common Usage | Conversion |
|------|--------------|--------------|-----------|
| Pixel | px | Screen/UI Design | Default unit |
| Point | pt | Print/Office Documents | 1 pt = 1/72 inch |
| Inch | in | Printing/Layout | 1 in = 96 px |
| Centimeter | cm | Document Design | 1 cm = 37.7953 px |
| Millimeter | mm | Engineering/Technical Drawings | 1 mm = 3.7795 px |

### Properties

The [RulerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html) class provides the following properties to configure measurement units:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| [Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_Unit) | [DiagramUnit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnit.html) | Pixel | Gets or sets the measurement unit in which both the horizontal and vertical rulers display their values. |
| [UnitChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_UnitChanged) | EventCallback<DiagramUnit> | - | Gets or sets the callback that is invoked when the rulers' unit changes. Used with @bind-Unit for two-way data binding. |

The [DiagramUnit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnit.html) enum defines the available measurement units:

* **Pixel** - Displays ruler values in pixels. This is the default value.
* **Point** - Displays ruler values in points (1 pt = 1/72 inch).
* **Inch** - Displays ruler values in inches (1 in = 96 px).
* **Centimeter** - Displays ruler values in centimeters (1 cm = 37.7953 px).
* **Millimeter** - Displays ruler values in millimeters (1 mm = 3.7795 px).

### Configure Ruler Measurement Units

The following code demonstrates how to configure ruler measurement units in the diagram.

```cshtml
@using Syncfusion.Blazor.Diagram

<SfDiagramComponent Height="600px">
    <RulerSettings Unit="DiagramUnit.Centimeter">
        <HorizontalRuler IsVisible="true">
        </HorizontalRuler>
        <VerticalRuler IsVisible="true">
        </VerticalRuler>
    </RulerSettings>
</SfDiagramComponent>
```
{% previewsample "" backgroundimage "[Ruler Units](images/Ruler.webp)" %}

### Runtime Update of Measurement Units

The measurement units can be changed at runtime using the `Unit` property. The [DiagramUnitConverter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnitConverter.html) helper class can be used to convert pixel values to other units for custom tooltips or property panels.

The following code demonstrates how to change the measurement units at runtime and bind the unit property for two-way data binding.

```cshtml
@using Syncfusion.Blazor.Diagram

<div>
    <label>Select Ruler Unit:</label>
    <select @onchange="OnUnitChange">
        <option value="@DiagramUnit.Pixel">Pixel</option>
        <option value="@DiagramUnit.Point">Point</option>
        <option value="@DiagramUnit.Inch">Inch</option>
        <option value="@DiagramUnit.Centimeter">Centimeter</option>
        <option value="@DiagramUnit.Millimeter">Millimeter</option>
    </select>
</div>

<SfDiagramComponent Height="600px">
    <RulerSettings @bind-Unit="@rulerUnit">
        <HorizontalRuler IsVisible="true">
        </HorizontalRuler>
        <VerticalRuler IsVisible="true">
        </VerticalRuler>
    </RulerSettings>
</SfDiagramComponent>

@code {
    private DiagramUnit rulerUnit = DiagramUnit.Pixel;

    private async Task OnUnitChange(ChangeEventArgs e)
    {
        if (Enum.TryParse<DiagramUnit>(e.Value.ToString(), out var selectedUnit))
        {
            rulerUnit = selectedUnit;
        }
    }
}
```

### Unit Conversion Helper

The [DiagramUnitConverter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnitConverter.html) static class provides methods to convert pixel values to other measurement units. This is useful when displaying converted values in custom tooltips or property panels.

The following code demonstrates how to use the unit conversion helper:

```csharp
// Convert pixels to centimeters
double centimeters = DiagramUnitConverter.ConvertFromPixel(300, DiagramUnit.Centimeter);

// Convert centimeters back to pixels
double pixels = DiagramUnitConverter.ConvertToPixel(8, DiagramUnit.Centimeter);

// Convert pixels to inches
double inches = DiagramUnitConverter.ConvertFromPixel(96, DiagramUnit.Inch);
```

### Important Notes

* The measurement unit affects only the ruler labels and tick spacing. Diagram coordinates, node positions, and connector sizes remain in pixels.
* When the unit is set to a value other than Pixel, the [Interval](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramRuler.html#Syncfusion_Blazor_Diagram_DiagramRuler_Interval) property of the ruler is ignored, and minor ticks follow automatic spacing rules.
* The built-in drag and resize tooltip displays values in the configured measurement unit.
* Both the horizontal and vertical rulers share the same unit set in `RulerSettings`.
* Ruler values are computed from diagram coordinates and remain consistent across zoom levels.
