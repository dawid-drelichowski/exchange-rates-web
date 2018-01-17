import {moduleForModel, test} from 'ember-qunit'
import offices from '../../fixtures/offices'

moduleForModel('office', 'Unit | Serializer | office', {
  needs: ['serializer:office', 'model:map']
})

test('should serialize record', function(assert) {
  const office = {...offices[0], map: null}

  assert.propEqual(this.subject(office).serialize(), office)
})
