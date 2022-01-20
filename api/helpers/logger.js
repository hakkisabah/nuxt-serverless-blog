const logModel = require('../models/logger')
const logger = async (data) => {
  try {
    await logModel.saveLog(data)
  } catch (e) {
    throw e
  }
}
exports.logger = logger
