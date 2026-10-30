---
layout: post
title: Security considerations in React Workflow Designer | Syncfusion®
description: Learn about credential handling, network requests and imported workflows in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Security considerations in React Workflow Designer

Workflows run in the user's browser and make real network calls. Review the following points before you use the Workflow Designer in production.

## Credentials

* Don't put production secrets in client-side code or workflow files. Inline credentials are available to anyone who can use the page; use them for development only.
* `credentialRequested` is an internal event, not a public integration point. For requests that require secrets, route them through your backend and keep credentials server-side.
* Secrets aren't included in event arguments, the execution log, or exported JSON.

## Network requests

* API Request steps use Fetch's `credentials: 'omit'`, so browser-managed cookies and HTTP authentication are omitted. Authorization headers you configure explicitly are still sent.
* Use the `beforeRequestSend` event as your policy point to allowlist hosts, route requests through a proxy, or block requests. See [Intercept requests](./host-integration#intercept-requests).
* Target servers must allow cross-origin requests (CORS) from your page.

## Imported workflows

A workflow file can contain API Request steps that call any URL. Treat workflow files from unknown sources as untrusted, restrict hosts in `beforeRequestSend`, and review a workflow before you run it.

## Rendering

Sticky-note Markdown is HTML-escaped before it's displayed. Expressions can't call functions or reach prototypes or global objects.
