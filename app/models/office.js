import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  map: DS.belongsTo('map', {async: false})
})