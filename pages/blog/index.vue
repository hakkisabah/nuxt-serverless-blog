<template>
  <v-app>
    <v-card v-for="(blog, index) in blogs" :key="index" class="mb-3">
      <v-img class="white--text align-end" height="200px" :src="blog.img">
        <v-card-title>{{ blog.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ blog.createdAt }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div class="lengthDotter">
          {{ blog.content }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          text
          :to="`${navigationLinkResolver('blog/' + blog.slug)}`"
        >
          Read
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
    }
  },
  created() {
    this.blogs = this.$store.getters.getBlogs
  },
}
</script>

<style scoped></style>
