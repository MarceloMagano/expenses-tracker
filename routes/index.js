module.exports = router => {
  router.use('/category', require('./category'))
  router.use('/expenses', require('./expenses'))
}
