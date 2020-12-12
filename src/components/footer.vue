<template>
  <footer class="footer">
    <input
      type="text"
      placeholder="請輸入待辦事項"
      class="input"
      v-if="isClick"
      v-focus
      v-model.trim="todo"
      @keyup.enter="submitHandler">
    <button class="btn" :class="{ active : isClick }" @click="isClick = !isClick">
      <span class="material-icons icon">add</span>
    </button>
  </footer>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  setup () {
    const isClick = ref(false)
    const todo = ref('')
    const store = useStore()
    const submitHandler = () => {
      if (todo.value === '') return
      store.commit('addTodo', {
        content: todo.value,
        complete: false
      })
      todo.value = ''
    }
    watch(isClick, () => {
      todo.value = ''
    })
    return {
      isClick,
      todo,
      submitHandler
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/base.scss';
.footer{
  position: fixed;
  width: 100%;
  margin: auto;
  max-width: 600px;
  height: 100px;
  background-image: linear-gradient(to top, #fff 20%, transparent 100%);
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-around;
  .input{
    width: 100%;
    min-width: 0;
    max-width: 70%;
    border: 2px solid #ccc;
    border-radius: 15px;
    font-size: 20px;
    line-height: 2;
    padding: 10px;
    box-sizing: border-box;
    font-weight: 700;
  }
  .btn{
    border: none;
    background-color: $sub;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: 0;
    outline: none;
    transition: background-color .2s;
    &:hover{
      background-color: $main;
    }
    .icon{
      transition: transform .2s;
      transform: rotate(0deg);
      font-size: 50px;
      color: #fff;
    }
  }
  .active{
    background-color: $main;
    .icon{
      transform: rotate(45deg);
    }
  }
}
</style>