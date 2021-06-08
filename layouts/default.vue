<template>
  <v-app id="myblog" :dark="$colorMode.preference === 'dark'">
    <div v-if="isLoad">
      <DefaultNav></DefaultNav>
      <v-main :dark="$colorMode.preference === 'dark'">
        <v-container fluid>
          <v-row>
            <DefaultLeft></DefaultLeft>
            <DefaultCenter></DefaultCenter>
            <DefaultRight></DefaultRight>
          </v-row>
        </v-container>
      </v-main>
    </div>
    <Firstload v-if="!isLoad"></Firstload>
  </v-app>
</template>

<script>
import Firstload from '~/components/Firstload'
import DefaultLeft from '~/layouts/partials/DefaultLeft'
import DefaultRight from '~/layouts/partials/DefaultRight'
import DefaultCenter from '~/layouts/partials/DefaultCenter'
import DefaultNav from '~/layouts/partials/DefaultNav'
export default {
  components: {
    Firstload,
    DefaultNav,
    DefaultCenter,
    DefaultRight,
    DefaultLeft,
  },
  data() {
    return {
      isLoad: false,
    }
  },
  async beforeMount() {
    this.$vuetify.theme.dark =
      (await localStorage.getItem('nuxt-color-mode')) === 'dark'
    this.isLoad = true
  },
  head() {
    return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
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
