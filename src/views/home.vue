<template>
  <main class="main">
    <ul>
      <ListItem v-for="todo in toDos"
      :key="todo"
      :index="todo"/>
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
.main{
  margin-bottom: 200px;
}
</style>