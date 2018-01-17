import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import rates from '../../fixtures/rates'

moduleForComponent('rates-table-row', 'Integration | Component | rates table row', {
  integration: true
})

test('should be empty when no properties and child components passed', function(assert) {
  this.render(hbs`{{rates-table-row}}`)

  assert.expect(1)
  assert.strictEqual(this.$().text().trim(), '')
})

test('should be empty when child components and no properties passed', function(assert) {
  this.render(hbs`{{#rates-table-row}}Child component{{/rates-table-row}}`)

  assert.expect(1)
  assert.strictEqual(this.$().text().trim(), '')
})

test("should render rates-table-row when rate property passed", function(assert) {
  this.set('rate', rates[0])
  this.render(hbs`{{rates-table-row rate=rate}}`)

  assert.expect(1)
  assert.strictEqual(this.$('tr td').length, 4)
})
