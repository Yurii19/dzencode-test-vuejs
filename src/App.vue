<template>
  <TopMenu />
  <img alt="Vue logo" src="./assets/logo.png">
  <button type="button" class="btn btn-primary">Primary</button>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/TopMenu.vue'
//import HelloWorld from './components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    // HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
