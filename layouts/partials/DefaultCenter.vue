<template>
  <v-col cols="12" sm="8">
    <v-sheet class="mt-2" min-height="70vh" rounded="lg">
      <nuxt />
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: 'DefaultCenter',
  head() {
    // Static meta information.
    return {
      meta: [...this.$store.getters.getMetas].map((meta) => {
        return {
          ...meta,
          hid: meta.name
            ? `blog_${meta.name.replace(':', '_')}`
            : `blog_${meta.property.replace(':', '_')}`, // meta has mixed tag name or property
        }
      }),
    }
  },
}
</script>

<style scoped></style>
