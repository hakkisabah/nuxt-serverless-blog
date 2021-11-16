<template>
  <v-app>
    <v-container>
      <h1>{{ blogData }}</h1>
    </v-container>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const blogslug = params.blogslug // When calling /abc the slug will be "abc"
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    return { blogslug }
  },
  data() {
    return {
      blogData: Object,
    }
  },
  async created() {
    this.blogData = await this.$store.dispatch('getBlog', this.blogslug)
    if (!this.blogData) {
      return this.$router.push('/error')
    }
  },
}
</script>

<style scoped></style>
