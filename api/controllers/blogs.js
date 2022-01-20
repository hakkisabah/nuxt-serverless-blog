const blogsMock = require('../mocks/blog.json')
const getBlogs = async () => {
  return await blogsMock
}
exports.getBlogs = getBlogs

const blogs = async (req, res) => {
  const gettedBlog = await getBlogs()
  res.json(gettedBlog)
}

exports.blogs = blogs
