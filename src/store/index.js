const { createStore } = require("vuex")

const store = createStore({
  state: {
    toDos: [
      { content: 'todo-content', complete: true },
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: false },
    ]
  },
  mutations: {
    setTodos: (state, todo) => {
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
    },
  }
})

export default store