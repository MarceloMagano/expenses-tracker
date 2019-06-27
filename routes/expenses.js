const Router = require('koa-router')
const router = new Router()
const ExpensesController = require('../controllers/expenses')

router.get('/', ExpensesController.hello)

module.exports = router.routes()
