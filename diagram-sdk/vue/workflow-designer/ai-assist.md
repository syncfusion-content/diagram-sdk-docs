---
layout: post
title: AI Assist in EJ2 Vue Workflow Designer | Syncfusion®
description: Learn how to generate and update workflows from natural-language prompts with AI Assist in the Syncfusion Vue Workflow Designer in Server or Direct mode.
control: Workflow Designer
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in EJ2 Vue Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt. It's disabled by default. To turn it on, set `aiAssistSettings.enabled` to `true` and choose how the designer reaches the AI provider: through your backend (Server mode) or directly from the browser (Direct mode).

[VERIFY: Add a screenshot of the AI Assist panel next to the canvas. Suggested alt text: "AI Assist chat panel with prompt suggestions, next to a generated workflow on the canvas."]

## Server mode (recommended)

In Server mode, the designer posts each request to your backend. Your backend calls the AI provider and keeps the API key.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :aiAssistSettings="aiAssistSettings" :beforeRequestSend="beforeRequestSend"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const aiAssistSettings = {
    enabled: true,
    position: 'Right',
    server: { url: 'https://api.mycompany.com/workflow-ai' },
    promptSuggestions: ['Send a Slack message when a new order arrives']
};
const beforeRequestSend = (args) => {
    if (args.requestType === 'AIAssist') {
        // getUserToken stands for your application's sign-in code.
        args.request.headers = { Authorization: 'Bearer ' + getUserToken() };
    }
};
</script>

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

In Direct mode, the browser calls the provider (`'Gemini'`, `'OpenAI'`, or `'Claude'`) itself. The designer uses Direct mode when `executionSettings.credentialMode` is `'Inline'`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :executionSettings="executionSettings" :aiAssistSettings="aiAssistSettings" :credentialRequested="credentialRequested"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const executionSettings = { credentialMode: 'Inline' };
const aiAssistSettings = {
    enabled: true,
    direct: { provider: 'OpenAI', model: 'gpt-4o', credentialRef: 'openai-dev' }
};
const credentialRequested = (args) => {
    // devKey holds a development-only API key.
    if (args.purpose === 'AIAssist') { args.complete(devKey); }
};
</script>

{% endhighlight %}
{% endtabs %}

W> Anyone who uses the page can read a key used in Direct mode. Don't use Direct mode in production.

## Use AI Assist from code

Call `generateWorkflow` to create a workflow from a prompt, or `updateWorkflowFromPrompt` to change the current one:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer"></ejs-workflowdesigner>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const designer = ref(null);

onMounted(() => {
    designer.value.ej2Instances.generateWorkflow('Every morning, fetch open tickets and email a summary to the team');

    designer.value.ej2Instances.updateWorkflowFromPrompt('Add an approval step before the email is sent');
});

</script>

{% endhighlight %}
{% endtabs %}

Both methods reject when AI Assist is disabled or the request fails. To react to the result, handle the `aiAssistCompleted` and `aiAssistFailed` events.

## See also

* [Intercept requests](./host-integration#intercept-requests)
* [Security considerations](./security)
