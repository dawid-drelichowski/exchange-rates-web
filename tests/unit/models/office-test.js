import {moduleForModel, test} from 'ember-qunit'
import {get} from "@ember/object"
import offices from 'exchange-rates-web/mirage/fixtures/offices'

moduleForModel('office', 'Unit | Model | office', {
  needs: ['model:map']
})

test('should have assigned properties', function(assert) {
  const office = offices[0],
    model = this.subject(office)

  assert.strictEqual(model.get('name'), office.name)
  assert.strictEqual(model.get('street'), office.street)
  assert.strictEqual(model.get('street'), office.street)
  assert.strictEqual(model.get('phoneNumber'), office.phoneNumber)
})

test('should own a map', function(assert) {
  const Office = this.store().modelFor('office'),
    relationship = get(Office, 'relationshipsByName').get('map')

  assert.strictEqual(relationship.key, 'map')
  assert.strictEqual(relationship.kind, 'belongsTo')
})
