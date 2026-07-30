---
layout: post
title: Bpmn Flows in TypeScript Diagram control | Syncfusion®
description: Learn here all about Bpmn Flow shapes in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bpmn Flows
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# BPMN flows in TypeScript Diagram control

[`BPMN Flows`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnFlow#BpmnFlow) are lines that connects BPMN flow objects.

* Association
* Sequence
* Message

## Association flow

[`BPMN Association`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnassociationflows) flow is used to link flow objects with its corresponding text or artifact. An association is represented as a dotted graphical line with opened arrow. The types of association are as follows:

* Directional
* BiDirectional
* Default

The `association` property allows you to define the type of association. The following code example illustrates how to create an association.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs18" %}



The following table demonstrates the visual representation of association flows.

| Association | Image |
| -------- | -------- |
| Default | ![Default BPMN FlowShapes](../images/bpmn-flow-defaultAssociation.png) |
| Directional | ![Directional BPMN FlowShapes](../images/Directional1.png) |
| BiDirectional | ![BiDirectional BPMN FlowShapes](../images/BiDirectional.png) |

N> The default value for the property `association` is **default**.

## Sequence flow

A [`sequence`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnsequenceflows) flow shows the order in which the activities are performed in a BPMN process and is represented by a solid graphical line. The types of sequence are as follows:

* Normal
* Conditional
* Default

The sequence property allows you to define the type of sequence. The following code example illustrates how to create a sequence flow.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs19" %}



The following table contains various representation of sequence flows.

| Sequence | Image |
| -------- | -------- |
| Default | ![Default Sequence BPMN Shpae](../images/Default2.png) |
| Conditional | ![Conditional Sequence BPMN Shpae](../images/Conditional.png) |
| Normal | ![Normal Sequence BPMN Shpae](../images/Normal.png) |

N> The default value for the property `sequence` is **normal**.

## Message flow

A [`message`](https://ej2.syncfusion.com/documentation/api/diagram/bpmnmessageflows) flow shows the flow of messages between two participants and is represented by dashed line. The types of message are as follows:

* InitiatingMessage
* NonInitiatingMessage
* Default

The message property allows you to define the type of message. The following code example illustrates how to define a message flow.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/bpmnShapes-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/bpmnShapes-cs20" %}



The following table contains various representation of message flows.

| Message | Image |
| -------- | -------- |
| Default | ![Default Message BPMN Shape](../images/bpmn-flow-defaultMessage.png) |
| InitiatingMessage | ![InitiatingMessage Message BPMN Shape](../images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessage Message BPMN Shape](../images/NIMessage.png) |

N> The default value for the property `message` is **default**.