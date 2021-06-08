export const state = () => ({
  blogs: {},
})
export const getters = {
  getBlogs(state) {
    return state.blogs
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
    const key = Object.keys(context.state.blogs).find(
      (key) => context.state.blogs[key].slug === slug
    )
    return context.state.blogs[key]
  },
}
