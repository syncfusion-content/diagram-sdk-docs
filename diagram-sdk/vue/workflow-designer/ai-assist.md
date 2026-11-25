---
layout: post
title: AI Assist in Vue Workflow Designer control | Syncfusion®
description: Learn how to enable AI Assist in the Syncfusion Vue Workflow Designer to generate and change workflows from natural-language prompts.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in Vue Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt that the user types in the AI Assist panel, such as "Send a Slack message when a new order arrives". It helps users start from a working draft instead of an empty canvas. AI Assist is disabled by default; set `aiAssistSettings.enabled` to `true` to display its panel.

## Configure AI Assist

Use the [`aiAssistSettings`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer#aiassistsettings) property to enable AI Assist and to set how it reaches the AI provider.

| Property | Type | Default | Description |
|---|---|---|---|
| `enabled` | `boolean` | `false` | Specifies whether AI Assist is available. When `false`, the AI Assist button isn't displayed and no AI Assist requests are made. |
| `position` | `'Left' \| 'Right'` | `'Right'` | Specifies the side of the designer that the panel is displayed on: `'Left'` or `'Right'`. |
| `promptSuggestions` | `string[]` | `null` | Specifies example prompts displayed in the panel, which help users write their first request. |
| `server.url` | `string` | `''` | Specifies your backend endpoint, which AI Assist posts its requests to in Server mode. |
| `direct.provider` | `WorkflowAIAssistProvider` | `null` | Specifies the AI provider used in Direct mode: `'Gemini'`, `'OpenAI'`, or `'Claude'`. |
| `direct.model` | `string` | `''` | Specifies the model name used in Direct mode. |
| `direct.apiKey` | `string` | `''` | Specifies the provider key used in Direct mode. It's exposed to everyone who uses the page. |

Users can also change these settings with the settings button in the AI Assist panel.

AI Assist reaches the AI provider in one of two modes, depending on the `credentialMode` property of `executionSettings`.

| `credentialMode` | AI Assist mode | Description |
|---|---|---|
| `'Reference'` (default) | Server | The designer posts each request to your backend at `server.url`. Your backend calls the AI provider and keeps the API key. Use this mode in production. |
| `'Inline'` | Direct | The browser calls the provider set in `direct`. Use this mode for development only. |

## Server mode

In Server mode, the designer posts each request to your backend. Use the `beforeRequestSend` event to add your application's authentication header to these requests.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"
            :aiAssistSettings="aiAssistSettings"
            :beforeRequestSend="onBeforeRequestSend"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const aiAssistSettings = {
    enabled: true,
    position: 'Right',
    server: { url: 'https://api.mycompany.com/workflow-ai' },
    promptSuggestions: ['Send a Slack message when a new order arrives']
};

function onBeforeRequestSend(args) {
    if (args.requestType === 'AIAssist') {
        // getUserToken stands for your application's sign-in code.
        args.request.headers = [{ key: 'Authorization', value: 'Bearer ' + getUserToken() }];
    }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"
            :aiAssistSettings="aiAssistSettings"
            :beforeRequestSend="onBeforeRequestSend"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

const aiAssistSettings = {
    enabled: true,
    position: 'Right',
    server: { url: 'https://api.mycompany.com/workflow-ai' },
    promptSuggestions: ['Send a Slack message when a new order arrives']
};

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
    data: function () {
        return {
            aiAssistSettings: aiAssistSettings
        };
    },
    methods: {
        onBeforeRequestSend: function (args) {
            if (args.requestType === 'AIAssist') {
                // getUserToken stands for your application's sign-in code.
                args.request.headers = [{ key: 'Authorization', value: 'Bearer ' + getUserToken() }];
            }
        }
    }
};
</script>
{% endhighlight %}
{% endtabs %}

Your endpoint receives a JSON request and returns a JSON response.

{% tabs %}
{% highlight json tabtitle="Request" %}

{
  "promptQuery": "System: ...\n\nUser: ...",
  "responseFormat": "JSON",
  "desiredFields": [],
  "memoryMessages": []
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

* `promptQuery` holds the system instructions and the user's prompt. `responseFormat` is `'Text'`, `'JSON'`, or `'Markdown'`. `memoryMessages` holds earlier messages of the conversation, each with a `role` and `content`.
* Return the structured answer in `content`, the text answer in `text`, or both. The `provider` and `model` values are optional and are displayed in the designer.
* When the request fails, return a non-2xx status with `{ "error": "message" }`.

N> AI steps with a **Server URL** post the same request format to their own endpoint, so one backend can serve both AI steps and AI Assist.

## Direct mode

In Direct mode, the browser calls the AI provider itself. To use it, set the `credentialMode` property of `executionSettings` to `'Inline'` and configure `aiAssistSettings.direct`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <ejs-workflowdesigner id="workflow"
        height="500px"
        :executionSettings="executionSettings"
        :aiAssistSettings="aiAssistSettings"></ejs-workflowdesigner>
</template>

<script setup>
const executionSettings = { credentialMode: 'Inline' };
const aiAssistSettings = {
    enabled: true,
    direct: { provider: 'Gemini', model: 'gemini-2.5-flash', apiKey: 'YOUR_DEVELOPMENT_KEY' }
};
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <ejs-workflowdesigner id="workflow"
        height="500px"
        :executionSettings="executionSettings"
        :aiAssistSettings="aiAssistSettings"></ejs-workflowdesigner>
</template>

<script>
const executionSettings = { credentialMode: 'Inline' };
const aiAssistSettings = {
    enabled: true,
    direct: { provider: 'Gemini', model: 'gemini-2.5-flash', apiKey: 'YOUR_DEVELOPMENT_KEY' }
};

export default {
    data: function () {
        return {
            executionSettings: executionSettings,
            aiAssistSettings: aiAssistSettings
        };
    }
};
</script>
{% endhighlight %}
{% endtabs %}

W> A key used in Direct mode is exposed to everyone who uses the page. Use Direct mode only for development, and use Server mode in production. Many providers also block direct browser calls through CORS.

## AI Assist events

| Event | Description |
|---|---|
| [`aiAssistCompleted`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer#aiassistcompleted) | Triggers after AI Assist generates a workflow, validates it, and applies it to the canvas. Its `workflow` argument contains the applied workflow, for example to save it or to show a confirmation. |
| [`aiAssistFailed`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer#aiassistfailed) | Triggers when an AI Assist request fails and won't be retried. Its `error` argument describes the failure, and the current workflow is left unchanged. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"
            :aiAssistSettings="aiAssistSettings"
            :aiAssistCompleted="onAIAssistCompleted"
            :aiAssistFailed="onAIAssistFailed"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const aiAssistSettings = { enabled: true, server: { url: 'https://api.mycompany.com/workflow-ai' } };

function onAIAssistCompleted(args) {
    console.log('Generated workflow with', args.workflow.workflowSteps.length, 'steps');
}

function onAIAssistFailed(args) {
    console.error('AI Assist failed:', args.error);
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"
            :aiAssistSettings="aiAssistSettings"
            :aiAssistCompleted="onAIAssistCompleted"
            :aiAssistFailed="onAIAssistFailed"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

const aiAssistSettings = { enabled: true, server: { url: 'https://api.mycompany.com/workflow-ai' } };

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
    data: function () {
        return {
            aiAssistSettings: aiAssistSettings
        };
    },
    methods: {
        onAIAssistCompleted: function (args) {
            console.log('Generated workflow with', args.workflow.workflowSteps.length, 'steps');
        },
        onAIAssistFailed: function (args) {
            console.error('AI Assist failed:', args.error);
        }
    }
};
</script>
{% endhighlight %}
{% endtabs %}

## See also

* [Intercept requests](./host-integration#intercept-requests)
* [Security considerations](./security)
