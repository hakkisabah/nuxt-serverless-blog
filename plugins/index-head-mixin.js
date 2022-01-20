export default {
  props: {
    titleObject: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      blogs: [],
    }
  },
  head() {
    const { title, image } = this.$store.getters.getLastBlogForIndexPage
    const path = this.$route.fullPath
    const limitedTitleForDescription = this.blogs
      .map((blog) => blog.title)
      .join(',')
    return {
      title,
      titleTemplate: '%s - ' + this.titleObject.titleTemplate,
      meta: this.$dynamicMetaCreator({
        image,
        path,
        limitedTitleForDescription,
      }),
    }
  },
  async beforeCreate() {
    this.blogs = await this.$store.getters.getLimitedBlogs
  },
}
