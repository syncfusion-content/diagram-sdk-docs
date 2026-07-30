---
layout: post
title: Labels in TypeScript Diagram control | Syncfusion®
description: Learn here all about Labels in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Labels 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Labels in TypeScript Diagram control

[`Annotation`](https://ej2.syncfusion.com/documentation/api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](https://ej2.syncfusion.com/documentation/api/diagram/annotationModel#content) property of annotation defines the text to be displayed. The following code illustrates how to create a annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-cs1" %}

N> When setting a Annotation's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add annotations at runtime

Annotations can be added at runtime by using the diagram method [`addLabels`](https://ej2.syncfusion.com/documentation/api/diagram#addlabels). The following code illustrates how to add a annotation to a node.

The annotation's [`id`](https://ej2.syncfusion.com/documentation/api/diagram/annotationModel#id) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-cs2" %}

## Remove annotation

A collection of annotations can be removed from the node by using diagram method [`removeLabels`](https://ej2.syncfusion.com/documentation/api/diagram#removelabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-cs22" %}

## Update annotation at runtime

You can get the annotation directly from the node’s annotations collection property and you can change any annotation properties at runtime. To reflect the changes immediately, we need to call [`dataBind`](https://ej2.syncfusion.com/documentation/api/diagram#databind).

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-cs4" %}
