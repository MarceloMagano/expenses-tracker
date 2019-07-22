const Router = require('koa-router')
const router = new Router()
const CategoryController = require('../controllers/category')

router.get('/', CategoryController.all)

module.exports = router.routes()
