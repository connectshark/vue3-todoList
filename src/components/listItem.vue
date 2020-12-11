<template>
  <li class="list-item">
    <p class="content">{{todo.content}}</p>
    <div class="icon" @click="check(index)">
      <span class="check" v-if="todo.complete"></span>
      <span class="circle" v-else></span>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['index'],
  setup (props) {
    const store = useStore()
    const todo = computed(() => store.state.toDos[props.index])
    const check = index => {
      store.dispatch('taskComplete', index)
    }
    return {
      check,
      todo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/base.scss';
.list-item{
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 20px 30px;
  box-shadow: 2px 5px 10px #ddd;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .content{
    font-size: 20px;
    line-height: 1.5;
  }
  .icon{
    .circle{
      @include circle;
    }
    .check{
      @include circle;
      background-color: $main;
      position: relative;
      &::before{
        content: '';
        display: block;
        position: absolute;
        width: 20px;
        height: 10px;
        border-radius:0 0 0 3px;
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
        transform: rotate(-45deg);
        left: 3px;
        top: 5px;
      }
    }
  }
}
</style>