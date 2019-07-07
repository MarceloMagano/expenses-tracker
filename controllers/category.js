const Category = require('../models/category.model')

class CategoryController {
  async all (ctx) {
    ctx.body = await Category.find()
  }
}

module.exports = new CategoryController()
