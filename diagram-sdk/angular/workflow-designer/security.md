---
layout: post
title: Security considerations in Angular Workflow Designer | Syncfusion®
description: Learn about credential handling, network requests and imported workflows in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Security considerations in Angular Workflow Designer

Workflows run in the user's browser and make real network calls. Review the following points before you use the Workflow Designer in production.

## Credentials

* Use `credentialMode: 'Reference'`, which is the default. Steps then store only a credential name, which your application resolves in the `credentialRequested` event.
* `'Inline'` mode and Direct-mode AI Assist expose keys to anyone who uses the page. Use them for development only.
* Secrets aren't included in event arguments, the execution log, or exported JSON.

## Network requests

* API Request steps send requests with `credentials: 'omit'`, so page cookies and HTTP authentication are never sent.
* Use the `beforeRequestSend` event as your policy point to allowlist hosts, route requests through a proxy, or block requests. See [Intercept requests](./host-integration#intercept-requests).
* Target servers must allow cross-origin requests (CORS) from your page.

## Imported workflows

A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted, restrict hosts in `beforeRequestSend`, and review a workflow before you run it.

## Rendering

Sticky-note Markdown is HTML-escaped before it's displayed. Expressions can't call functions or reach prototypes or global objects.
