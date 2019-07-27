const Router = require('koa-router')
const CategoryController = require('../controllers/category')

const router = new Router()
router.prefix('/api/category')

// GET /api/category
router.get('/', CategoryController.all)
// POST /api/category
router.post('/', CategoryController.create)
// DEL /api/category?id
router.del('/', CategoryController.delete)

module.exports = router