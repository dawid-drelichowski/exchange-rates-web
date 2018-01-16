import {moduleForModel, test} from 'ember-qunit'
import {get} from "@ember/object"
import maps from 'exchange-rates-web/mirage/fixtures/maps'

moduleForModel('map', 'Unit | Model | map', {
  needs: ['model:office']
})

test('should have assigned properties', function(assert) {
  const map = maps[0],
    model = this.subject(map)
  
  assert.strictEqual(model.get('latitude'), map.latitude)
  assert.strictEqual(model.get('longitude'), map.longitude)
  assert.strictEqual(model.get('title'), map.title)
  assert.strictEqual(model.get('description'), map.description)
})

test('should be a part of an office', function(assert) {
  const Map = this.store().modelFor('map'),
    relationship = get(Map, 'relationshipsByName').get('office')

  assert.strictEqual(relationship.key, 'office')
  assert.strictEqual(relationship.kind, 'belongsTo')
})