---
layout: post
title: BPMN Group in TypeScript Diagram | Syncfusion®
description: Visually group related BPMN elements in the Syncfusion® TypeScript Diagram using a labeled group shape that frames a part of the diagram.
platform: diagram-sdk
control: Bpmn Group 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---


# BPMN Group in TypeScript Diagram

A group is used to frame a part of the diagram, shows that elements included in it are logically belong together and does not have any other semantics other than organizing elements. To create a group, the shape property of the node should be set as **group**. The following code example illustrates how to create a BPMN group.

![BPMN Group Shape](../images/Group.png)



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs17" %}

