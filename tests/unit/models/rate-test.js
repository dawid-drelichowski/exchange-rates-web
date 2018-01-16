import {moduleForModel, test} from 'ember-qunit'
import rates from 'exchange-rates-web/mirage/fixtures/rates'

moduleForModel('rate', 'Unit | Model | rate')

test('should have assigned properties', function(assert) {
  const rate = rates[0],
    model = this.subject(rate)

  assert.strictEqual(model.get('country'), rate.country)
  assert.strictEqual(model.get('currency'), rate.currency)
  assert.strictEqual(model.get('purchase'), rate.purchase)
  assert.strictEqual(model.get('sale'), rate.sale)
})
