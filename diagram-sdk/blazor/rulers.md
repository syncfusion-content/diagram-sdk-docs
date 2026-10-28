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

The [Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_Unit) property of [RulerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html) accepts the [DiagramUnit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnit.html) enum value to set the measurement unit for displaying ruler values in different physical units instead of pixels only.

The [DiagramUnit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnit.html) enum provides the following measurement units:

* **Pixel** - Displays ruler values in pixels. This is the default value.
* **Point** - Displays ruler values in points (1 pt = 1/72 inch).
* **Inch** - Displays ruler values in inches (1 in = 96 px).
* **Centimeter** - Displays ruler values in centimeters (1 cm = 37.7953 px).
* **Millimeter** - Displays ruler values in millimeters (1 mm = 3.7795 px).

The following code demonstrates how to configure ruler measurement units in the diagram:

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

The [Unit](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html#Syncfusion_Blazor_Diagram_RulerSettings_Unit) property of [RulerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.RulerSettings.html) can be changed at runtime to update the ruler display unit.

The following code demonstrates how to change the measurement units at runtime:

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

The [DiagramUnitConverter](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.DiagramUnitConverter.html) class provides methods to convert pixel values to other units and vice versa:

```csharp
// ConvertFromPixel - Converts a value in pixels to the specified unit
double centimeters = DiagramUnitConverter.ConvertFromPixel(300, DiagramUnit.Centimeter);

// ConvertToPixel - Converts a value in the specified unit back to pixels
double pixels = DiagramUnitConverter.ConvertToPixel(8, DiagramUnit.Centimeter);

// ConvertFromPixel - Convert pixels to inches
double inches = DiagramUnitConverter.ConvertFromPixel(96, DiagramUnit.Inch);
```
