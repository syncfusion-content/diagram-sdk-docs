---
layout: post
title: Collaborative Editing in JavaScript Diagram | Syncfusion
description: Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Syncfusion JavaScript Diagram.
platform: diagram-sdk
control: Diagram
documentation: ug
publishingplatform: diagram-sdk
domainurl: https://help.syncfusion.com/diagram-sdk
---

# SignalR hub configuration in JavaScript application

## Overview

This guide explains how to configure SignalR hub in a JavaScript application for real-time collaborative diagram editing.

## How to create JavaScript sample

To create a JavaScript web application, set up a basic HTML file with the required Diagram scripts and references. Refer to the JavaScript Diagram [Getting Started](../../diagram/getting-started) documentation.

## How to add packages in the JavaScript application

{% if page.publishingplatform == "typescript" %}

Install the required npm packages in your JavaScript project:

```bash
npm install @microsoft/signalr
npm install @syncfusion/ej2-diagrams
```

Then import the modules in your TypeScript file:

```typescript
import * as signalR from '@microsoft/signalr';
import { Diagram } from '@syncfusion/ej2-diagrams';
```

{% elsif page.publishingplatform == "javascript" %}

Include the required libraries via CDN in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/@microsoft/signalr@latest/dist/browser/signalr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@syncfusion/ej2-diagrams/dist/ej2-diagrams.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@syncfusion/ej2-base/styles/material.css" rel="stylesheet" />
```

{% endif %}

## Configure SignalR service in JavaScript application

To enable real-time collaboration, configure SignalR `HubConnection` in your JavaScript code as follows:

* Initialize the `HubConnection` when the page loads and start it by calling `start()`.
* Connect to the `/diagramHub` endpoint using WebSocket transport and enable automatic reconnect to handle transient network issues.
* Join a SignalR group by calling `invoke('JoinDiagram', roomName)` after the connection is established. This ensures updates are shared only with users in the same diagram session.
* Refer to the JavaScript Diagram [Getting Started](../../diagram/getting-started) guide.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-signalr-config/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-signalr-config/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-signalr-config/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-signalr-config/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

>**Notes:**
>* Use a unique `roomName` per diagram (for example, a diagram ID) to isolate collaboration sessions.
>* If `WebSockets` may be unavailable, remove `skipNegotiation` so SignalR can fall back to Server-Sent Events (SSE) or Long Polling.
>* Consider handling connection state changes and securing the connection with authentication, if required.


## Sending and applying real-time diagram changes

* The JavaScript Diagram component triggers the [historyChange](../../api/diagram/index-default#historychange) event whenever the diagram is modified, such as when nodes or connectors are added, deleted, moved, resized, or edited.
* Use the [getDiagramUpdates](../../api/diagram/index-default#getdiagramupdates) method to generate a compact set of incremental updates (JSON-formatted changes) that represent only the changes, rather than the entire diagram.
* Send these changes to the hub method `BroadcastToOtherUsers`, which relays them to all users joined to the same SignalR group (room).
* Each remote user listens for the `ReceiveData` and applies the incoming changes with [setDiagramUpdates](../../api/diagram/index-default#setdiagramupdates), keeping their view synchronized without reloading the full diagram.
* Enable the [enableCollaborativeEditing](../../api/diagram/index-default#enablecollaborativeediting) property on the diagram to treat multi-step edits (like drag/resize sequences or batch changes) as a single operation. This property works in conjunction with the [DiagramCollaboration](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) and [UndoRedo](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) module to batch related changes efficiently. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-diagram-changes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-diagram-changes/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-diagram-changes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-diagram-changes/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Conflict policy (optimistic concurrency) in JavaScript application

To maintain consistency during collaborative editing, each user applies incoming changes using [setDiagramUpdates](../../api/diagram/index-default#setdiagramupdates). The JavaScript application tracks a `userVersion` that is synchronized with the `serverVersion` through version-tracking events. This version-based approach ensures conflicts are resolved without locking, allowing real-time responsiveness while preserving data integrity.

Add the following code in your JavaScript application:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-conflict-policy/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-conflict-policy/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-conflict-policy/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/collaborative-editing-conflict-policy/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}