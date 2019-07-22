const Expense = require('../models/expense.model')

class ExpenseController {
  /**
   * Get all
   * @param ctx Koa Context
   * @returns {Promise<void>}
   */
  async all (ctx) {
    ctx.body = await Expense.find()
  }

  /**
   * Get Expense by Id
   * @param ctx Koa context
   * @returns {Promise<void>}
   */
  async expenseById (ctx) {
    ctx.body = await Expense.findById(ctx.params.id)
  }
}

module.exports = new ExpenseController()
