const User = require('../models/users.model')

class AuthController {
  /**
   * Register user
   * @param {ctx} Koa Context
   */
  async register(ctx) {
    //create new user
  }

  /**
   * Login
   * @param {ctx} Koa Context
   */
  async authenticate(ctx) {
    // login
  }
}

module.exports = new AuthController()
