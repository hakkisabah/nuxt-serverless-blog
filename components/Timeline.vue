<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(blog, index) in blogs"
      :key="index"
      :icon="blog.titleIcon + ' mdi-18px'"
      :color="$vuetify.theme.dark !== false ? 'dark' : 'teal'"
    >
      <template v-slot:opposite>
        <hr />
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline"> {{ blog.title }} </v-card-title>
        <v-subheader class="text-decoration-underline">{{
          blog.createdAt
        }}</v-subheader>
        <v-card-text class="lengthDotter">{{ blog.content }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    }
  },
  async created() {
    const data = await require('../mocks/blog.json')
    this.blogs = data
  },
}
</script>

<style scoped></style>
