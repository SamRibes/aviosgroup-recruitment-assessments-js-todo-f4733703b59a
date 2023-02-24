
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it('should insert the todos', async () => {
    const todo = {
      task: "Something"
    };
    const expected = {
      todos: [{
        "task": "This is a todo example"
      },
      todo]
    };
    const res = await repository.addTodo(todo);
    const actual = await repository.getTodos();

    expect(res).toBe(true);
    expect(actual).toEqual(expected);
  });
});