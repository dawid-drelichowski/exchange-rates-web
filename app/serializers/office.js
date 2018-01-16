import FirebaseSerializer from 'emberfire/serializers/firebase'

export default FirebaseSerializer.extend({
  primaryKey: 'name',
  attrs: {
    map: {embedded: 'always'}
  }
})
