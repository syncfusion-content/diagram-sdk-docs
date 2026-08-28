---
layout: post
title: Getting Started with Blazor Diagram in Blazor Server App | Syncfusion®
description: Check out and learn about the documentation for getting started with Blazor Diagram Component in Blazor Server App.
platform: diagram-sdk
control: Diagram Component
documentation: ug
---

# Getting Started with Blazor Diagram in Blazor Server App

This section explains the step-by-step process of integrating the [Blazor Diagram](https://www.syncfusion.com/diagram-sdk/blazor-diagram) component into your Blazor Server app using Visual Studio, Visual Studio Code and .NET CLI. We'll break it down into simple steps to make it easy to follow. Additionally, you can find a fully functional example project on our [GitHub repository](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/DiagramComponent).

> **Ready to streamline your Blazor development?** <br/>Discover the full potential of Blazor components with AI Coding Assistants. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, CodeStudio and more. [Explore AI Coding Assistants](https://blazor.syncfusion.com/documentation/ai-coding-assistant/overview)

## Using .NET CLI Templates

Quickly set up a Blazor application using the preconfigured [Syncfusion Web App Template](https://help.syncfusion.com/extension/syncfusion-blazor-webapp-template-via-nuget/installation).

First, install the template using the .NET CLI.

{% tabs %}
{% highlight razor tabtitle=".NET CLI" %}

dotnet new install Syncfusion.Blazor.WebApp.Templates

{% endhighlight %}
{% endtabs %}

Next, create a new project with following command.

{% tabs %}
{% highlight razor tabtitle="Server" %}

dotnet new syncfusionblazorwebapp --name MyApp --interactivity Server

{% endhighlight %}

{% endtabs %}

After creating the project, navigate to the main project folder (for example, `MyApp`) and run the following command.

{% highlight razor tabtitle=".NET CLI" %}

cd MyApp
dotnet run

{% endhighlight %}

## Manually creating a new Blazor Server App

{% tabcontents %}

{% tabcontent Visual Studio %}

Create a **Blazor Server App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio). For detailed instructions, refer to the [Blazor Server App Getting Started](https://blazor.syncfusion.com/documentation/getting-started/blazor-server-side-visual-studio) documentation.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command to create a new Blazor Server App.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet new blazor -o BlazorServerApp --interactivity Server
cd BlazorServerApp

{% endhighlight %}
{% endtabs %}

Alternatively, create a **Blazor Server App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc), the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project), or the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.

{% endtabcontent %}

{% endtabcontents %}

N> Configure the appropriate [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) while creating a Blazor Server App. For detailed information, refer to the [interactive render mode documentation](https://blazor.syncfusion.com/documentation/common/interactive-render-mode).

### Install the required Blazor packages

Install the [Syncfusion.Blazor.Diagram](https://www.nuget.org/packages/Syncfusion.Blazor.Diagram) and [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/) NuGet packages. All Syncfusion Blazor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet packages (`Syncfusion.Blazor.Diagram` and `Syncfusion.Blazor.Themes`) and install them.

Alternatively, you can install the same packages using the Package Manager Console with the following commands.

{% tabs %}
{% highlight razor tabtitle="Package Manager Console" %}

Install-Package Syncfusion.Blazor.Diagram -Version {{ site.releaseversion }}
Install-Package Syncfusion.Blazor.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following commands.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet add package Syncfusion.Blazor.Diagram --version {{ site.releaseversion }}
dotnet add package Syncfusion.Blazor.Themes --version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

### Add import namespaces

After the packages are installed, open the **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Diagram` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor;
@using Syncfusion.Blazor.Diagram;

{% endhighlight %}
{% endtabs %}

### Register the Blazor service

Open the **Program.cs** file in Blazor Server App and register the Blazor service and include the required namespace reference `using Syncfusion.Blazor;` at the top.

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

### Add stylesheet and script resources

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the [stylesheet](https://blazor.syncfusion.com/documentation/appearance/themes) at the end of the `<head>` section in the **App.razor** file.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<link href="_content/Syncfusion.Blazor.Themes/fluent2.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

Include the required [script references](https://blazor.syncfusion.com/documentation/common/adding-script-references) at the end of the `<body>` section in the **App.razor** file to enable Diagram functionality.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<script src="_content/Syncfusion.Blazor.Diagram/scripts/sf-diagramcomponent.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

### Add Blazor Diagram component

Open a Razor file located in the **~/Components/Pages/*.razor** (for example, **Home.razor**) and add the [Blazor Diagram](https://www.syncfusion.com/diagram-sdk/blazor-diagram) component inside the razor file.

N> If the interactivity location is set to `Per page/component` in the Server App, define a render mode at the top of the razor file. (For example, `InteractiveServer`, `InteractiveWebAssembly` or `InteractiveAuto`). If the **Interactivity** is set to `Global` with `Auto` or `WebAssembly`, the render mode is automatically configured in the `App.razor` file by default.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

<SfDiagramComponent Width="100%" Height="600px"/>

{% endhighlight %}
{% endtabs %}

### Create your first Diagram with nodes and connectors

This section explains how to create a simple flowchart by adding nodes, customizing their appearance, and connecting them using connectors.

The following example creates a flowchart with four nodes: **Start**, **Process**, **Decision**, and **End**. It also applies common node and connector settings using the `NodeCreating` and `ConnectorCreating` properties.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Diagram

<SfDiagramComponent Width="100%" Height="600px" Nodes="@nodes" Connectors="@connectors" NodeCreating="@NodeCreating" ConnectorCreating="@ConnectorCreating" />

@code {
    DiagramObjectCollection<Node> nodes = new DiagramObjectCollection<Node>();
    DiagramObjectCollection<Connector> connectors = new DiagramObjectCollection<Connector>();
    protected override void OnInitialized()
    {
        nodes = new DiagramObjectCollection<Node>()
        {
            new Node()
            {
               ID = "node1", OffsetX = 300, OffsetY = 100,
               Shape = new FlowShape() { Type = NodeShapes.Flow, Shape = NodeFlowShapes.Terminator },
               Annotations = new DiagramObjectCollection<ShapeAnnotation>()
               {
                  new ShapeAnnotation(){ Content = "Start" }
               }
            },
            new Node()
            {
               ID = "node2", OffsetX = 300, OffsetY = 200,
               Shape = new FlowShape() { Type = NodeShapes.Flow, Shape = NodeFlowShapes.Process },
               Annotations = new DiagramObjectCollection<ShapeAnnotation>()
               {
                  new ShapeAnnotation(){ Content = "Process" }
               }
            },
            new Node()
            { 
               ID = "node3", OffsetX = 300, OffsetY = 300,
               Shape = new FlowShape() { Type = NodeShapes.Flow, Shape = NodeFlowShapes.Decision },
               Annotations = new DiagramObjectCollection<ShapeAnnotation>()
               {
                  new ShapeAnnotation(){ Content = "Decision?" }
               }
            },
            new Node()
            {
               ID = "node4", OffsetX = 300, OffsetY = 400,
               Shape = new FlowShape() { Type = NodeShapes.Flow, Shape = NodeFlowShapes.Terminator },
               Annotations = new DiagramObjectCollection<ShapeAnnotation>()
               {
                  new ShapeAnnotation(){ Content = "End" }
               }
            }
        };
        connectors = new DiagramObjectCollection<Connector>()
        {
            new Connector()
            {
                ID = "connector1",
                SourceID = "node1",
                TargetID = "node2",
            },
            new Connector()
            {
                ID = "connector2",
                SourceID = "node2",
                TargetID = "node3",
            },            
            new Connector()
            {
                ID = "connector3",
                SourceID = "node3",
                TargetID = "node4",
            },
        };
    }

    private void NodeCreating(IDiagramObject obj)
    {
        Node node = obj as Node;
        node.Style = new ShapeStyle() { Fill = "#E8F4FF", StrokeColor = "#357BD2" };
        node.Width = 140;
        node.Height = 50;
    }

    private void ConnectorCreating(IDiagramObject obj)
    {
        (obj as Connector).Type = ConnectorSegmentType.Orthogonal;
    }
}

{% endhighlight %}
{% endtabs %}

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/Blazor-UG-Examples/blob/master/Diagram/Server/Pages/GettingStarted/GettingStarted.razor)

In this example:

* [`OffsetX`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Node.html#Syncfusion_Blazor_Diagram_Node_OffsetX) and [`OffsetY`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Node.html#Syncfusion_Blazor_Diagram_Node_OffsetY) define the position of each node.
* [`Shape`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Node.html#Syncfusion_Blazor_Diagram_Node_Shape) defines the node shape configuration, and [`FlowShape.Shape`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.NodeFlowShapes.html#fields) specifies flowchart shapes such as **Terminator**, **Process**, or **Decision**.
* [`ShapeAnnotation`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.ShapeAnnotation.html) adds text inside each node using the [`Content`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Annotation.html#Syncfusion_Blazor_Diagram_Annotation_Content) property.
* [`SourceID`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Connector.html#Syncfusion_Blazor_Diagram_Connector_SourceID) and [`TargetID`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.Connector.html#Syncfusion_Blazor_Diagram_Connector_TargetID) connect one node to another.
* [`NodeCreating`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.SfDiagramComponent.html#Syncfusion_Blazor_Diagram_SfDiagramComponent_NodeCreating) applies common width, height, fill color, and stroke color to all nodes.
* [`ConnectorCreating`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Diagram.SfDiagramComponent.html#Syncfusion_Blazor_Diagram_SfDiagramComponent_ConnectorCreating) applies common connector settings, such as orthogonal routing.

### Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The [Blazor Diagram](https://www.syncfusion.com/diagram-sdk/blazor-diagram) component will render in your default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

The output will appear as follows:

![Getting Started in Blazor Diagram](images/blazor-diagram-getting-started.webp)
