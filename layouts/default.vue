<template>
  <v-app id="myblog" :dark="$colorMode.preference === 'dark'">
    <DefaultNav></DefaultNav>
    <v-main>
      <v-container fluid>
        <v-row>
          <DefaultLeft></DefaultLeft>
          <DefaultCenter></DefaultCenter>
          <DefaultRight></DefaultRight>
        </v-row>
      </v-container>
    </v-main>
    <DefaultBottom></DefaultBottom>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import DefaultLeft from '~/layouts/partials/DefaultLeft'
import DefaultRight from '~/layouts/partials/DefaultRight'
import DefaultCenter from '~/layouts/partials/DefaultCenter'
import DefaultNav from '~/layouts/partials/DefaultNav'
import DefaultBottom from '~/layouts/partials/DefaultBottom'
export default {
  components: {
    DefaultBottom,
    DefaultNav,
    DefaultCenter,
    DefaultRight,
    DefaultLeft,
  },
  data() {
    return {
      overlay: true,
    }
  },
  async beforeMount() {
    // await this.$store.dispatch('nuxtServerInit') // not required only test
    this.$vuetify.theme.dark =
      (await localStorage.getItem('nuxt-color-mode')) === 'dark'
    this.overlay = false
  },
  head() {
    // need required basic seo and html info.
    return {
      ...this.$nuxtI18nHead({
        addDirAttribute: true,
        addSeoAttributes: true,
      }),
    }
  },
}
</script>
<style>
.lengthDotter {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
