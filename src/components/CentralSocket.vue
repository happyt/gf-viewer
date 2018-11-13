<template>
  <div>
    <p v-if="isConnected" >Central connection to the server!</p>
    <p>Vuex message from server: "{{centralMessage}}"</p>
    <button @click="sendServer()">Test message</button>
    <button @click="sendCentral('qwertyuiop')">Test central</button>
  </div>
</template>
<script>
const MESS = 'messageChannel'

export default {
  name: 'CentralSocket',
  props: {
    msg: String
  },
    computed: {
      isConnected() { 
        return this.$store.getters.oneConnected
      },
      centralMessage() { 
        return this.$store.getters.oneMessage
      }
  },
    methods: {
      sendServer() {
        this.$socket.emit(MESS, 'Caramba')
      },
      sendCentral(msg) {
        this.$store.dispatch('sendMessage', msg)
      }
  }
}
</script>