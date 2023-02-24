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

  return server;
};
module.exports = server;