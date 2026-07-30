---
layout: post
title: UmlSequenceDiagram in JavaScript Diagram control | Syncfusion®
description: Learn here all about UmlSequenceDiagram in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: UmlSequenceDiagram 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# UML Sequence Diagram Model in JavaScript Diagram Control

A UML sequence diagram is an interaction diagram that demonstrates how objects interact with each other and the order of these interactions. The Syncfusion® diagram control provides comprehensive support for creating and visualizing UML sequence diagrams through the [UmlSequenceDiagramModel](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceDiagramModel). To enable this functionality, assign the `UmlSequenceDiagramModel` to the [model](https://ej2.syncfusion.com/documentation/api/diagram#model) property of the diagram control.

## UML Sequence Diagram Elements

A sequence diagram includes several key elements, such as participants, messages, activation boxes, and fragments. The sections below demonstrate how to define and configure these components using the Diagram control.

### Participants

[UmlSequenceParticipantModel](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceParticipantModel) represents an entity that interacts with other entities in a sequence diagram. Participants appear at the top of the diagram, with lifelines extending vertically downward.

#### UmlSequenceParticipantModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the participant. |
| content | string | The display text of the participant. |
| showDestructionMarker | boolean | Indicates whether a destruction marker (X) is shown at the end of the participant lifeline. |
| activationBoxes | UmlSequenceActivationBoxModel[] | A collection of activation boxes associated with the participant. |
| stereotype | UmlSequenceParticipantStereotype | The visual stereotype used to render the participant header, such as Actor, Boundary, Control, Entity, or Database. |

#### Participant Stereotypes

The [UmlSequenceParticipantStereotype](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceParticipantStereotype) enum defines the visual style of a participant. A stereotype helps show the role of a participant in the interaction.

| Stereotype | Description | Shape |
|---|---|---|
| Default | Standard object participant displayed as a labeled rectangle. | ![Default stereotype](./images/umlSequenceDiagram-images/Default.png) |
| Actor | External person or system that interacts with the process. | ![Actor stereotype](./images/umlSequenceDiagram-images/Actor.png) |
| Boundary | Interface or entry point, such as a UI, API gateway, or external system. | ![Boundary stereotype](./images/umlSequenceDiagram-images/Boundary.png) |
| Control | Object that manages the flow, such as a controller or coordinator. | ![Control stereotype](./images/umlSequenceDiagram-images/Control.png) |
| Entity | Object that represents data, domain objects, or stored information. | ![Entity stereotype](./images/umlSequenceDiagram-images/Entity.png) |
| Database | Database or persistent storage system, displayed using a cylindrical shape. | ![Database stereotype](./images/umlSequenceDiagram-images/Database.png) |


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-1" %}

{% endif %}

### Messages

[UmlSequenceMessageModel](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceMessageModel) represents communication between participants and are displayed as arrows connecting lifelines.

#### Types of Messages

| Message Type | Description | Example |
|---|---|---|
| Synchronous | The sender waits for a response | ![Synchronous Message](./images/umlSequenceDiagram-images/Synchronous.png) |
| Asynchronous | The sender continues without waiting | ![Asynchronous Message](./images/umlSequenceDiagram-images/Asynchronous.png) |
| Reply | A response to a previous message | ![Reply Message](./images/umlSequenceDiagram-images/Reply.png) |
| Create | Creates a new participant | ![Create Message](./images/umlSequenceDiagram-images/Create.png) |
| Delete | Terminates a participant | ![Delete Message](./images/umlSequenceDiagram-images/Delete.png) |
| Self | A message from a participant to itself | ![Self Message](./images/umlSequenceDiagram-images/Self.png) |

#### UmlSequenceMessageModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the message |
| content | string | The display text for the message |
| fromParticipantID | string \| number | ID of the participant sending the message |
| toParticipantID | string \| number | ID of the participant receiving the message |
| type | UmlSequenceMessageType | Type of the message (Synchronous, Asynchronous, Reply, Create, Delete, Self) |

The following code example illustrates how to create messages:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-2" %}

{% endif %}

### Activation Boxes

[UmlSequenceActivationBoxModel](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceActivationBoxModel) represents periods when a participant is active and processing a message. They appear as thin rectangles on participant lifelines.

#### UmlSequenceActivationBoxModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the activation box |
| startMessageID | string \| number | ID of the message that initiates the activation |
| endMessageID | string \| number | ID of the message that terminates the activation |

The following code example illustrates how to create activation boxes:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-3" %}

{% endif %}

### Fragments

[UmlSequenceFragmentModel](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceFragmentModel) groups a set of messages based on specific conditions in a sequence diagram. They are displayed as rectangular enclosures that visually separate conditional or looping interactions.

#### Types of Fragments

The [UmlSequenceFragmentType](https://ej2.syncfusion.com/documentation/api/diagram/umlSequenceFragmentType) enum defines the following fragment types:

| Fragment Type  | Description  | Example  |  
|---------------|-------------|--------|  
| Optional  | Represents a sequence that is executed only if a specified condition is met; otherwise, it is skipped. | ![Optional Fragment](./images/umlSequenceDiagram-images/OptFragment.png) |  
| Alternative | Represents multiple conditional paths (if-else structure), where only one path executes based on the condition. | ![Alternative Fragment](./images/umlSequenceDiagram-images/AltFragment.png) |  
| Loop | Represents a repeating sequence of interactions that continues based on a loop condition. | ![Loop Fragment](./images/umlSequenceDiagram-images/LoopFragment.png) |  

#### UmlSequenceFragmentModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the fragment |
| type | UmlSequenceFragmentType | Type of the fragment (Optional, Loop, Alternative) |
| conditions | UmlSequenceFragmentConditionModel[] | Collection of conditions for the fragment |

#### UmlSequenceFragmentConditionModel Properties

| Property | Type | Description |
|---|---|---|
| content | string | Text describing the condition or parameter |
| messageIds | (string \| number)[] | Collection of message IDs included in this condition section |
| fragmentIds | string[] | Collection of nested fragments ids (for complex structures) |

The following code example illustrates how to create fragments:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/umlsequencediagram-4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/umlsequencediagram-4" %}

{% endif %}

### Customizing Participant Spacing in Sequence Diagram 

The [spaceBetweenParticipants](https://ej2.syncfusion.com/documentation/api/diagram/umlsequencediagrammodel#spacebetweenparticipants) property in `UmlSequenceDiagramModel` controls the horizontal spacing between participants. The default value is 100, and it can be adjusted based on your layout requirements.

```javascript
// Define the UML Sequence Diagram model
const model = {
  // Define the space between participants
  spaceBetweenParticipants: 300,
  participants: participants,    // collection of participants in the sequence diagram  
  messages: messages,            // collection of messages exchanged between participants  
  fragments: fragments           // collection of sequence diagram fragments (opt, alt, loop) 
}
```