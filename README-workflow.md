# Workflow Designer UG pages

Twelve topic pages for `syncfusion-content/ej2-javascript-docs`.

## Where they go

Copy `workflow-designer/` to the repository root, alongside the other control
folders. Merge `toc-snippet.html` into `toc.html` at the position the Workflow
Designer should occupy in the left tree.

## Porting to the other platforms

The page bodies are platform neutral. For `ej2-react-docs`, `ej2-angular-docs`
and `ej2-vue-docs`, change one line of front matter per page:

```
platform: ej2-javascript   ->   platform: ej2-react     (or ej2-angular, ej2-vue)
```

and update the `toc` hrefs from `/ej2-javascript/...` to the target platform.
Code samples in `getting-started.md`, `steps.md`, `authoring.md` and
`persistence.md` are TypeScript and need converting to each framework's idiom;
the remaining pages are prose and tables and port unchanged.

## Deliberately excluded

**The API reference table is not included.** Syncfusion publishes the API
reference separately, generated from source JSDoc under `documentation: api`.
Duplicating those 293 entries here would drift within a release. The JSDoc
corrections are supplied as a separate source patch.

## Checks already run

* Front matter present on all twelve pages, with all eight required keys
* No unguarded `{% raw %}{{ }}{% endraw %}` — Liquid would otherwise consume the expression
  examples on the Expressions page
* No internal specification identifiers (FR-, SC-, T-, R-) in published text
* All twelve cross-page links resolve; toc entries match the files exactly
* British spellings throughout, matching the documentation linter

## Still needed before publishing

* Screenshots. CI validates image alt text, size and file naming, and several
  pages would benefit from a canvas image.
* A review of `getting-started.md` against the published package name and the
  current theme import path.
