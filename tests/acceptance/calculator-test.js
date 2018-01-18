import {test} from 'qunit'
import moduleForAcceptance from '../helpers/module-for-acceptance'
import rates from '../fixtures/rates'

const url = '/calculator'

moduleForAcceptance('Acceptance | calculator', {
  beforeEach() {
    setUpFixtures({rates})
  }
})

test('should render calculator', function(assert) {
  visit(url)
  andThen(() => {
    assert.expect(5)
    assert.strictEqual(currentURL(), url)
    assert.strictEqual(find('select#rates-calculator-currency option').length, 3)
    assert.strictEqual(find('select#rates-calculator-transaction option').length, 2)
    assert.strictEqual(find('input[type="number"]').val(), '0')
    assert.strictEqual(find('p').text(), '0')
  })
})

test('should properly calculate', function(assert) {
  visit(url)
  fillIn('input[type="number"]', 8)
  fillIn('select#rates-calculator-currency', 'EUR')
  fillIn('select#rates-calculator-transaction', 'sale')
  andThen(() => {
    assert.expect(2)
    assert.strictEqual(currentURL(), url)
    assert.strictEqual(find('p').text().trim(), '168')
  })
})
