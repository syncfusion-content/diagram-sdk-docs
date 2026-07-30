---
layout: post
title: Layout events in TypeScript Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Layout events
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Layout events in TypeScript Diagram control

## DataLoaded event

The [`dataLoaded`](https://ej2.syncfusion.com/documentation/api/diagram/idataloadedeventargs) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

```javascript

// Initializes the diagram
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '550px',
  layout: {
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  },
  dataLoaded: function (args) {
    //we can get diagram instance in args.
    console.log(args);
  },
});

diagram.appendTo('#element');

```

## ExpandStateChange event

The [`expandStateChange`](https://ej2.syncfusion.com/documentation/api/diagram/iExpandStateChangeEventArgs) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/AutomaticLayout-expState/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/AutomaticLayout-expState/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/AutomaticLayout-expState" %}

## Animation complete event

The [`animationComplete`](https://ej2.syncfusion.com/documentation/api/diagram#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/AutomaticLayout-animComplete/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/AutomaticLayout-animComplete/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/AutomaticLayout-animComplete" %}

## Layout updated event

The [`layoutUpdated`](https://ej2.syncfusion.com/documentation/api/diagram#layoutupdated) event is triggered when the layout rendering process in the diagram either starts or completes. This event allows users to track the state of the layout rendering process.

The following code example explains the layout updated event in the diagram.

```ts

// Initializes the diagram
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '550px',
  layout: {
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  },
  layoutUpdated: function (args: ILayoutUpdatedEventArgs) {
      if (args.state == 'Started') {
        console.log('layout started rendering');
      }
  }
});

diagram.appendTo('#element');
```
