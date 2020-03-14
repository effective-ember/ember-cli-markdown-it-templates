import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | markdown compilation', function(hooks) {
  setupApplicationTest(hooks);

  test('compiling markdown templates works', async function(assert) {
    await visit('/');

    assert.dom('p').hasText('This is a markdown template', 'markdown templates can be displayed');

    assert.dom('[data-test-ember-button-in-markdown]').exists('markdown and ember components can be mixed')

    assert.dom('[data-test-result]').doesNotExist('by default the result div is not shown');

    await click('[data-test-ember-button-in-markdown]');

    assert.dom('[data-test-result]').exists('after clicking the button the result div is shown - components can be created with a markdown template and function as usual');
  });
});
