import {test} from 'qunit'
import moduleForAcceptance from 'exchange-rates-web/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | rates')

test('visiting /', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/')
  })
})
