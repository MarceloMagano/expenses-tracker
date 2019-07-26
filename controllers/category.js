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

  async create (ctx){
    try {
      ctx.body = await Category.insert(ctx.request.body).save()
    }catch (err) {
      ctx.throw(422)
    }
  }
}

module.exports = new CategoryController()
