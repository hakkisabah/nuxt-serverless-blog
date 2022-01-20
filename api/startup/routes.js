module.exports = (app) => {
  const routes = require('../routes/index')
  app.use('/', routes)
}
