import {moduleForComponent, test} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import maps from '../../fixtures/maps'

moduleForComponent('exchange-office-map', 'Integration | Component | exchange office map', {
  integration: true
})

test('should be empty when no properties and child components passed', function(assert) {
  this.render(hbs`{{exchange-office-map}}`)

  assert.expect(1)
  assert.strictEqual(this.$().text().trim(), '')
})

test('should render child components when child components and no properties passed', function(assert) {
  const childComponent = 'Child component'

  this.set('childComponent', childComponent)
  this.render(hbs`{{#exchange-office-map}}{{childComponent}}{{/exchange-office-map}}`)

  assert.expect(1)
  assert.strictEqual(this.$().text().trim(), childComponent)
})

test("should render exchange-office-map when map property passed", function(assert) {
  const map = maps[0]

  this.set('map', map)
  this.render(hbs`{{exchange-office-map map=map}}`)

  const text = this.$().text().trim()

  assert.expect(2)
  assert.ok(text.includes(map.title))
  assert.ok(text.includes(map.description))
})