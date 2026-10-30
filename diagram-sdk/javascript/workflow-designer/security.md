---
layout: post
title: Security considerations in JavaScript Workflow Designer | Syncfusion®
description: Learn about credential handling, network requests and imported workflows in the Syncfusion® JavaScript Workflow Designer control.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Security considerations in JavaScript Workflow Designer

<<<<<<< HEAD
Workflows run in the user's browser and make real network calls. Keep the following in mind.

## Credentials

* Prefer `credentialMode: 'Reference'` (the default). Steps then store only a name, which your application resolves in `credentialRequested`.
* `'Inline'` mode, and Direct-mode AI Assist, expose keys to anyone using the page. Use them for development only.
* Secrets aren't included in event arguments, the execution log or exported JSON.
=======
Workflows run in the user's browser and make real network calls. Review the following points before you use the Workflow Designer in production.

## Credentials

* Use `credentialMode: 'Reference'`, which is the default. Steps then store only a credential name, which your application resolves in the `credentialRequested` event.
* `'Inline'` mode and Direct-mode AI Assist expose keys to anyone who uses the page. Use them for development only.
* Secrets aren't included in event arguments, the execution log, or exported JSON.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

## Network requests

* API Request steps send requests with `credentials: 'omit'`, so page cookies and HTTP authentication are never sent.
<<<<<<< HEAD
* Use `beforeRequestSend` as your policy point. You can allow-list hosts, route through a proxy, or block requests.
=======
* Use the `beforeRequestSend` event as your policy point to allowlist hosts, route requests through a proxy, or block requests. See [Intercept requests](./host-integration#intercept-requests).
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
* Target servers must allow cross-origin requests (CORS) from your page.

## Imported workflows

<<<<<<< HEAD
A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted. Restrict hosts in `beforeRequestSend`, and review the workflow before running it.

## Rendering

Sticky-note Markdown is HTML-escaped before it's displayed. Expressions can't call functions or reach prototypes or globals.
=======
A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted, restrict hosts in `beforeRequestSend`, and review a workflow before you run it.

## Rendering

Sticky-note Markdown is HTML-escaped before it's displayed. Expressions can't call functions or reach prototypes or global objects.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
