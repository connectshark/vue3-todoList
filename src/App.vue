<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@font-face{
  font-family: 'Noto Sans TC';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
}
#app {
  font-family: 'Noto Sans TC' Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
