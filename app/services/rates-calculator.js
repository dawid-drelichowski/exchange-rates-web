import Service from '@ember/service'

export default Service.extend({
  rates: null,
  transaction: 'purchase',
  currency: '',
  amount: 0,
  calculate() {
    const transaction = this.get('transaction'),
      currency = this.getCurrency(),
      rate = this.hasRates() ?
        this.get('rates').filter(rate => {
          return rate.get('currency') === currency
        }).get('firstObject')
        : null

    return this.get('amount') * this.getPrice(rate, transaction)
  },
  hasRates() {
    const rates = this.get('rates')
    return rates && rates.get('length')
  },
  getCurrency() {
    let currency = this.get('currency')
    
    if (currency) {
      return currency
    }
    if (this.hasRates()) {
      currency = this.get('rates').get('firstObject').get('currency')
    }
    return currency
  },
  getPrice(rate, transaction) {
    let price = 0
    
    if (rate && transaction) {
      price = rate.get(transaction) || price
    }
    return price
  }
})
