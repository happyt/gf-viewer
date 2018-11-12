<template>
  <div class="home">
    <PingSocket/>
    <CentralSocket/>
    <ShowScores msg="Main page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowScores from '@/components/ShowScores.vue'
import PingSocket from '@/components/PingSocket.vue'
import CentralSocket from '@/components/CentralSocket.vue'

export default {
  name: 'home',
  components: {
    ShowScores, PingSocket, CentralSocket
  }
}
</script>
