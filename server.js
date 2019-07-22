const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')

require('dotenv').config()

const app = new Koa()
const router = new Router()

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

// routes
require('./routes')(router)
app.use(router.routes())

module.exports = app
