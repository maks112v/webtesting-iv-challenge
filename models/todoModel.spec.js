
const db = require('../dbconfig')

const todo = require('./todoModel')

describe('todo Model', () => {
  afterEach(async () => {
    await db('todo').truncate();
  })
  describe('insert', () => {
    it('insert task', async () => {
      await todo.createTask({name:'test'})
      await todo.createTask({name:'tested'})

      const tasks =  await todo.getAll();
      expect(tasks).toHaveLength(2)
    })
  })

  describe('delete task', () => {
    it('delete added task', async () => {
      const newTask = await todo.createTask({name:'test'})
      expect(newTask).toEqual([1])

      const removeTask = await todo.deleteTask(1)
      expect(removeTask).toBe(1)
    })

    it('delete added task', async () => {
      await todo.createTask({name:'firsttask'})
      const newTask = await todo.createTask({name:'test'})
      expect(newTask).toEqual([2])

      const removeTask = await todo.deleteTask(2)
      expect(removeTask).toBe(2)
    })
  })
  
})