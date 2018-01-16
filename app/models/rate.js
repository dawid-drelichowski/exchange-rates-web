import DS from 'ember-data'

export default DS.Model.extend({
  country: DS.attr('string'),
  currency: DS.attr('string'),
  purchase: DS.attr('number'),
  sale: DS.attr('number')
})
