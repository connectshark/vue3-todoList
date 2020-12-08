<template>
  <div id="nav">
    {{list}}
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const list = computed(() => store.state.toDos)
    return {
      list
    }
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
