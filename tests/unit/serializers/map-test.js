import {moduleForModel, test} from 'ember-qunit'
import maps from '../../fixtures/maps'

moduleForModel('map', 'Unit | Serializer | map', {
  needs: ['serializer:map', 'model:office']
})

test('should serialize record', function(assert) {
  const map = {...maps[0], office: null}

  assert.propEqual(this.subject(map).serialize(), map)
})
