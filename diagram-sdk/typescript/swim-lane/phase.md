---
layout: post
title: Phase in TypeScript Diagram control | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Phase 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

## Phase

 Phase are the subprocess which will split each lanes as horizontally or vertically based on the swimlane orientation. We can add multiple number of [`Phase`](https://ej2.syncfusion.com/documentation/api/diagram/phaseModel) to swimlane.

The following code example illustrates how to create phase.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/swimlane-cs12" %}



### Dynamically add/remove phase to Lane

 You can add the a phase at runtime by using [`addPhases`](https://ej2.syncfusion.com/documentation/api/diagram#addphases) method and remove phase by using [`removePhase`](https://ej2.syncfusion.com/documentation/api/diagram#removephase) method. The following code example illustrates how to add and remove phase at run time.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/swimlane-cs13" %}



### Customizing phase

* The length of region can be set by using the  [`offset`](https://ej2.syncfusion.com/documentation/api/diagram/phaseModel#offset) property of the phase.
* Every phase region can be textually described with the [`header`](https://ej2.syncfusion.com/documentation/api/diagram/headerModel) property of the phase.
* You can increase the height of phase by using [`phaseSize`](https://ej2.syncfusion.com/documentation/api/diagram/swimLaneModel#phaseSize) property of swimlane.
* We can provide additional information to the phase by using the [`addInfo`](https://ej2.syncfusion.com/documentation/api/diagram/phasemodel#addinfo) property of the phase.

The following code example illustrates how to customize the phase in swimlane.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/swimlane-cs14" %}



#### Dynamic customization of phase

 You can customize the phase style and text properties dynamically. The following code illustrates how to dynamically customize the phase.

 The following code example illustrates how to customize the phase at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-phaseDynamic/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/swimlane-phaseDynamic/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/swimlane-phaseDynamic" %}



### Phase interaction

#### Resizing

* The phase can be resized by using its selector.
* You must select the phase header to enable the phase selection.
* Once the phase can be resized, the lane size will be updated automatically.

#### Resizing helper

* The special resize selector will be used to resize the phase.
* The resize cursor will be available on the left and bottom direction for horizontal, and the top and bottom direction for vertical swimlane.

#### Phase header editing

Diagram provides the support to edit phase headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that. The following image illustrates how to edit the swimlane header.The following image illustrates how to edit the phase header. ![Phase Header Editing](../images/phase-header-edit.gif)
