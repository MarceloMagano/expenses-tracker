const Router = require('koa-router')
const ExpensesController = require('../controllers/expenses')

const router = new Router()

router.get('/', ExpensesController.all)

module.exports = router.routes()
