<template>
  <Title/>
  <Nav/>
  <router-view/>
</template>

<script>
import Title from './components/title'
import Nav from './components/nav'
export default {
  name: 'App',
  components: {
    Title,
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
