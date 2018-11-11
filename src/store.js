import Vue from "vue";
import Vuex from "vuex";
let axios = require("axios");

const api = "https://jsonplaceholder.typicode.com/users";

const UPDATE_USERS = "UPDATE_USERS";
const SET_LOADING = "SET_LOADING";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    time: "1234",
    players: [
      { name: "fred", hole: 1, score: -4, update: "2345" },
      { name: "jim", hole: 1, score: -3, update: "2345" },
      { name: "alan", hole: 4, score: -1, update: "3456" },
      { name: "greg", hole: 6, score: -1, update: "6543" }
    ]
  },
  mutations: {
    [UPDATE_USERS](state, users) {
      console.log("update players", users);
      state.players = users;
      console.log(state);
    },
    [SET_LOADING](state, loading) {
      state.loading = loading;
    }
  },
  getters: {
    players(state) {
      return state.players;
    }
  },
  actions: {
    getUsers({ commit }) {
      commit(SET_LOADING, true);
      axios
        .get(api)
          .then((userData) => {
            commit(UPDATE_USERS, userData.data)
            commit(SET_LOADING, false)
          })
    }
  }
});
