---
layout: post
title: Bpmn Expanded subProcess in JavaScript Diagram control | Syncfusion®
description: Learn here all about Bpmn Expanded SubProcess shapes in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bpmn Expanded subProcess 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---


# Expanded SubProcess in TypeScript Diagram control
An expanded subProcess can contain certain child processess within it.

### Create BPMN Expanded subProcess

To create expanded subProcess, set shape as [`activity`](../../api/diagram/bpmnActivityModel)  and [`collapsed`](../../api/diagram/bpmnSubProcessModel#collapsed) as false. Enable [`AllowDrop`](../../api/diagram/nodeConstraints) constraint for node to allow child to drop inside the expanded subProcess.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs21" %}
{% endif %}

### Add BPMN nodes into ExpandedSubProcess

[`Processes`](../../api/diagram/bpmnSubProcessModel#processes) is an array collection that defines the children values for BPMN subprocess.

Please refer the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs22" %}
{% endif %}

### Add BPMN nodes into ExpandedSubProcess at runtime

Drag and drop the BPMN nodes to the BPMN ExpandedSubProcess.
While resizing or dragging the child element, if the child element bounds are within the ExpandedSubProcess bounds, the ExpandedSubProcess size will be updated along with that.

The following image shows how to add BPMNNode into the BPMN ExpandedSubProcess at runtime.

![Expanded subProcess BPMN Shape](../images/expanded-Gif.gif)

#### Add/remove Process Programmatically

The process for the expanded sub-process can be added at runtime using the [`addProcess`](../../api/diagram#addprocess) method and removed at runtime using the [`removeProcess`](../../api/diagram#removeprocess) method. The following example shows how to add and remove a process at runtime.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-addProcess" %}
{% endif %}