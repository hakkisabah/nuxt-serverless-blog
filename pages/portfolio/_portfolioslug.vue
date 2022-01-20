<template>
  <v-app
    ><h1>{{ this.portfolioslug }}</h1>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const portfolioslug = params.portfolioslug // When calling /abc the slug will be "abc"
    return { portfolioslug }
  },
}
</script>

<style scoped></style>
