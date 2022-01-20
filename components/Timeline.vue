<template>
  <v-timeline
    :dark="$colorMode.preference !== 'dark'"
    :dense="$vuetify.breakpoint.smAndDown"
  >
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
        <v-card-title class="headline">
          <a
            class="text-decoration-none"
            :href="`${navigationLinkResolver('blog/' + blog.slug)}`"
            >{{ blog.title }}
          </a>
        </v-card-title>
        <v-subheader class="text-decoration-underline"
          >{{ blog.createdAt }}
        </v-subheader>
        <v-card-text class="lengthDotter">{{ blog.content }}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import INDEX_DATA_AND_SEO from '~/plugins/index-head-mixin.js'
export default {
  name: 'Timeline',
  mixins: [INDEX_DATA_AND_SEO],
}
</script>
