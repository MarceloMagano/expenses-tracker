const Router = require('koa-router')
const ExpensesController = require('../controllers/expenses')
const jwt = require('../middleware/jwt')
const router = new Router()
router.prefix('/api/expense')

// GET /api/expense
router.get('/', jwt, ExpensesController.all)
// GET /api/expense/id
router.get('/:id', jwt, ExpensesController.expenseById)
// POST /api/expense
router.post('/', jwt, ExpensesController.createExpense)
// PUT /api/expense/id
router.put('/:id', jwt, ExpensesController.editExpense)
// DEL /api/expense/id
router.del('/:id', jwt, ExpensesController.delete)

module.exports = router
