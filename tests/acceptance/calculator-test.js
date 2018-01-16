import {test} from 'qunit'
import moduleForAcceptance from 'exchange-rates-web/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | calculator')

test('visiting /calculator', function(assert) {
  visit('/calculator')

  andThen(function() {
    assert.equal(currentURL(), '/calculator')
  })
})
