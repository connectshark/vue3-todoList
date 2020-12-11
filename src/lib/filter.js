const filter = {
  all: toDos => toDos,

  undo: toDos => toDos.filter(todo => !todo.complete),

  complete: toDos => toDos.filter(todo => todo.complete)
}

export default filter