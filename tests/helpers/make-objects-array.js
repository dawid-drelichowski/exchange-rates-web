import {makeArray} from '@ember/array'
import EmberObject from '@ember/object'

export default function(array) {
  return makeArray(array.map(item => EmberObject.create(item)))
}
