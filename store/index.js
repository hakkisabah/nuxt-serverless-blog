export const state = () => ({
  defaultMetas: [],
  blogs: [],
  timelineBlogLimit: 4,
})
export const getters = {
  getBlogs(state) {
    return state.blogs
  },
  getMetas(state) {
    return state.defaultMetas
  },
  getTimeLineLimit(state) {
    return state.timelineBlogLimit
  },
  getLimitedBlogs(state) {
    return state.blogs.filter((blog, index) => {
      if (index < state.timelineBlogLimit) {
        return blog
      }
    })
  },
  getLastBlogForIndexPage(state) {
    const title = state.blogs[state.blogs.length - 1].title // get last blog title
    const image = state.blogs[state.blogs.length - 1].img // get last blog image
    return { title, image }
  },
}
export const mutations = {
  loadBlogs(state, blogs) {
    state.blogs = blogs
  },
  loadMetas(state, metas) {
    state.defaultMetas = metas
  },
}
export const actions = {
  async nuxtServerInit(context) {
    const defaultMetas = (
      await this.$axios.get(`${process.env.apidomain}metas/getdefault`)
    ).data // require('../mocks/defaultmeta.json')
    context.commit('loadMetas', defaultMetas)
    const { data } = await this.$axios.get(`${process.env.apidomain}blogs`) // require('../mocks/blog.json')
    context.commit('loadBlogs', data)
  },
  getBlog(context, slug) {
    const findedBlog = context.state.blogs.find((blog) => blog.slug === slug)
    return findedBlog
  },
}
