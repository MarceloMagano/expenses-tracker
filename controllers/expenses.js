const Expense = require('../models/expense.model')

class ExpenseController {
  async all (ctx) {
    ctx.body = await Expense.find()
  }
}

module.exports = new ExpenseController()
