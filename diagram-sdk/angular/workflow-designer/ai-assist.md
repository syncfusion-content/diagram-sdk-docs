---
layout: post
title: AI Assist in Angular Workflow Designer control | Syncfusion®
description: Learn how to enable AI Assist in the Syncfusion Angular Workflow Designer to generate and change workflows from natural-language prompts.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in Angular Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt that the user types in the AI Assist panel, such as "Send a Slack message when a new order arrives". It helps users start from a working draft instead of an empty canvas. AI Assist is disabled by default; set `aiAssistSettings.enabled` to `true` to display its panel.

## Configure AI Assist

Use the `aiAssistSettings` property to enable AI Assist and to set how it reaches the AI provider.

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
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowBeforeRequestSendEventArgs } from '@syncfusion/ej2-workflow-designer';

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [aiAssistSettings]="aiAssistSettings"
            (beforeRequestSend)="onBeforeRequestSend($event)"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public aiAssistSettings: WorkflowDesignerComponent['aiAssistSettings'] = {
        enabled: true,
        position: 'Right',
        server: { url: 'https://api.mycompany.com/workflow-ai' },
        promptSuggestions: ['Send a Slack message when a new order arrives']
    };

    public onBeforeRequestSend(args: WorkflowBeforeRequestSendEventArgs): void {
        if (args.requestType === 'AIAssist') {
            // getUserToken stands for your application's sign-in code.
            args.request.headers = [{ key: 'Authorization', value: 'Bearer ' + getUserToken() }];
        }
    }
}
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
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [executionSettings]="executionSettings"
            [aiAssistSettings]="aiAssistSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public executionSettings: WorkflowDesignerComponent['executionSettings'] = { credentialMode: 'Inline' };

    public aiAssistSettings: WorkflowDesignerComponent['aiAssistSettings'] = {
        enabled: true,
        direct: { provider: 'Gemini', model: 'gemini-2.5-flash', apiKey: 'YOUR_DEVELOPMENT_KEY' }
    };
}
{% endhighlight %}
{% endtabs %}

W> A key used in Direct mode is exposed to everyone who uses the page. Use Direct mode only for development, and use Server mode in production. Many providers also block direct browser calls through CORS.

## AI Assist events

| Event | Description |
|---|---|
| `aiAssistCompleted` | Triggers after AI Assist generates a workflow, validates it, and applies it to the canvas. Its `workflow` argument contains the applied workflow, for example to save it or to show a confirmation. |
| `aiAssistFailed` | Triggers when an AI Assist request fails and won't be retried. Its `error` argument describes the failure, and the current workflow is left unchanged. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowAIAssistCompletedEventArgs, WorkflowAIAssistFailedEventArgs } from '@syncfusion/ej2-workflow-designer';

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [aiAssistSettings]="aiAssistSettings"
            (aiAssistCompleted)="onAIAssistCompleted($event)"
            (aiAssistFailed)="onAIAssistFailed($event)"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public aiAssistSettings: WorkflowDesignerComponent['aiAssistSettings'] = { enabled: true, server: { url: 'https://api.mycompany.com/workflow-ai' } };

    public onAIAssistCompleted(args: WorkflowAIAssistCompletedEventArgs): void {
        console.log('Generated workflow with', args.workflow.workflowSteps.length, 'steps');
    }

    public onAIAssistFailed(args: WorkflowAIAssistFailedEventArgs): void {
        console.error('AI Assist failed:', args.error);
    }
}
{% endhighlight %}
{% endtabs %}

## See also

* [Intercept requests](./host-integration#intercept-requests)
* [Security considerations](./security)
