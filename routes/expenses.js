const Router = require('koa-router')
const ExpensesController = require('../controllers/expenses')

const router = new Router()
router.prefix('/api/expense')

// GET /api/expense
router.get('/', ExpensesController.all)
// GET /api/expense?id=
router.get( '/:id', ExpensesController.expenseById)
// POST /api/expense
router.post('/', ExpensesController.createExpense)
// PUT /api/expense?id=
router.put('/:id', ExpensesController.editExpense)
// DEL /api/expense?id=
router.del('/:id', ExpensesController.delete)

module.exports = router
