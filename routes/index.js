// module.exports = router => {
//   router.use('/category', require('./category'))
//   router.use('/expenses', require('./expenses'))
//   router.use('/auth', require('./auth'))
// }

const routesLoader = require('../utils/routesLoader')

/*
 * https://github.com/jsnomad/koa-restful-boilerplate
 */
module.exports = function (app) {
  routesLoader(`${__dirname}`).then(files => {
    files.forEach(route => {
      app.use(route.routes()).use(
        route.allowedMethods({
          throw: true
        })
      )
    })
  })
}