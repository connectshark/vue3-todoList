import { createStore } from 'vuex'
import filter from '../lib/filter'
import LS from '../lib/ls'

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

    updateTodo: (state, { index, complete, content })=>{
      state.toDos[index].content = content
      state.toDos[index].complete = complete
    }
  },
  actions: {
    init: ({ commit }) => {
      commit('setToDos', LS.load('toDos'))
    },
    taskComplete: ({ commit, state }, index) => {
      const content = state.toDos[index].content
      const complete = !state.toDos[index].complete
      commit('updateTodo', {
        content,
        complete,
        index
      })
    }
  },
  getters: {
    taskFilter: state => name => {
      return filter[name](state.toDos).map(todo => state.toDos.indexOf(todo))
    }
  }
})

export default store