import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      currencyKeys: [],
      rate: 0,
      euroAmount: 0
    },
    computed: {
      amount: function(){
        return this.rate*this.euroAmount
      }
    },
    mounted(){
      this.getRates();
      // this.getKeys();
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
