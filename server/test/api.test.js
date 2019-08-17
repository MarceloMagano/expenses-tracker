const app = require('../server')
const supertest = require('supertest')
const { expect, should } = require('chai')

const temp = {}
const request = supertest.agent(app.listen())
should()
temp.email = 'test1@m.com'

/**
 * Auth
 */

// Register
describe('POST Register user', () => {
  it('should create a new user', done => {
    request.post('/api/auth/register')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: temp.email,
        password: 'password',
        name: 'Test User'
      })
      .expect(200, {
        email: temp.email,
        name: 'Test User'
      }, done())
  })
})

describe('POST Register user with same email', () => {
  it('should fail at creating a new user', done => {
    request.post('/api/auth/register')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: temp.email,
        password: 'password',
        name: 'Test User'
      })
      .expect(400, 'Already Exists', done())
  })
})

// Login
describe('POST Authenticate user', () => {
  it('should authenticate by returning jwt token', done => {
    request.post('/api/auth/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: temp.email,
        password: 'password'
      })
      .expect(200, (err, res) => {
        if (err) { done(err) }
        temp.token = res.body.token
        done()
      })
      // .expect(200)
      // .then(res => {
      //   temp.token = res.body.token
      //   expect(res.body.message, 'Login with success')
      // })
  })
})

// Failed authentication
describe('GET Failed authentication', () => {
  it('should fail to authenticate', done => {
    request.post('/api/category')
      .set('Accept', 'application/json')
      .expect(401, 'Authentication Error', done())
  })
})

/**
 * Category
 */

// Get all categories
describe('GET All Categories', () => {
  it('should get all categories', done => {
    request.post('/api/category')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${temp.token}`)
      .expect(200, (err, res) => {
        if (err) { done(err) }
        temp.category = res.body[0].name
        expect(res.body.lenght).to.be.at.least(1)
        done()
      })
  })
})

/**
 * Expenses
 */

// Create
// describe('POST Craete Expense', () => {
//   it('should create a new expense', done => {
//     request.post('/api/expense')
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${temp.token}`)
//       .send({
//         email: 'test@m.com',
//         password: 'password',
//         name: 'Test User'
//       })
//       .expect(200, (err, res) => {
//         if (err) { done(err) }
//         temp.token = res.body.token
//         done()
//       })
//   })
// })
