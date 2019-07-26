const Router = require('koa-router')
const ExpensesController = require('../controllers/expenses')

const router = new Router()

router.get('/', ExpensesController.all)
router.get( '/:id', ExpensesController.expenseById)

module.exports = router
