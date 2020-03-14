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
