const User = require('../models/users.model')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

class AuthController {
  /**
   * Register user
   * @param {*} ctx Koa Context
   */
  async register (ctx) {
    const existUser = await User.findOne({ email: ctx.request.body.email })
    if (existUser) {
      ctx.throw(400, 'Already Exists')
    }
    try {
      const user = new User(ctx.request.body)
      user.password = await bcrypt.hash(user.password, 10)
      ctx.body = await user.save()
    } catch (err) {
      console.error(err)
      ctx.throw(400, 'Invalid Data')
    }
  }

  /**
   * Login
   * @param {*} ctx Koa Context
   */
  async authenticate (ctx) {
    try {
      const user = await User.findOne({ email: ctx.request.body.email })
      if (!user) {
        ctx.throw(400, 'User Not Found')
      }
      // validate password
      if (!await bcrypt.compare(ctx.request.body.password, user.password)) {
        ctx.throw(401, 'Invalid Credentials')
      }
      // generate jwt
      const token = jsonwebtoken.sign({ email: user.email }, process.env.JWT_SECRET)

      ctx.body = { token, message: 'Login with success' }
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }
}

module.exports = new AuthController()
