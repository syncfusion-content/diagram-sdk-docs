---
layout: post
title: Context menu in JavaScript Diagram control | Syncfusion®
description: Learn here all about Context menu in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Context menu 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Context menu in JavaScript Diagram control

<!-- markdownlint-disable MD010 -->
In a graphical user interface (GUI), a context menu is a type of menu that appears when you perform a right-click operation. It offers users a set of actions relevant to the current context. In diagrams, context menus can be customized extensively. The Diagram control provides built-in context menu items while also allowing users to define custom menu items through the [`contextMenuSettings`](../api/diagram/contextmenusettingsmodel) property. This flexibility enables tailoring menus to specific application needs, including creating nested levels of menu items for more intricate user interactions.To ensure the context menu is rendered correctly with the appropriate styles, make sure to include the necessary CSS references from the Syncfusion<sup style="font-size:70%">&reg;</sup> `ej2-navigations` package. This can be done by adding the following `<link>` element to the `<head>` section of your HTML document.

`<link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-navigations/styles/tailwind3.css" rel="stylesheet">`

N> If you want to use contextMenu in diagram, you need to inject `DiagramContextMenu` Module in the diagram.

## Default context menu

Diagram provides some default context menu items to ease the execution of some frequently used commands. The [`show`](../api/diagram/contextMenuSettingsModel#show) property helps you to enable/disable the context menu. The following code illustrates how to enable the default context menu items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs1" %}
{% endif %}

## Custom context menu

Context menus can be customized for individual nodes by defining specific menu items beyond the default options. To add additional context menu items, you need to define and incorporate them into the [`items`](../api/diagram/contextmenuitemmodel#items) property of the context menu.

Each custom item can be defined with specific text and ID using the [`text`](../api/diagram/contextMenuItemModel#text) and [`ID`](../api/diagram/contextMenuItemModel#id) properties, respectively. Additionally, you can enhance visual cues by associating icons through the [`iconCss`](../api/diagram/contextMenuItemModel#iconcss) for enabling the use of font icons. The [`target`](../api/diagram/contextMenuItemModel#target) property specifies where each menu item should appear, and separators can be included using the [`separator`](../api/diagram/contextMenuItemModel#separator) property to visually group menu items. This flexibility allows for a tailored user interface that meets specific application needs efficiently. Nested menu items are defined within the [`items`](../api/diagram/contextMenuItemModel#items) property of a parent menu item.

### To Display custom menu alone

To display the custom context menu items alone, set the [`showCustomMenuOnly`](../api/diagram/contextMenuSettingsModel#showcustommenuonly) property to true.

### Context menu click

Upon clicking custom menu items, actions are handled using the [`contextMenuClick`](../api/diagram#contextmenuclick) event in the diagram. This event allows you to define actions based on which menu item is clicked. For instance, in the example below, the cloning of nodes and the change of fill color for nodes and annotations are efficiently managed and implemented through this event.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs2" %}
{% endif %}

### Context menu open

In certain situations, you may want to hide specific menu items based on the selected elements in the diagram. This can be achieved using the [`contextMenuOpen`](../api/diagram/diagramBeforeMenuOpenEventArgs) event. When the context menu is opened via right-click, the `contextMenuOpen` event is triggered. Within this event, you can create an array of menu items to hide for the selected element and pass it to the [`hiddenItems`](../api/diagram/diagramBeforeMenuOpenEventArgs#hiddenitems) property of the contextMenuOpen event argument. The following example demonstrates how to display different custom menu items for nodes, connectors, and the diagram based on the selection.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs6" %}
{% endif %}

### Context menu with Url

[`url`](../api/diagram/contextMenuItemModel#url) property of the menu item is used to set the url of any website which will be opened upon clicking on them. The following example shows the context menu with url for three websites.

{% if page.publishingplatform == "typescript" %}

```javascript

import { Diagram, DiagramContextMenu, NodeModel } from '@syncfusion/ej2-diagrams';

Diagram.Inject(DiagramContextMenu);

const nodes: NodeModel[] = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{
      id: 'label1', content: 'Rectangle1', offset: { x: 0.5, y: 0.5 },
      style: { color: 'white' }
    }]
  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{
      id: 'label2', content: 'Rectangle2',
      offset: { x: 0.5, y: 0.5 },
      style: { color: 'white' }
    }]
  },
];

const menuItems = [
  { text: 'Google.com', id: 'google', url: 'https://www.google.co.in/' },
  { text: 'w3schools.com', id: 'W3Schools', url: 'https://www.w3schools.com/' },
  { text: 'stackoverflow.com', id: 'stackoverflow', url: 'https://stackoverflow.com/' },
];

new Diagram({
  width: '100%',
  height: '350px',
  nodes,
  contextMenuSettings: {
    show: true,
    items: menuItems.map(item => ({ ...item, target: '.e-diagramcontent' })),
    showCustomMenuOnly: true,
  },
}, '#element');


```

{% elsif page.publishingplatform == "javascript" %}

```javascript

var nodes = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 100, offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{
      id: 'label1', content: 'Rectangle1',
      offset: { x: 0.5, y: 0.5 },
      style: { color: 'white' }
    }]
  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 300, offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{
      id: 'label2', content: 'Rectangle2', offset: { x: 0.5, y: 0.5 },
      style: { color: 'white' }
    }]
  }
];

var menuItems = [
  { text: 'Google.com', id: 'google', url: 'https://www.google.co.in/' },
  { text: 'w3schools.com', id: 'W3Schools', url: 'https://www.w3schools.com/' },
  { text: 'stackoverflow.com', id: 'stackoverflow', url: 'https://stackoverflow.com/' }
];

new ej.diagrams.Diagram({
  width: '100%',
  height: '350px',
  nodes,
  contextMenuSettings: {
    show: true,
    items: menuItems.map(item => ({ ...item, target: '.e-diagramcontent' })),
    showCustomMenuOnly: true
  }
}, '#element');

```

{% endif %}

## Template Support for Context menu

Diagram provides template support for the context menu. The template for the context menu items can be customized before rendering by using the [`contextMenuBeforeItemRender`](../api/diagram#contextmenubeforeitemrender) event, which triggers while rendering each menu item.

In the following example, menu items are rendered with shortcut key codes for specific actions in the context menu using a template. The key codes for cut, copy, and paste actions are displayed at the right corner of the menu items by adding a span element in the `contextMenuBeforeItemRender` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-cs3" %}
{% endif %}


## Context menu events

|Event|Description|
|----|----|
|[`contextMenuBeforeItemRender`](../api/diagram#contextmenubeforeitemrender)|Triggers while initializing each menu item.|
|[`contextMenuOpen`](../api/diagram#contextmenuopen)|Triggers upon right-click before opening the context menu.|
|[`contextMenuClick`](../api/diagram#contextmenuclick)|Triggers when a menu item is clicked.|

The following example shows how to get these events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-events/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-events" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/contextmenu-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/contextmenu-events" %}
{% endif %}


## See Also

* [How to open context menu on left click](https://support.syncfusion.com/kb/article/15100/how-to-perform-clipboard-operation-with-custom-context-menu-on-left-click-using-javascript-diagram)