<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ errorMessages.pageNotFound }}
    </h1>
    <h1 v-else>
      {{ errorMessages.otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      errorMessages: this.$t('pages.errors'),
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? this.errorMessages.pageNotFound
        : this.errorMessages.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
