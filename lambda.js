const serverlessExpress = require('@vendia/serverless-express')
const nuxt = require('./nuxtBuild')

// eslint-disable-next-line require-await
async function getServerless(event, context, app) {
  const serverlessExpressInstance = serverlessExpress({ app })
  return serverlessExpressInstance(event, context)
}

module.exports.nuxt = async (event, context) => {
  return await getServerless(event, context, nuxt)
}
