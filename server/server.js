const Koa = require('koa')
// const Router = require('koa-router')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const routing = require('./routes')

require('dotenv').config()

const app = new Koa()
// const router = new Router()

app.use(bodyParser())

if (process.env.NODE_ENV === 'development') {
  app.use(logger())
}

// routes
// require('./routes')(router)
// app.use(router.routes())

routing(app)

module.exports = app
