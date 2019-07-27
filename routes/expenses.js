const Router = require('koa-router')
const ExpensesController = require('../controllers/expenses')

const router = new Router()

// GET /api/expenses
router.get('/', ExpensesController.all)
// GET /api/expenses/id
router.get( '/:id', ExpensesController.expenseById)

module.exports = router
