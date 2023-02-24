const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async todo => {
      return await repository.addTodo(todo)
    }
  };
};

module.exports = todoService;