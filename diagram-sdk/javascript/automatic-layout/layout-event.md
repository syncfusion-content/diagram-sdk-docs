---
layout: post
title: Layout events in JavaScript Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Layout events
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Layout events in JavaScript Diagram control

## DataLoaded event

The [`dataLoaded`](../../api/diagram/idataloadedeventargs) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

```javascript

var diagram = new ej.diagrams.Diagram({
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

The [`expandStateChange`](../../api/diagram/iExpandStateChangeEventArgs) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-expState/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-expState/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-expState" %}

## Animation complete event

The [`animationComplete`](../../api/diagram#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-animComplete/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-animComplete/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-animComplete" %}

## Layout updated event

The [`layoutUpdated`](https://ej2.syncfusion.com/javascript/documentation/api/diagram#layoutupdated) event is triggered when the layout rendering process in the diagram either starts or completes. This event allows users to track the state of the layout rendering process.

The following code example explains the layout updated event in the diagram.

```javascript

var diagram = new ej.diagrams.Diagram({
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
  layoutUpdated: function (args) {
      if (args.state == 'Started') {
        console.log('layout started rendering');
      }
  }
});
diagram.appendTo('#element');
```