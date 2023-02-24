
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: todo => {
    todoList.todos.push(todo);
    return Promise.resolve(true);
  }
};