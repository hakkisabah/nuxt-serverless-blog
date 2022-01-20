const bodyParser = require('body-parser')
const requestIp = require('request-ip')
const helmet = require('helmet')
const bearerToken = require('express-bearer-token')
const useragent = require('express-useragent')
const { logger } = require('../helpers/logger')
const { genRes } = require('../utils/general')

const logInfoSetup = {
  file: 'startup/setupExpress.js',
}

module.exports = (app) => {
  /* Xss & Cors Protection */
  app.use(helmet())

  app.use(useragent.express())

  // get client ip
  app.use(requestIp.mw())

  // bearer token middleware
  app.use(bearerToken())

  /* Other configurations */
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
  app.use(bodyParser.json())

  /* Helper middleware */
  app.use((req, res, next) => {
    // A helper to send response as data
    res.sendData = async (data, logInfo) => {
      const ip = req.clientIp
      try {
        const response = genRes(data, 200, data.errors || [])
        await logger(logInfo)
        return res.json(response)
      } catch (e) {
        logInfoSetup.line = 43
        logInfoSetup.clientInfo = {
          service: req.token,
          agent: req.useragent,
          ip,
        }
        logInfoSetup.logdata = e.message
        logInfoSetup.type = 'error'
        await logger(logInfoSetup)
        return res.json({ msg: 'Server error', statusCode: 500 })
      }
    }

    // A helper to send response as error
    res.sendError = async (msg, statusCode, logInfo) => {
      const ip = req.clientIp
      try {
        res.statusCode = statusCode || 404
        logInfo.clientInfo = { service: req.token, ip, agent: req.useragent }
        logInfo.logdata = logInfo.logdata ? logInfo.logdata : msg
        logInfo.type = 'error'
        await logger(logInfo)
        return res.json({ msg, statusCode: res.statusCode })
      } catch (e) {
        logInfoSetup.line = 70
        logInfoSetup.clientInfo = {
          service: req.token,
          ip,
          agent: req.useragent,
        }
        logInfoSetup.logdata = e.message
        logInfoSetup.type = 'error'
        await logger(logInfoSetup)
        return res.json({ msg: 'Server error', statusCode: 500 })
      }
    }
    next()
  })
}
