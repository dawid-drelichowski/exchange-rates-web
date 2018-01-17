import {moduleFor, test} from 'ember-qunit'
import makeObjectsArray from '../../helpers/make-objects-array'
import rates from '../../fixtures/rates'

moduleFor('service:rates-calculator', 'Unit | Service | rates calculator', {})

test('calculate should return 0 by default', function(assert) {
  const service = this.subject()
  
  assert.strictEqual(service.calculate(), 0)
})

test(
  'calculate should return 0 when proper rates, amount and transaction, but nonexistent currency',
  function(assert) {
    const service = this.subject()

    service.set('rates', makeObjectsArray(rates))
    service.set('amount', 5)
    service.set('currency', 'FBI')
    
    assert.strictEqual(service.calculate(), 0)
  }
)

test(
  'calculate should return 0 when proper rates, amount and currency, but nonexistent transaction',
  function(assert) {
    const service = this.subject()

    service.set('rates', makeObjectsArray(rates))
    service.set('amount', 5)
    service.set('currency', 'USD')
    service.set('transaction', 'disposal')
    
    assert.strictEqual(service.calculate(), 0)
  }
)

test(
  'calculate should return proper value, when proper rates, amount, currency and transaction',
  function(assert) {
    const service = this.subject()

    service.set('rates', makeObjectsArray(rates))
    service.set('amount', 5)
    service.set('currency', 'EUR')
    service.set('transaction', 'sale')
    
    assert.strictEqual(service.calculate(), 105)
  }
)
