import Component from '@ember/component'
import {inject as service} from '@ember/service'
import {alias} from '@ember/object/computed'

export default Component.extend({
  calculator: service('rates-calculator'),
  rates: alias('calculator.rates'),
  result: function() {
    return this.getCalculator().calculate()
  }.property(
    'calculator.rates.@each.{purchase,sale}', 'calculator.currency', 'calculator.transaction', 'calculator.amount'
  ),
  actions: {
    setCurrency(currency) {
      this.getCalculator().set('currency', currency)
    },
    setTransaction(transaction) {
      this.getCalculator().set('transaction', transaction)
    },
    setAmount(amount) {
      this.getCalculator().set('amount', amount)
    }
  },
  getCalculator() {
    return this.get('calculator')
  }
})
