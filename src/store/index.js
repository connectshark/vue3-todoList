const { createStore } = require("vuex")
import { LS } from '../lib/ls'

const store = createStore({
  state: {
    toDos: [
      { content: 'todo-content', complete: true },
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: false },
    ]
  },
  mutations: {
    setToDos: (state, todo) => {
      state.toDos = todo
    },

    addTodo: (state, todo) => {
      state.toDos.push(todo)
    },

    removeTodo: (state, index) => {
      state.toDos.splice(index, 1)
    },

    updateTodo: (state, { index, data } )=>{
      state.toDos[index].content = data.content
      state.toDos[index].complete = data.complete
    }
  },
  actions: {
    init: ({ commit }) => {
      commit('setToDos', LS.load('toDos'))
    }
  }
})

export default store