---
layout: post
title: BPMN Group in React Diagram | Syncfusion®
description: Visually group related BPMN elements in the React Diagram with a Group shape that uses dashed borders to organize without changing process semantics.
control: Bpmn Group 
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# BPMN Group in React Diagram

## Overview

A BPMN group is a visual mechanism used to organize and frame related elements within a business process diagram. Groups indicate that the enclosed elements logically belong together while providing no additional semantic meaning beyond visual organization. Unlike other BPMN constructs, groups serve purely as organizational containers to improve diagram readability and structure.

## Creating a BPMN Group

To create a BPMN group, set the [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnShapes) property of the node to **group**. By default, the group appears as a rounded rectangle with dashed borders that encompasses the grouped elements.

![BPMN Group Shape](images/Group.png)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/bpmnShapes/es5Group-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/bpmnShapes/es5Group-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/bpmnShapes/es5Group-cs1" %}

## See Also

* [BPMN Shapes](./bpmn-shapes)
* [BPMN Events](./bpmn-events)
* [BPMN Activities](./bpmn-activities)
* [BPMN Flows](./bpmn-flows)
