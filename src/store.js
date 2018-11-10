import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: '1234',
    players: [
      { name: 'fred', hole: 1, score: -4, update: '2345' },
      { name: 'jim', hole: 1, score: -3, update: '2345' },
      { name: 'alan', hole: 4, score: -1, update: '3456' },
      { name: 'greg', hole: 6, score: -1, update: '6543' }      
    ]
  },
  mutations: {

  },
  actions: {

  }
})
