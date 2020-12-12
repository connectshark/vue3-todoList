<template>
  <Title/>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Title from './components/title'
import Nav from './components/nav'
import Footer from './components/footer'
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {
    Title,
    Nav,
    Footer
  },
  setup () {
    const store = useStore()
    store.dispatch('init')
    return {}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.2/iconfont/material-icons.min.css');
#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  margin: auto;
  max-width: 600px;
}
input{
  font-family: 'Noto Sans TC', sans-serif;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0;
}
</style>
