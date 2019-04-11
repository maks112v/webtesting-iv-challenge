const express = require('express');

const server = express();

const todo = require('../models/todoModel')

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/tasks', async (req, res) => {
  const tasks = await todo.getAll();

  res.status(200).json(tasks);
});

server.post('/tasks', async (req,res) => {
  const newTask = await todo.createTask(req.body)

  res.status(201).json(newTask);
})

module.exports = server;