<template>
  <div id="app">
    <button>No Colored</button>
    <PlayGround/>
  </div>
</template>

<script>
import PlayGround from './components/PlayGround/PlayGround'

export default {
  name: 'app',
  components: {
    PlayGround
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
