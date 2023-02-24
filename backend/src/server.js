const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo', async (req, res) => {
      const todo = req.body;
      try {
        await todoService.addTodo(todo);
        res.status(201).send();
      } catch (e) {
        console.error(e);
        res.status(500).send();
      }
    }
  );

  server.post('/api/todo/clear', async (req, res) => {
      try {
        await todoService.clearTodos();
        res.status(201).send();
      } catch (e) {
        console.error(e);
        res.status(500).send();
      }
    }
  );

  server.delete('/api/todo/:deleteIndex', async (req, res) => {
    const index = parseInt(req.params.deleteIndex);
    try {
      await todoService.deleteTodo(index);
      res.status(201).send();
    } catch (e) {
      console.error(e);
      res.status(500).send();
    }
  }
);

  return server;
};
module.exports = server;