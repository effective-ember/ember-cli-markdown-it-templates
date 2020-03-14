ember-cli-markdown-it-templates
==============================================================================

This addon allows using `.md` and `markdown`-files as templates in your
Ember.js projects. Internally this addon uses
[`markdown-it-compiler`](https://www.npmjs.com/package/markdown-it-compiler)
and [`markdown-it-ember`](https://www.npmjs.com/package/markdown-it-ember).

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-markdown-it-templates
```


Usage
------------------------------------------------------------------------------

With `ember-cli-markdown-it-templates` you can write your template files in
markdown-format:

```md
<!-- components/test.md -->
# Headline

This is a markdown template
```

This can now be used like a regular component in your `Ember.js`-application:

```hbs
{{!-- application.hbs --}}
<Test />
```

and will render the following:

```html
<h1>Headline</h1>
<p>This is a markdown template</p>
```


Markdown and Ember.js interoperability
-----------------------------

In addition to allowing you to create `markdown`-templates you can also include
`Ember.js`-components like regular html in your `markdown`-templates.

Example:

```md
# Headline

This is a markdown template

<Button
  {{on "click" this.handleClick}}
  data-test-ember-button-in-markdown
>
  Click me
</Button>

<div>
  {{#if this.showResult}}
    <div data-test-result>
      Result
    </div>
  {{/if}}
</div>
```

Result:

<p align="left">
  <img width="250" src="https://user-images.githubusercontent.com/242299/76683443-0186d900-65fc-11ea-8714-d980ea3518b6.gif">
</p>

Please be aware that you will need to wrap `{{if}}`, `{{each}}` and other
curly-invocations into a wrapper-`div`. You will receive a build error
otherwise.

Why would I want this?
----------------------

When you want to create content heavy applications - e.g. a blog that is
prerendered via [prember](https://github.com/ef4/prember) - you can use this
addon to make it easier for you to create your content.

Mixing `markdown`-content and `Ember.js`-components can also be useful when you
want to document component behavior or component usage patterns in
a styleguide.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

Thanks and Kudos
---------------------------------------------

Thanks to [gossi](https://github.com/gossi) for the idea for this and the
[markdown-it-compiler](https://www.npmjs.com/package/markdown-it-compiler)- and [markdown-it-ember](https://www.npmjs.com/package/markdown-it-ember)-projects.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
