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
      LS.save('toDos', state.toDos)
    },

    addTodo: (state, todo) => {
      state.toDos.unshift(todo)
      LS.save('toDos', state.toDos)
    },

    removeTodo: (state, index) => {
      state.toDos.splice(index, 1)
      LS.save('toDos', state.toDos)
    },

    updateTodo: (state, { index, complete, content })=>{
      state.toDos[index].content = content
      state.toDos[index].complete = complete
      LS.save('toDos', state.toDos)
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