<template>
  <main>
    <ul>
      <ListItem v-for="(todo, index) in toDos"
      :key="index"
      :content="todo.content"
      :complete="todo.complete"
      :index="index"/>
    </ul>
  </main>
</template>

<script>
import ListItem from '../components/listItem'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: ['state'],
  components: {
    ListItem
  },
  setup () {
    const store = useStore()
    const route = useRoute()
    const toDos = computed(() => store.getters.taskFilter(route.params.state))
    return {
      toDos
    }
  }
}
</script>

<style lang="scss" scoped>

</style>