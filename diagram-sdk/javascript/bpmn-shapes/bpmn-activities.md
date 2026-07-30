---
layout: post
title: Bpmn Activity in JavaScript Diagram control | Syncfusion®
description: Learn here all about Bpmn Activity shapes in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bpmn Activity 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---
# BPMN activity in JavaScript Diagram control

## Activity

The [`activity`](../../api/diagram/bpmnActivity#BpmnActivity) is the task that is performed in a business process. It is represented by a rounded rectangle.

There are two types of activities. They are listed as follows:

* Task: Occurs within a process and it is not broken down to a finer level of detail.
* Subprocess: Occurs within a process and it is broken down to a finer level of detail.

To create a BPMN activity, set the shape as **activity**. You also need to set the type of the BPMN activity by using the activity property of the node. By default, the type of the activity is set as **task**. The following code example illustrates how to create an activity.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs4" %}
{% endif %}

The different activities of BPMN process are listed as follows.

### Tasks

The [`task`](../../api/diagram/bpmnTask#BpmnTask) property of the [`bpmn activity`](../../api/diagram/bpmnactivitymodel) allows you to define the type of task such as sending, receiving, user based task, etc. By default, the type property of task is set as **none**. The following code illustrates how to create different types of
BPMN tasks.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs5" %}
{% endif %}

The various types of BPMN tasks are tabulated as follows.

| Shape | Image |
| -------- | -------- |
| Service | ![Service Task BPMN Shape](../images/Service.png) |
| Send | ![Send Task BPMN Shape](../images/Send.png) |
| Receive | ![Receive Task BPMN Shape](../images/Receive.png) |
| Instantiating Receive | ![Instantiating Receive Task BPMN Shape](../images/InsService.png) |
| Manual |![Manual Task BPMN Shape](../images/Manual.png) |
| Business Rule | ![Business Rule  Task BPMN Shape](../images/Bussiness.png) |
| User | ![User Task BPMN Shape](../images/User.png) |
| Script | ![Script Task BPMN Shape](../images/Script.png) |

### Collapsed Subprocess

A [`Collapsed Sub-Process`](../../api/diagram/bpmnSubProcessModel#collapsed) is a group of tasks, which is used to hide or reveal details of additional levels. The following code explains how to create a Collapsed Sub-Process.
{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs6" %}
{% endif %}

#### Loop

[`Loop`](../../api/diagram/bpmnTask#loop) is a task that is internally being looped. The loop property of `bpmn activity` allows you to define the type of loop. The default value for `loop` is **none**. You can define the loop property in subprocess BPMN shape as shown in the following code.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs9" %}
{% endif %}

The following table contains various types of BPMN loops.

| Loops | Task | Subprocess |
| -------- | -------- | --------|
| Standard | ![Standard Task BPMN Shape](../images/Standard1.png)  | ![Standard Subprocess BPMN Shape](../images/Standard2.png) |
| SequenceMultiInstance | ![Sequence MultiInstance Task BPMN Shape](../images/Sequence1.png) |  ![SequenceMultiInstance Subprocess BPMN Shape](../images/Sequence2.png)|
| ParallelMultiInstance | ![ParallelMultiInstance Task BPMNShape](../images/PMultiInstance1.png) | ![ParallelMultiInstance Subprocess BPMN Shape](../images/PMultiInstance2.png) |

#### Compensation

[`Compensation`](../../api/diagram/bpmnTask#compensation-boolean) is triggered, when operation is partially failed and enabled it with the compensation property of the `bpmn activity`.
By default, the `compensation` is set to false.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs10" %}
{% endif %}

#### Call

A [`call`](../../api/diagram/bpmnTask#call-boolean) activity is a global subprocess that is reused at various points of the business flow and set it with the call property of the task.
By default, the call property is false.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs11" %}
{% endif %}

N> This Property is only applicable for task Type activity. 

#### Ad-hoc

An adhoc subprocess is a group of tasks that are executed in any order or skipped in order to fulfill the end condition and set it with the [`adhoc`](../../api/diagram/bpmnSubProcess#adhoc-boolean) property of subprocess. By default, the adhoc property is false.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs12" %}
{% endif %}


#### Boundary

Boundary represents the type of task that is being processed. The [`boundary`](../../api/diagram/bpmnSubProcess#boundary-bpmnboundary) property of subprocess allows you to define the type of boundary. By default, it is set as **default**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs13" %}
{% endif %}

The following table contains various types of BPMN boundaries.

| Boundary | Image |
| -------- | -------- |
| Call | ![Call Boundary BPMN Shape](../images/Call.png) |
| Event | ![Event Boundary BPMN Shape](../images/Eventtask.png) |
| Default | ![Default Boundary BPMN Shape](../images/DefaultBoundary.png) |


#### SubProcess types

The different types of subprocess are as follows:

    * Event subprocess
    * Transaction

##### Event subprocess

A subprocess is defined as an event subprocess, when it is triggered by an event. An event subprocess is placed within another subprocess which is not part of the normal flow of its parent process. You can set event to a subprocess with the [`event`](../../api/diagram/bpmnEvent##BpmnEvent) and [`trigger`](../../api/diagram/bpmnEvent#trigger) property of the subprocess. The [`type`](../../api/diagram/bpmnSubProcess#type) property of subprocess allows you to define the type of subprocess whether it should be event subprocess or transaction subprocess.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs7" %}
{% endif %}

##### Transaction subprocess

* [`transaction`](../../api/diagram/bpmnSubProcess#transaction) is a set of activities that logically belong together, in which all contained activities must complete their parts of the transaction; otherwise the process is undone. The execution result of a transaction is one of Successful Completion, Unsuccessful Completion (Cancel), and Hazard (Exception). The [`events`](../../api/diagram/bpmnSubProcess#events) property of subprocess allows to represent these results as an event attached to the subprocess.

* The event object allows you to define the type of event by which the subprocess will be triggered. The name of the event can be defined to identify the event at runtime.

* The event’s offset property is used to set the fraction/ratio (relative to parent) that defines the position of the event shape.

* The trigger property defines the type of the event trigger.

* You can also use define ports and labels to subprocess events by using event’s ports and labels properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/bpmnShapes-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/bpmnShapes-cs8" %}
{% endif %}


