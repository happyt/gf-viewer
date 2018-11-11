<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     Scores
    </p>
    <div>
      <ul>
        <li v-for="pp in players" v-bind:key="pp.name">{{pp.name}}</li>
      </ul>
    </div>'
  </div>
</template>

<script>
export default {
  name: 'ShowScores',
  props: {
    msg: String
  },
    computed: {
      players() { // also possible with mapGetters(['users'])
        return this.$store.getters.players
      }
  },
  created() {
    this.$store.dispatch('getUsers')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
