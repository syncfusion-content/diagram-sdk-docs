---
layout: post
title: AI Assist in JavaScript Workflow Designer control | Syncfusion®
description: Learn how to generate and update workflows from natural-language prompts with AI Assist in the Syncfusion® JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in JavaScript Workflow Designer control

AI Assist generates a workflow, or changes the current one, from a natural-language prompt. It's disabled by default. To turn it on, set `aiAssistSettings.enabled` to `true` and choose how the designer reaches the AI provider: through your backend (Server mode) or directly from the browser (Direct mode).


## Server mode (recommended)

In Server mode, the designer posts each request to your backend. Your backend calls the AI provider and keeps the API key.

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    aiAssistSettings: {
        enabled: true,
        position: 'Right',
        server: { url: 'https://api.mycompany.com/workflow-ai' },
        promptSuggestions: ['Send a Slack message when a new order arrives']
    },
    beforeRequestSend: (args) => {
        if (args.requestType === 'AIAssist') {
            args.request.headers = { Authorization: 'Bearer ' + getUserToken() };
        }
    }
});

{% endhighlight %}
{% endtabs %}

Your endpoint receives a `WorkflowAIServerRequest` and returns a `WorkflowAIServerResponse`:

{% tabs %}
{% highlight json tabtitle="Request" %}

{
  "promptQuery": "System: ...\n\nUser: ...",
  "responseFormat": "JSON",
  "desiredFields": [],
  "memoryMessages": [],
  "context": {}
}

{% endhighlight %}
{% highlight json tabtitle="Response" %}

{
  "text": "...",
  "content": {},
  "provider": "OpenAI",
  "model": "gpt-4o"
}

{% endhighlight %}
{% endtabs %}

## Direct mode (development only)

In Direct mode, the browser calls the AI provider itself. Any key entered for this mode is exposed to users of the page, so use it only for development. For production, use Server mode so your backend keeps the provider key. The `credentialRequested` event is internal and isn't a public integration point.

## Use AI Assist from code

Call `generateWorkflow` to create a workflow from a prompt, or `updateWorkflowFromPrompt` to change the current one:

{% tabs %}
{% highlight js tabtitle="app.js" %}

designer.generateWorkflow('Every morning, fetch open tickets and email a summary to the team');
designer.updateWorkflowFromPrompt('Add an approval step before the email is sent');

{% endhighlight %}
{% endtabs %}

Both methods reject when AI Assist is disabled or the request fails. To react to the result, handle the `aiAssistCompleted` and `aiAssistFailed` events.

## See also

* [Intercept requests](./host-integration#intercept-requests)
* [Security considerations](./security)
