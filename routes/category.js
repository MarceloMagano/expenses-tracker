const Router = require('koa-router')
const CategoryController = require('../controllers/category')
const jwt = require('../middleware/jwt')
const router = new Router()
router.prefix('/api/category')

// GET /api/category
router.get('/', jwt, CategoryController.all)
// POST /api/category
router.post('/', jwt, CategoryController.create)
// DEL /api/category/id
router.del('/', jwt, CategoryController.delete)

module.exports = router
