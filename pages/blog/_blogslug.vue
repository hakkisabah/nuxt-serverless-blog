<template>
  <v-app>
    <v-container>
      <h1>{{ blogData }}</h1>
    </v-container>
  </v-app>
</template>

<script>
import SLUG_DATA_AND_SEO from '~/plugins/slug-head-mixin.js'
export default {
  name: 'Blogslug',
  mixins: [SLUG_DATA_AND_SEO],
}
</script>

<style scoped></style>
