---
layout: post
platform: diagram-sdk
title: Drawing Tool in Windows Forms Diagram | Syncfusion®
description: Draw connectors dynamically in the Syncfusion® Windows Forms Diagram control using built-in drawing tools for line, orthogonal, spline, and bezier connectors.
control: Diagram
documentation: ug
---


# Drawing Tool in Windows Forms Diagram

[WinForms Diagram](https://www.syncfusion.com/winforms-ui-controls/diagram) control now provides a drawing tool to draw different types of connectors dynamically and connector types are listed below.

## Available Drawing Tools

1. LineConnector
2. OrthogonalConnector
3. OrgLineConnector
4. PolylineConnector
5. Spline
6. BezierCurve

## Activating a Drawing Tool

For example, the [OrgLineConnectorTool](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Diagram.OrgLineConnectorTool.html) is used to draw the Org line connector dynamically.


{% tabs %}
{% highlight c# %}

// Activates the Org line connector tool.
diagram1.Controller.ActivateTool("OrgLineConnectorTool");

{% endhighlight %}
{% highlight vb %}

'Activates the Org line connector tool.
diagram1.Controller.ActivateTool("OrgLineConnectorTool")

{% endhighlight %}
{% endtabs %}

![Drawing of Orthogonal Connector](Connectors-or-Links_images/Connectors-or-Links_img4.png)

## Sample

Please refer to the Connectors sample from the Windows Forms Control Panel and navigate to the Connector sample using the path below.

Sample: Windows Forms Control Panel > Diagram > Getting Started > Connectors
