const Expense = require('../models/expense.model')

class ExpenseController {
  /**
   * Get all
   * @param ctx Koa Context
   * @returns {Promise<void>}
   */
  async all(ctx) {
    ctx.body = await Expense.find()
  }

  /**
   * Get Expense by Id
   * @param ctx Koa context
   * @returns {Promise<void>}
   */
  async expenseById(ctx) {
    try {
      ctx.body = await Expense.findById(ctx.params.id)
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }

  /**
   * Create New Expense
   * @param {ctX} Koa Context
   */
  async createExpense(ctx) {
    try {
      ctx.body = await new Expense(ctx.request.body).save()
    } catch (err) {
      ctx.throw(422)
    }
  }

  /**
   * Edit Expense
   * @param {ctx} Koa Context
   */
  async editExpense(ctx) {
    try {
      const expense = await Expense.findByIdAndUpdate(ctx.params.id, ctx.request.body)
      if (!expense) {
        ctx.throw(404)
      }
      ctx.body = expense
    }
    catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }


  /**
   * Delete expense
   * @param {ctx} Koa Context
   */
  async delete(ctx) {
    try {
      const expense = await Expense.findByIdAndRemove(ctx.params.id)
      if (!expense) {
        ctx.throw(404)
      }
      ctx.body = expense
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404)
      }
      ctx.throw(500)
    }
  }
}

module.exports = new ExpenseController()
