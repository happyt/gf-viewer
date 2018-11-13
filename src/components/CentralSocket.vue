<template>
  <div>
    <p v-if="isConnected" >Central connection to the server!</p>
    <p>Vuex message from server: "{{centralMessage}}"</p>
  </div>
</template>
<script>
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
  }
}
</script>