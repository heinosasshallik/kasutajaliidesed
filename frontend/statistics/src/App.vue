<template>
  <div id="app">
    <Dashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
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
  margin-top: 0px;
}
html {
  padding: 0px;
  margin: 0px;
}
</style>
