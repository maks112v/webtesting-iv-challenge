const request = require('supertest');

const server = require('./server')

describe('server.js', () => {
  it('should run test', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('/GET Tasks', () => {
    it('return 200', async () => {
      const res = await request(server).get('/tasks')
        
      expect(res.status).toBe(200)
    })

    it('return 200', async () => {
      const res = await request(server).get('/')
        
      expect(res.status).toBe(200)
    })
  })
})