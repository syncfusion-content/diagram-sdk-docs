---
layout: post
title: AI Assist in Angular Workflow Designer | Syncfusion®
description: Learn how to generate and update workflows from natural-language prompts with AI Assist in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# AI Assist in Angular Workflow Designer

AI Assist generates a workflow, or changes the current one, from a natural-language prompt. It's disabled by default. To turn it on, set `aiAssistSettings.enabled` to `true` and choose how the designer reaches the AI provider: through your backend (Server mode) or directly from the browser (Direct mode).


## Server mode (recommended)

In Server mode, the designer posts each request to your backend. Your backend calls the AI provider and keeps the API key.

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

In Direct mode, the browser calls the provider (`'Gemini'`, `'OpenAI'`, or `'Claude'`) itself. The designer uses Direct mode when `executionSettings.credentialMode` is `'Inline'`.

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

W> Anyone who uses the page can read a key used in Direct mode. Don't use Direct mode in production.

## Use AI Assist from code

Call `generateWorkflow` to create a workflow from a prompt, or `updateWorkflowFromPrompt` to change the current one:

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

Both methods reject when AI Assist is disabled or the request fails. To react to the result, handle the `aiAssistCompleted` and `aiAssistFailed` events.

## See also

* [Intercept requests](./host-integration#intercept-requests)
* [Security considerations](./security)
