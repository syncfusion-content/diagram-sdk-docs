---
layout: post
title: AI Assist in Angular Workflow Designer | Syncfusion
description: Learn how to generate and update workflows from natural-language prompts with AI Assist in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in Angular Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt. It's disabled by default.
Enable it with the `aiAssistSettings` input. Use `@ViewChild` to call AI Assist methods from your Angular component.

## Server mode (recommended)

In Server mode, the designer posts each request to your backend. Your backend calls the AI provider and keeps the API key.
The example's `getUserToken()` is an application-provided function; retrieve tokens from your authenticated application session.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\" [aiAssistSettings]=\"aiAssistSettings\" (beforeRequestSend)=\"onBeforeRequestSend($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {
    public aiAssistSettings = { enabled: true, position: 'Right', server: { url: 'https://api.mycompany.com/workflow-ai' }, promptSuggestions: ['Send a Slack message when a new order arrives'] };

    onBeforeRequestSend(args: any): void {
        if (args.requestType === 'AIAssist') args.request.headers = { Authorization: 'Bearer ' + getUserToken() };
    }
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
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" [executionSettings]=\"executionSettings\" [aiAssistSettings]=\"aiAssistSettings\" (credentialRequested)=\"onCredentialRequested($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {
    public executionSettings = { credentialMode: 'Inline' };
    public aiAssistSettings = { enabled: true, direct: { provider: 'OpenAI', model: 'gpt-4o', credentialRef: 'openai-dev' } };
    onCredentialRequested(args: any): void { if (args.purpose === 'AIAssist') args.complete(devKey); }
}

{% endhighlight %}
{% endtabs %}

W> Anyone using the page can read a key used in Direct mode. Don't use Direct mode in production.

## Use AI Assist from code

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\" [aiAssistSettings]=\"{ enabled: true }\"></ejs-workflowdesigner><button type=\"button\" (click)=\"generateWorkflow()\">Generate workflow</button>"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    async generateWorkflow(): Promise<void> {
        await this.workflowDesigner.generateWorkflow('Every morning, fetch open tickets and email a summary to the team');
        await this.workflowDesigner.updateWorkflowFromPrompt('Add an approval step before the email is sent');
    }
}

{% endhighlight %}
{% endtabs %}

Both methods reject when AI Assist is disabled or the request fails. Use the `aiAssistCompleted` and `aiAssistFailed` events to react to the result.
