const mongoose = require('mongoose')
require('dotenv').config()
const { logger } = require('../helpers/logger')
const logInfo = {
  file: 'startup/db.js',
}

// eslint-disable-next-line no-useless-catch
try {
  mongoose.connect(`${process.env.DB_LOCAL_URL}${process.env.DB_COLLECTION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
    serverApi: mongoose.mongo.ServerApiVersion.v1,
  })
  logInfo.line = 17
  logInfo.clientInfo = 'blog api'
  logInfo.logdata = '[+] mongoose connected'
  logInfo.type = 'info'
  logger(logInfo)
} catch (e) {
  throw e
}
