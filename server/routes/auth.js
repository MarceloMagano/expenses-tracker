const Router = require('koa-router')
const AuthController = require('../controllers/auth')

const router = new Router()
router.prefix('/api/auth')

router.post('/register', AuthController.register)
router.post('/login', AuthController.authenticate)

module.exports = router
