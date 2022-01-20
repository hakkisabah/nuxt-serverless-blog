export default {
  data() {
    return {
      blogData: Object,
    }
  },
  head() {
    // We must catch to error while head method process
    if (!this.blogData) return this.$router.push('/error')
    const path = this.$route.fullPath
    return {
      title: this.blogData.title,
      meta: this.$dynamicMetaCreator({
        image: this.blogData.img,
        path,
        limitedTitleForDescription: this.blogData.content,
      }),
    }
  },
  async created() {
    try {
      const slug = this.$route.params.blogslug
      this.blogData = await this.$store.dispatch('getBlog', slug)
    } catch (e) {
      return this.$router.push('/error')
    }
  },
  jsonld() {
    const path = this.$route.fullPath
    const blogData = this.blogData
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'Blog',
        '@id': `${process.env.domain}${path}`,
      },
      headline: blogData.title,
      description: blogData.content,
      image: blogData.img, // vue-meta not accept an array , giving replace error
      author: {
        '@type': 'Person',
        name: blogData.author,
        url: `${process.env.domain}/user/${blogData.username}`,
      },
      datePublished: blogData.createdAt,
      dateModified: blogData.updatedAt,
      publisher: {
        '@type': 'Organization',
        name: `${process.env.domain}`.replace(/https?:\/\//g, ''),
        logo: {
          '@type': 'ImageObject',
          url: blogData.img,
        },
      },
    }
  },
}
