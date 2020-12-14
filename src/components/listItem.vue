<template>
  <li class="list-item">
    <div class="icon" @click="check(index)">
      <span :class="[todo.complete ? 'check' : 'circle']"></span>
    </div>
    <input type="text"
      class="todo"
      v-if="modify"
      v-model.trim="content"
      v-focus
      @blur="modifyItem"
      @keyup.esc="modifyItem"
      @keyup.enter="modifyItem">
    <p class="content"
      v-else
      :class="{complete : todo.complete}"
      @dblclick="modify = !modify">{{todo.content}}</p>
    <div class="delete" @click="isShow = !isShow">
      <span class="material-icons false">clear</span>
    </div>
  </li>
  <Dialog
    v-if="isShow"
    :title="'是否要刪除' + todo.content"
    @resultHandler="resultHandler"/>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import Dialog from './dialog'

export default {
  props: ['index'],
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  components: {
    Dialog
  },
  setup (props) {
    const store = useStore()
    const todo = computed(() => store.state.toDos[props.index])
    const content = ref('')
    const modify = ref(false)
    const isShow = ref(false)
    const check = index => {
      store.dispatch('taskComplete', index)
    }
    watch(modify, newValue => {
      if (newValue) {
        content.value = todo.value.content
      }
    })

    const modifyItem = () => {
      store.commit('updateTodo', {
        index: props.index,
        content: content.value,
        complete: todo.value.complete
      })
      modify.value = false
    }

    const resultHandler = res => {
      if (res) {
        store.commit('removeTodo', props.index)
      }
      isShow.value = false
    }

    return {
      check,
      modify,
      isShow,
      todo,
      content,
      resultHandler,
      modifyItem
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
  justify-content: flex-start;
  margin-bottom: 20px;
  .content{
    font-size: 20px;
    line-height: 1.5;
  }
  .complete{
    text-decoration: line-through;
  }
  .todo{
    width: 80%;
    border: 1px solid #ccc;
    line-height: 1.5;
    box-sizing: border-box;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
  }
  .icon{
    margin: 0 20px 0 0;
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
  .delete{
    margin-left: auto;
    border-radius: 50%;
    border: 1px solid #ccc;
    &:active{
      border: 1px solid #333;
      .false{
        color: #333;
      }
    }
    .false{
      font-size: 20px;
      line-height: 1;
      vertical-align: middle;
      color: #ccc;
    }
  }
}
</style>