import DS from 'ember-data'

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  office: DS.belongsTo('office')
})
