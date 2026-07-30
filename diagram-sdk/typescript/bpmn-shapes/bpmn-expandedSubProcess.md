---
layout: post
title: Bpmn Expanded subProcess in TypeScript Diagram control | Syncfusion®
description: Learn here all about Bpmn Expanded SubProcess shapes in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bpmn Expanded subProcess 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---


# Expanded SubProcess in TypeScript Diagram control
An expanded subProcess can contain certain child processess within it.

### Create BPMN Expanded subProcess

To create expanded subProcess, set shape as [`activity`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnActivityModel)  and [`collapsed`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnSubProcessModel#collapsed) as false. Enable [`AllowDrop`](https://ej2.syncfusion.com/documentation/api/diagram/nodeConstraints) constraint for node to allow child to drop inside the expanded subProcess.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs21" %}



### Add BPMN nodes into ExpandedSubProcess

[`Processes`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnSubProcessModel#processes) is an array collection that defines the children values for BPMN subprocess.

Please refer the following code example.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs22" %}



### Add BPMN nodes into ExpandedSubProcess at runtime

Drag and drop the BPMN nodes to the BPMN ExpandedSubProcess.
While resizing or dragging the child element, if the child element bounds are within the ExpandedSubProcess bounds, the ExpandedSubProcess size will be updated along with that.

The following image shows how to add BPMNNode into the BPMN ExpandedSubProcess at runtime.

![Expanded subProcess BPMN Shape](../images/expanded-Gif.gif)

#### Add/remove Process Programmatically

The process for the expanded sub-process can be added at runtime using the [`addProcess`](https://ej2.syncfusion.com/documentation/api/diagram#addprocess) method and removed at runtime using the [`removeProcess`](https://ej2.syncfusion.com/documentation/api/diagram#removeprocess) method. The following example shows how to add and remove a process at runtime.




 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-addProcess/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-addProcess/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-addProcess" %}

