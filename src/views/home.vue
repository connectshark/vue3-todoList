<template>
  <main>
    <ul></ul>
  </main>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['state'],
  setup () {
    const store = useStore()
    const toDos = store.state.toDos
    return {
      toDos
    }
  }
}
</script>

<style lang="scss" scoped>

</style>