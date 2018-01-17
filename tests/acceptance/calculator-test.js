import {test} from 'qunit'
import moduleForAcceptance from '../helpers/module-for-acceptance'
import rates from '../fixtures/rates'

moduleForAcceptance('Acceptance | calculator', {
  beforeEach() {
    setUpFixtures({rates})
  }
})

test('should render calculator', (assert) => {
  const url = '/calculator'
  
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
