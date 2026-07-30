---
layout: post
title: Collaborative Editing in TypeScript Diagram | Syncfusion
description: Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Syncfusion TypeScript Diagram.
platform: diagram-sdk
control: Diagram
documentation: ug
publishingplatform: diagram-sdk
domainurl: https://help.syncfusion.com/diagram-sdk
---

# SignalR hub configuration in TypeScript application

## Overview

This guide explains how to configure SignalR hub in a TypeScript application for real-time collaborative diagram editing.

## How to create TypeScript sample

To create a TypeScript web application, set up a basic HTML file with the required Diagram scripts and references. Refer to the TypeScript Diagram [Getting Started](../../typescript/getting-started) documentation.

## How to add packages in the TypeScript application



Install the required npm packages in your TypeScript project:

```bash
npm install @microsoft/signalr
npm install @syncfusion/ej2-diagrams
```

Then import the modules in your TypeScript file:

```typescript
import * as signalR from '@microsoft/signalr';
import { Diagram } from '@syncfusion/ej2-diagrams';
```



## Configure SignalR service in TypeScript application

To enable real-time collaboration, configure SignalR `HubConnection` in your TypeScript code as follows:

* Initialize the `HubConnection` when the page loads and start it by calling `start()`.
* Connect to the `/diagramHub` endpoint using WebSocket transport and enable automatic reconnect to handle transient network issues.
* Join a SignalR group by calling `invoke('JoinDiagram', roomName)` after the connection is established. This ensures updates are shared only with users in the same diagram session.
* Refer to the TypeScript Diagram [Getting Started](../../typescript/getting-started) guide.



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-signalr-config/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-signalr-config/index.html %}
{% endhighlight %}
{% endtabs %}



>**Notes:**
>* Use a unique `roomName` per diagram (for example, a diagram ID) to isolate collaboration sessions.
>* If `WebSockets` may be unavailable, remove `skipNegotiation` so SignalR can fall back to Server-Sent Events (SSE) or Long Polling.
>* Consider handling connection state changes and securing the connection with authentication, if required.


## Sending and applying real-time diagram changes

* The TypeScript Diagram component triggers the [historyChange](https://ej2.syncfusion.com/documentation/api/diagram/index-default#historychange) event whenever the diagram is modified, such as when nodes or connectors are added, deleted, moved, resized, or edited.
* Use the [getDiagramUpdates](https://ej2.syncfusion.com/documentation/api/diagram/index-default#getdiagramupdates) method to generate a compact set of incremental updates (JSON-formatted changes) that represent only the changes, rather than the entire diagram.
* Send these changes to the hub method `BroadcastToOtherUsers`, which relays them to all users joined to the same SignalR group (room).
* Each remote user listens for the `ReceiveData` and applies the incoming changes with [setDiagramUpdates](https://ej2.syncfusion.com/documentation/api/diagram/index-default#setdiagramupdates), keeping their view synchronized without reloading the full diagram.
* Enable the [enableCollaborativeEditing](https://ej2.syncfusion.com/documentation/api/diagram/index-default#enablecollaborativeediting) property on the diagram to treat multi-step edits (like drag/resize sequences or batch changes) as a single operation. This property works in conjunction with the [DiagramCollaboration](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) and [UndoRedo](https://ej2.syncfusion.com/documentation/diagram/getting-started#module-injection) module to batch related changes efficiently. 



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-diagram-changes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-diagram-changes/index.html %}
{% endhighlight %}
{% endtabs %}



## Conflict policy (optimistic concurrency) in TypeScript application

To maintain consistency during collaborative editing, each user applies incoming changes using [setDiagramUpdates](https://ej2.syncfusion.com/documentation/api/diagram/index-default#setdiagramupdates). The TypeScript application tracks a `userVersion` that is synchronized with the `serverVersion` through version-tracking events. This version-based approach ensures conflicts are resolved without locking, allowing real-time responsiveness while preserving data integrity.

Add the following code in your TypeScript application:



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-conflict-policy/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/collaborative-editing-conflict-policy/index.html %}
{% endhighlight %}
{% endtabs %}

