---
layout: post
title: Security considerations in TypeScript Workflow Designer | Syncfusion®
description: Learn how to handle credentials, network requests, and imported workflows securely in the Syncfusion TypeScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Security Considerations in EJ2 TypeScript Workflow Designer

Workflows run in the user's browser and make real network calls. Review the following points before you use the Workflow Designer in production.

## Credentials

* Don't put production secrets in client-side code or workflow files. Workflows are designed to save credential names, such as the **Auth Reference** of an API Request step, instead of secrets.
* Add authentication to API requests in your application: in the `beforeRequestSend` event, or in a backend that the requests are routed through. See [Intercept requests](./host-integration#intercept-requests).
* AI step keys and the values of credential headers are removed when a workflow is exported. Other settings, such as the fields of custom steps, are exported as entered. See [Values removed on export](./import-export#values-removed-on-export).
* Values whose names look like secrets, such as `password`, `token`, or `apiKey`, are masked in the execution log.

### Credential mode

The `credentialMode` property of `executionSettings` sets how AI steps and AI Assist reach the AI provider. Choose the mode according to where the provider key is kept.

| Value | Description |
|---|---|
| `'Reference'` (default) | AI steps send their requests to the backend set in their **Server URL** setting, and AI Assist uses its Server mode. Your backend calls the provider and keeps the key. Use this mode in production. |
| `'Inline'` | AI steps show the **Provider**, **Model**, and **API Key** settings, and AI Assist uses its Direct mode. The browser calls the provider with the key, so anyone who uses the page can read it. Use this mode for development only. |

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

const designer: WorkflowDesigner = new WorkflowDesigner({
    executionSettings: { credentialMode: 'Reference' }
});
designer.appendTo('#workflowDesigner');

{% endhighlight %}
{% endtabs %}

## Network requests

* API Request steps send their requests with the Fetch API option `credentials: 'omit'`. The browser therefore never adds the page's cookies or HTTP authentication, so an imported or shared workflow can't act as the signed-in user. Headers that you configure explicitly, such as an `Authorization` header, are still sent.
* Use the `beforeRequestSend` event as your policy point to allow only known hosts, route requests through a proxy, or block requests.
* Target servers must allow cross-origin requests (CORS) from your page.

## Imported workflows

A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted, restrict hosts in the `beforeRequestSend` event, and review a workflow before you run it.

## Rendering

* Sticky-note Markdown is HTML-escaped before it's displayed.
* Expressions can't call functions or reach prototypes or global objects.
* Content returned by a [step template](./step-templates) is inserted as you provide it. Escape step names and settings before you add them to an HTML string.
