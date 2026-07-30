---
layout: post
title: Bpmn Group in Vue Diagram component | Syncfusion®
description: Learn here all about Bpmn Group in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Bpmn Group
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---


# BPMN Group in Vue Diagram Component

A group is used to frame a part of the [Vue Diagram](https://www.syncfusion.com/vue-components/vue-diagram), shows that elements included in it are logically belong together and does not have any other semantics other than organizing elements. To create a group, the shape property of the node should be set as **group**. The following code example illustrates how to create a BPMN group.

![BPMN Group Shape](../images/Group.png)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/bpmn-shapes/Group-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/bpmn-shapes/Group-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/vue/bpmn-shapes/Group-cs1" %}