---
layout: post
title: BPMN Group in Angular Diagram component | Syncfusion®
description: Learn how to create and customize BPMN group shapes for organizing related elements in Syncfusion® Angular Diagram component.
platform: diagram-sdk
control: Bpmn Events 
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# BPMN Group in Angular Diagram component

## Overview

A BPMN group is a visual mechanism used to organize and frame related elements within a business process diagram. Groups indicate that the enclosed elements logically belong together while providing no additional semantic meaning beyond visual organization. Unlike other BPMN constructs, groups serve purely as organizational containers to improve diagram readability and structure.

## Creating a BPMN Group

To create a BPMN group, set the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/diagram/bpmnShapes) property of the node to **group**. The group appears as a rounded rectangle with dashed borders that encompasses the grouped elements.

![BPMN Group Shape](../images/Group.png)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram-sdk/angular/bpmnShapes/group-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram-sdk/angular/bpmnShapes/group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/diagram-sdk/angular/bpmnShapes/group-cs1" %}
