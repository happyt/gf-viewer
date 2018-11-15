# gf-reader

## Project setup
- latest node, v10
- latest vue cli, yarn global add @vue/cli
- cd ..
- vue create gf-reader - vuex, store, lint template
- cd gf-reader
- yarn serve

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Load remote url json
- storeSimpleJsonp version
- convert to axios
- npm i axios
- read from url

https://alligator.io/vuejs/vue-socketio/

- yarn add socket.io-client vue-socket.io
- add to a component, PingSocket.vue
- add to vuex

Vuex version wraps a simple string to an array[0]

- Using  this._vm.$socket.emit(MESS, 'central connected')
- An alternative is to, export default new Vue({ in main.js
- Then import vm from './main.js'
- and then, vm.$socket.emit('event', 'payload')
- PingSocket component largely direct to socket
- CentralSocket largely via store actions

- using project - 'chat-eg' for messages
