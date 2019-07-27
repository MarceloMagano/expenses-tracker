const Category = require('../models/category.model')

class CategoryController {
  /**
   * Get all Categories
   * @param {ctx} Koa Context
   * @returns {Promise<void>}
   */
  async all(ctx) {
    ctx.body = await Category.find()
  }

  /**
   * Create new Category
   * @param {ctx} Koa Context
   * @returns {Promise<void>}
   */
  async create(ctx) {
    try {
      ctx.body = await new Category(ctx.request.body).save()
    } catch (err) {
      ctx.throw(422)
    }
  }

  /**
   * Delete Category by Id
   * @param {ctx} Koa Context 
   */
  async delete(ctx) {
    try {
      const category = await Category.findByIdAndRemove(ctx.request.query.id)
      if (!category) {
        ctx.throw(404)
      }
      ctx.body = category
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }
}

module.exports = new CategoryController()
