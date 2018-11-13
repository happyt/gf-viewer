<template>
  <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
    <button @click="pingStartStop()">PStart-Stop</button>
  </div>
</template>

<script>
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
      console.log("connected")
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
      this.$socket.emit('centralChannel', 'PING!')
    },
    pingStartStop() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('centralChannel', 'PINGo')
    }
  }
}
</script>