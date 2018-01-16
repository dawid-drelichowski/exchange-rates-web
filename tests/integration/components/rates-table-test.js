import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import rates from 'exchange-rates-web/mirage/fixtures/rates'

moduleForComponent('rates-table', 'Integration | Component | rates table', {
  integration: true
})

test('should be empty when no properties and child components passed', function(assert) {
  this.render(hbs`{{rates-table}}`)

  assert.strictEqual(this.$().text().trim(), '')
})

test('should render child components when child components and no properties passed', function(assert) {
  const childComponent = 'Child component'

  this.set('childComponent', childComponent)
  this.render(hbs`{{#rates-table}}{{childComponent}}{{/rates-table}}`)

  assert.strictEqual(this.$().text().trim(), childComponent)
})

test("should render rates-table-row's when rates property passed", function(assert) {
  this.set('rates', rates)
  this.render(hbs`{{rates-table rates=rates}}`)

  assert.expect(1)
  assert.strictEqual(this.$('tbody tr').length, 3)
})
