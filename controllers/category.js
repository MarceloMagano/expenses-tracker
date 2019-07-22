const Category = require('../models/category.model')

class CategoryController {
  /**
   *
   * @param ctx Koa Context
   * @returns {Promise<void>}
   */
  async all (ctx) {
    ctx.body = await Category.find()
  }
}

module.exports = new CategoryController()
