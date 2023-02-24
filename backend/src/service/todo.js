const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async todo => {
      return await repository.addTodo(todo)
    },
    deleteTodo: async index => {
      return await repository.deleteTodo(index)
    },
    clearTodos: async index => {
      return await repository.clearTodos(index)
    }
  };
};

module.exports = todoService;