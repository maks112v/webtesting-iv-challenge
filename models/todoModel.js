const db = require('../dbconfig')

module.exports = {
  createTask,
  getAll,
  deleteTask
}

async function createTask(task) {
  const newTask = await db('todo').insert(task)

  return newTask
}

async function getAll(){
  const todos = await db('todo')

  return todos
}

async function deleteTask(id){
  const deleted = await db('todo').delete({id})

  return deleted
}
