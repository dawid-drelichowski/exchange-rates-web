import {test} from 'qunit'
import moduleForAcceptance from '../helpers/module-for-acceptance'
import offices from '../fixtures/offices'
import maps from '../fixtures/maps'

const officesWithMaps = offices.map((office, index) => {
  return {...office, map: maps[index]}
})

moduleForAcceptance('Acceptance | offices', {
  beforeEach() {
    setUpFixtures({offices: officesWithMaps})
  }
})

test('should render offices with maps', (assert) => {
  const url = '/offices'

  visit(url)
  andThen(() => {
    const office = offices[0],
      map = maps[0],
      $offices = find('address'),
      officeAsText = $offices.first().text()

    assert.expect(8)
    assert.strictEqual(currentURL(), url)
    assert.strictEqual($offices.length, 2)
    assert.ok(officeAsText.includes(office.name))
    assert.ok(officeAsText.includes(office.street))
    assert.ok(officeAsText.includes(office.city))
    assert.ok(officeAsText.includes(office.phoneNumber))
    assert.ok(officeAsText.includes(map.title))
    assert.ok(officeAsText.includes(map.description))
  })
})
