---
layout: post
title: Load JSON Data TypeScript Diagram control | Syncfusion®
description: Learn here about Ej1 api migration in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: EJ1 Migration
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# How to load EJ1 diagram in EJ2 diagram

To load EJ1 JSON data in an EJ2 diagram, follow these steps.

1.	Import and inject the EJ1SerializationModule as shown in the following code example.

```typescript

import { Diagram } from '@syncfusion/ej2-diagrams';
import { EJ1SerializationModule } from '@syncfusion/ej2-diagrams';
Diagram.Inject(EJ1SerializationModule);

```

2.	Load the EJ1 JSON data using the diagram loadDiagram method and set the second parameter to true.

```typescript

var ej1Data = {"JSONData"};  // Replace JSONData with your EJ1 JSON data
//Load the EJ1 JSON and pass boolean value as true
var diagram = document.getElementById('diagram').ej2_instances[0];
diagram.loadDiagram(ej1Data, true);

```