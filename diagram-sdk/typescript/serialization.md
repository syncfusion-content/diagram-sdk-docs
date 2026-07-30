---
layout: post
title: Serialization in TypeScript Diagram control | Syncfusion®
description: Learn here all about Serialization in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Serialization 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Serialization in TypeScript Diagram control

**Serialization** is the process of converting the state of the diagram into a format that can be saved and later restored. This ensures that the diagram's current state, including its nodes, connectors, and configurations, can be persisted across sessions.

Serialization involves saving the diagram's state as a JSON string, which can then be stored in a database, file, or other storage medium. When needed, the serialized string can be deserialized to recreate the diagram in its previous state.

## Save

The diagram method [`saveDiagram`](https://ej2.syncfusion.com/documentation/api/diagram#savediagram), helps to serialize the diagram as a string. This method captures the entire diagram's configuration and content, converting it into a string representation.

The following code illustrates how to save the diagram:

```ts
//returns serialized string of the Diagram
var savedData = diagram.saveDiagram();

```

This JSON string can be stored in local storage for future use. The following code illustrates how to save the serialized string into local storage and how to retrieve it:

```ts
// Store the serialized string in local storage
localStorage.setItem('fileName', savedData);

// Retrieve the saved string from local storage
savedData = localStorage.getItem('fileName');

```

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print) and [`Export`](./export) section.

## Load

The diagram can be loaded from serialized string data using the [`loadDiagram`](https://ej2.syncfusion.com/documentation/api/diagram#loaddiagram) method. The saved string should be passed as the parameter of the loadDiagram method. The following code illustrates how to load the diagram from serialized string data:

```ts
/*
 * Loads the diagram from saved JSON data.
 * parameter 1 - The string representing the diagram model JSON to be loaded.
 * parameter 2 - Whether it is ej1 data or not (optional)
 */
diagram.loadDiagram(savedData);

```

N> Before loading a new diagram, existing diagram is cleared.

## Prevent Default Values

The [`preventDefaults`](https://ej2.syncfusion.com/documentation/api/diagram/serializationsettingsmodel#preventdefaults) property of [`serializationSettings`](https://ej2.syncfusion.com/documentation/api/diagram/serializationSettingsModel) is used to simplify the saved JSON object by excluding default properties that are inherent to the diagram. This helps reduce the size of the serialized data and improves efficiency when saving and loading diagrams.

By enabling preventDefaults, only properties that you set in diagram are included in the serialized JSON object. This optimization is useful for scenarios where minimizing data size is crucial, such as in applications with large diagrams or when optimizing network transfers.

The following code illustrates how to enable the preventDefaults property to simplify the JSON object:


```ts
let diagram = new Diagram({
 serializationSettings: { preventDefaults: true },
});

```

## Detect unsaved changes

The [isModified](https://ej2.syncfusion.com/documentation/api/diagram#ismodified) property indicates whether the diagram has unsaved changes. It becomes **true** when the diagram is changed, such as when nodes, connectors, or diagram properties are updated, or when undo and redo actions are performed.

For example, this property can be used to show a save indicator or display a warning message before closing or navigating away from a diagram with unsaved changes.

```ts
// Check whether the diagram has unsaved changes.
if (diagram.isModified) {
    const confirmed = confirm('There are unsaved changes. Discard them?');

    if (!confirmed) {
        return;
    }
}
```

N> Transient interactions such as zooming, panning, or selecting elements do not affect the `isModified` state.

## Save and load diagram using uploader control

The JSON files can be uploaded using the uploader component, where they are parsed to extract the JSON data they contain. To achieve this, configure the uploader component with the saveUrl property to receive uploaded files and store them on the server. Similarly, use the removeUrl property to handle file removal operations on the server.

When a JSON file is uploaded, it undergoes parsing to extract its JSON data. This data is then loaded into the diagram using the [`loadDiagram`](https://ej2.syncfusion.com/documentation/api/diagram#loaddiagram) method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/serialisation-cs1" %}


## Importing and Exporting Diagrams using Mermaid Syntax

The [`Diagram`](https://ej2.syncfusion.com/documentation/api/diagram) supports saving diagrams in Mermaid syntax format. Mermaid is a Markdown-inspired syntax that automatically generates diagrams. With this functionality, you can easily create mind maps, flowcharts, and UML sequence diagrams from Mermaid syntax data, simplifying the visualization of complex ideas and processes without manual drawing. Additionally, you can export your mind maps, flowcharts, and UML sequence diagrams to Mermaid syntax, allowing for easy sharing, editing, and use across different platforms.

### Save diagram as Mermaid syntax

 The `saveDiagramAsMermaid` method serializes the diagram into a Mermaid-compatible string format. This method is specifically designed for diagrams that utilize Flowchart and Mind map layouts. The following code illustrates how to save the diagram in Mermaid string format.

 ```javascript
//returns the serialized Mermaid string of the Diagram
let data = diagram.saveDiagramAsMermaid();

```

### Load diagram from Mermaid syntax

You can load a [diagram](https://ej2.syncfusion.com/documentation/api/diagram) from the serialized Mermaid syntax data using the `loadDiagramFromMermaid` method. The following code illustrates how to load a diagram from a Mermaid string data.

#### Load flowchart layout

The following example shows how to load flowchart diagram from mermaid syntax.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/serialisation-cs2" %}

#### Load mindmap layout

The following example shows how to load mind map diagram from mermaid syntax.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/serialisation-cs3" %}

#### Load UML Sequence diagram

The following example shows how to load UML Sequence diagram from mermaid syntax.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/serialisation-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/serialisation-cs4" %}

N> Mermaid syntax-based serialization and deserialization is supported only for Flowchart layout, Mind map layout, and UML Sequence Diagram. Ensure that your Mermaid data aligns with one of these supported layouts to enable successful diagram loading.