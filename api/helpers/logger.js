const logModel = require('../models/logger')
const logger = async (data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await logModel.saveLog(data)
  } catch (e) {
    throw e
  }
}
exports.logger = logger
