---
layout: post
title: AI Assist in React Workflow Designer | Syncfusion
description: Learn how to generate and update workflows from natural-language prompts with AI Assist in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in React Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt. It's disabled by default.
Enable it with the `aiAssistSettings` prop. Use a ref to call AI Assist methods from your React code.

## Server mode (recommended)

In Server mode, the designer posts each request to your backend. Your backend calls the AI provider and keeps the API key.
The example's `getUserToken()` is an application-provided function; retrieve tokens from your authenticated application session.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function onBeforeRequestSend(args: any) {
        if (args.requestType === 'AIAssist') {
            args.request.headers = { Authorization: 'Bearer ' + getUserToken() };
        }
    }

    return (
        <WorkflowDesignerComponent
            id="workflow"
            ref={workflowInstance}
            height="500px"
            aiAssistSettings={{
                enabled: true,
                position: 'Right',
                server: { url: 'https://api.mycompany.com/workflow-ai' },
                promptSuggestions: ['Send a Slack message when a new order arrives']
            }}
            beforeRequestSend={onBeforeRequestSend}
        />
    );
}

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

In Direct mode, the browser calls the provider (`'Gemini'`, `'OpenAI'` or `'Claude'`) itself. Direct mode is used when `executionSettings.credentialMode` is `'Inline'`.
The example's `devKey` is an application-provided development credential.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onCredentialRequested(args: any) {
        if (args.purpose === 'AIAssist') {
            args.complete(devKey);
        }
    }

    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            executionSettings={{ credentialMode: 'Inline' }}
            aiAssistSettings={{
                enabled: true,
                direct: { provider: 'OpenAI', model: 'gpt-4o', credentialRef: 'openai-dev' }
            }}
            credentialRequested={onCredentialRequested}
        />
    );
}

{% endhighlight %}
{% endtabs %}

W> Anyone using the page can read a key used in Direct mode. Don't use Direct mode in production.

## Use AI Assist from code

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    async function generateWorkflow() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }

        await designer.generateWorkflow('Every morning, fetch open tickets and email a summary to the team');
        await designer.updateWorkflowFromPrompt('Add an approval step before the email is sent');
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" aiAssistSettings={{ enabled: true }} />
            <button onClick={generateWorkflow}>Generate workflow</button>
        </>
    );
}

{% endhighlight %}
{% endtabs %}

Both methods reject when AI Assist is disabled or the request fails. Use the `aiAssistCompleted` and `aiAssistFailed` events to react to the result.
