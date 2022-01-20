const express = require('express')
const { logger } = require('../helpers/logger')
const app = express()
const logInfo = {
  file: 'src/server.js',
}
try {
  /* Setup the logger */
  require('../helpers/logger')

  /* Connect DB */
  require('../startup/db')

  require('../startup/setupExpress')(app)
  require('../startup/routes')(app)

  logInfo.line = 18
  logInfo.clientInfo = 'blog api'
  logInfo.logdata = 'blog api started'
  logInfo.type = 'info'
  logger(logInfo)
} catch (e) {
  logInfo.line = 25
  logInfo.clientInfo = 'db server'
  logInfo.logdata = e
  logInfo.type = 'error'
  logger(logInfo)
}

module.exports = app
