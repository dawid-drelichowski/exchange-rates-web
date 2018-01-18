import {test} from 'qunit'
import moduleForAcceptance from '../helpers/module-for-acceptance'
import rates from '../fixtures/rates'

moduleForAcceptance('Acceptance | rates', {
  beforeEach() {
    setUpFixtures({rates})
  }
})

test('should render rates', function(assert) {
  const url = '/'

  visit(url)
  andThen(() => {
    const rate = rates[0],
      $rates = find('tbody tr'),
      rateAsText = $rates.first().text()

    assert.expect(6)
    assert.strictEqual(currentURL(), url)
    assert.strictEqual($rates.length, 3)
    assert.ok(rateAsText.includes(rate.country))
    assert.ok(rateAsText.includes(rate.currency))
    assert.ok(rateAsText.includes(rate.purchase))
    assert.ok(rateAsText.includes(rate.sale))
  })
})
