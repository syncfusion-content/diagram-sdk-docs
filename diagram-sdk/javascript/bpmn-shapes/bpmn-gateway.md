---
layout: post
title: Bpmn Gateway in JavaScript Diagram control | Syncfusion®
description: Learn here all about Bpmn Gateway shapes in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bpmn Gateway 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---
# BPMN Gateway in JavaScript Diagram control

## Gateway

Gateway is used to control the flow of a process and it is represented as a diamond shape. To create a gateway, the shape property of the node should be set as [`gateway`](../../api/diagram/bpmnGateways) and the gateway property can be set with any of the appropriate gateways. The following code example illustrates how to create a BPMN Gateway.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs3" %}
{% endif %}

N> By default, the `gateway` will be set as **none**.

There are several types of gateways as tabulated:

| Shape | Image |
| -------- | -------- |
| Exclusive | ![Exclusive GateWay BPMN Shape](../images/Exclusive.png) |
| Parallel | ![Parallel GateWay BPMN Shape](../images/Parallel.png) |
| Inclusive | ![Inclusive GateWay BPMN Shape](../images/Inclusive.png) |
| Complex | ![Complex GateWay BPMN Shape](../images/Complex.png) |
| EventBased | ![EventBased GateWay BPMNShape](../images/EventBased.png) |
| ExclusiveEventBased | ![Exclusive EventBased GateWay BPMN Shape](../images/EEBased.png) |
| ParallelEventBased | ![Parallel EventBased GateWay BPMN Shape](../images/PEBased.png) |