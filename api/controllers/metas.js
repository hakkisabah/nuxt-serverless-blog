const defaultMeta = require('../mocks/defaultmeta.json')
const getdefaultMetas = async () => {
  return await defaultMeta
}
exports.getdefaultMetas = getdefaultMetas

const defaultMetas = async (req, res) => {
  const gettedMetas = await getdefaultMetas()
  res.json(gettedMetas)
}

exports.defaultMetas = defaultMetas
