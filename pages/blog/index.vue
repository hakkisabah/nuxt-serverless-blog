<template>
  <v-app>
    <BlogPageIndex :title-object="titleObject" />
  </v-app>
</template>

<script>
import BlogPageIndex from '~/components/BlogPageIndex'
export default {
  name: 'Index',
  components: { BlogPageIndex },
  data() {
    return {
      titleObject: {
        titleTemplate: this.$t('head.titles.blog.titleTemplate'),
      },
    }
  },
}
</script>

<style scoped></style>
