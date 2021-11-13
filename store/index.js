export const state = () => ({
  blogs: [],
  timelineBlogLimit: 4,
})
export const getters = {
  getBlogs(state) {
    return state.blogs
  },
  getTimeLineLimit(state) {
    return state.timelineBlogLimit
  },
}
export const mutations = {
  loadBlogs(state, blogs) {
    state.blogs = blogs
  },
}
export const actions = {
  nuxtServerInit(context) {
    const data = require('../mocks/blog.json')
    context.commit('loadBlogs', data)
  },
  getBlog(context, slug) {
    const findedBlog = context.state.blogs.find((blog) => blog.slug === slug)
    return findedBlog
  },
}
