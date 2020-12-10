<template>
  <main>
    <ul>
      <ListItem v-for="(todo, index) in toDos"
      :key="index"
      :content="todo.content"
      :complete="todo.complete"/>
    </ul>
  </main>
</template>

<script>
import ListItem from '../components/listItem'
import { useStore } from 'vuex'
export default {
  props: ['state'],
  components: {
    ListItem
  },
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