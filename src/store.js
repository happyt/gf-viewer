import Vue from "vue";
import Vuex from "vuex";
let axios = require("axios");

const api = "https://jsonplaceholder.typicode.com/users";

const UPDATE_USERS = "UPDATE_USERS";
const SET_LOADING = "SET_LOADING";
const SOCKET_SEND = "SOCKET_SEND";

const MESS = 'messageChannel'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    time: "1234",
    centralConnection: false,
    centralMessage: 'apple',
    players: [
      { name: "fred", hole: 1, score: -4, update: "2345" },
      { name: "jim", hole: 1, score: -3, update: "2345" },
      { name: "alan", hole: 4, score: -1, update: "3456" },
      { name: "greg", hole: 6, score: -1, update: "6543" }
    ]
  },
  mutations: {
    UPDATE_USERS(state, users) {
      console.log("update players", users)
      state.players = users
      console.log('state', state)
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SOCKET_CONNECT(state) {
      console.log('central connected')
      state.centralConnection = true
      this._vm.$socket.emit(MESS, 'central connected')
    },
    SOCKET_SEND(state, message) {
      console.log('sending central')
      this._vm.$socket.emit(MESS, message)
    },

    SOCKET_DISCONNECT(state) {
      state.centralConnection = false;
    },

    SOCKET_MESSAGECHANNEL(state, message) {
      console.log("YYYY: ", message[0])
      state.centralMessage = message[0]
    },
    SOCKET_COMMANDCHANNEL(state, message) {
      console.log("XXXX: ", message[0])
      state.centralMessage = message[0]
    }
  },
  getters: {
    players(state) {
      return state.players;
    },
    oneConnected(state) {
      return state.centralConnection;
    },
    oneMessage(state) {
      return state.centralMessage;
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
    },
    sendMessage({ commit }, msg) {
      commit(SOCKET_SEND, msg)       
    }
  }
});
