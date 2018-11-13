<template>
  <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Component message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
    <button @click="pingStartStop()">Start-Stop</button>
  </div>
</template>

<script>
const MESS = 'messageChannel'
const CMND = 'commandChannel'

export default {
  
  data() {
    return {
      isConnected: false,
      socketMessage: ''
    }
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      console.log("component connected")
      this.$socket.emit(MESS, 'component connected')
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      console.log(">>>: ", data)
      this.socketMessage = data
    }
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit(MESS, 'PING!')
    },
    pingStartStop() {
      // Send the "pingServer" event to the server.
      this.$socket.emit(CMND, 'PINGo')
    }
  }
}
</script>