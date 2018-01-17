import {moduleForComponent, test} from 'ember-qunit'
import {fillIn} from 'ember-native-dom-helpers'
import hbs from 'htmlbars-inline-precompile'
import makeObjectsArray from '../../helpers/make-objects-array'
import rates from '../../fixtures/rates'

moduleForComponent('rates-calculator', 'Integration | Component | rates calculator', {
  integration: true
})

test('should be empty when no properties and child components passed', function(assert) {
  this.render(hbs`{{rates-calculator}}`)

  assert.expect(1)
  assert.strictEqual(this.$().text().trim(), '')
})

test('should render child components when child components and no properties passed', function(assert) {
  const childComponent = 'Child component'

  this.set('childComponent', childComponent)
  this.render(hbs`{{#rates-calculator}}{{childComponent}}{{/rates-calculator}}`)

  assert.strictEqual(this.$().text().trim(), childComponent)
})

test('should render rates-calculator when rates property passed', function(assert) {
  this.set('rates', makeObjectsArray(rates))
  this.render(hbs`{{rates-calculator rates=rates}}`)

  assert.expect(3)
  assert.strictEqual(this.$('select').length, 2)
  assert.strictEqual(this.$('input[type="number"]').length, 1)
  assert.strictEqual(this.$('p').text().trim(), '0')
})

test('should properly calculate when amount, currency and transaction changed', async function(assert) {
  this.set('rates', makeObjectsArray(rates))
  this.render(hbs`{{rates-calculator rates=rates}}`)

  await fillIn('input[type="number"]', 7)
  await fillIn('select#rates-calculator-currency', 'EUR')
  await fillIn('select#rates-calculator-transaction', 'sale')
  
  assert.expect(1)
  assert.strictEqual(this.$('p').text().trim(), '147')
})

test('should properly calculate when rates changed', async function(assert) {
  const ratesModel = makeObjectsArray(rates)
  
  this.set('rates', ratesModel)
  this.render(hbs`{{rates-calculator rates=rates}}`)

  await fillIn('input[type="number"]', 5)
  await fillIn('select#rates-calculator-currency', 'GBP')
  
  assert.expect(2)
  assert.strictEqual(this.$('p').text().trim(), '150')
  
  ratesModel.objectAt(2).set('purchase', 29.5)
  this.set('rates', ratesModel)
  
  assert.strictEqual(this.$('p').text().trim(), '147.5')
})
