import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      currencyKeys: [],
      rate: 0,
      euroAmount: 0,
      direction: ''
    },
    computed: {
      amount: function(){
        return this.rate*this.euroAmount
      },
      amountToEuros: function(){
        return this.euroAmount/this.rate
      }
    },
    mounted(){
      this.getRates();
      // this.getKeys();
    },
    filters: {
      rounded: function(value){
        if (isNaN(value)){
          return 0
        }
        return value.toFixed(2)
      }
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data["rates"])
      },
      // getKeys: function(){
      //   for (key of Object.keys(this.currencies)){
      //     this.currencyKeys.push(key)
        // }
      // }
    }
  })
})
