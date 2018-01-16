import {test} from 'qunit'
import moduleForAcceptance from 'exchange-rates-web/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | offices')

test('visiting /offices', function(assert) {
  visit('/offices')

  andThen(function() {
    assert.equal(currentURL(), '/offices')
  })
})
