const axios = require('axios')
export const sitemap = async () => {
  const { data } = await axios.get(`${process.env.apidomain}sitemap`)
  return data
}
