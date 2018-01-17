import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import offices from '../../fixtures/offices'

moduleForComponent('exchange-office', 'Integration | Component | exchange office', {
  integration: true
})

test('should be empty when no properties and child components passed', function(assert) {
  this.render(hbs`{{exchange-office}}`)

  assert.strictEqual(this.$().text().trim(), '')
})

test('should render child components when child components and no properties passed', function(assert) {
  const childComponent = 'Child component'

  this.set('childComponent', childComponent)
  this.render(hbs`{{#exchange-office}}{{childComponent}}{{/exchange-office}}`)

  assert.strictEqual(this.$().text().trim(), childComponent)
})

test("should render exchange-office when office property passed", function(assert) {
  const office = offices[0]
  
  this.set('office', office)
  this.render(hbs`{{exchange-office office=office}}`)

  const text = this.$().text().trim()

  assert.expect(4)
  assert.ok(text.includes(office.name))
  assert.ok(text.includes(office.street))
  assert.ok(text.includes(office.city))
  assert.ok(text.includes(office.phoneNumber))
})
