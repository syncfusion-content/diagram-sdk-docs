---
layout: post
title: Security considerations in Angular Workflow Designer | Syncfusion®
description: Learn about credential handling, network requests and imported workflows in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Security considerations in Angular Workflow Designer

Workflows run in the user's browser and make real network calls. Keep the following in mind.

## Credentials

* Prefer `credentialMode: 'Reference'` (the default). Steps then store only a name, which your application resolves in `credentialRequested`.
* `'Inline'` mode, and Direct-mode AI Assist, expose keys to anyone using the page. Use them for development only.
* Secrets aren't included in event arguments, the execution log or exported JSON.

## Network requests

* API Request steps send requests with `credentials: 'omit'`, so page cookies and HTTP authentication are never sent.
* Use `beforeRequestSend` as your policy point. You can allow-list hosts, route through a proxy, or block requests.
* Target servers must allow cross-origin requests (CORS) from your page.

## Imported workflows

A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted. Restrict hosts in `beforeRequestSend`, and review the workflow before running it.

## Rendering

Sticky-note Markdown is HTML-escaped before it's displayed. Expressions can't call functions or reach prototypes or globals.
