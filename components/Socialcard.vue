<template>
  <v-card>
    <v-img :src="getSocialLink('cardimage')" height="200px">
      <span class="headline white--text pl-4 pt-4 d-inline-block"></span>
    </v-img>

    <v-card-actions class="white justify-center">
      <v-btn
        v-for="(social, i) in socials"
        :key="i"
        :color="social.color"
        class="white--text"
        md="4"
        :href="getSocialLink(social.icon.split('-')[1])"
        fab
        icon
        :large="$vuetify.breakpoint.width < 600 || !isSmall"
        :x-small="isSmall"
      >
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Socialcard',
  data() {
    return {
      socialLinks: require('../mocks/socialcard.json'),
      socials: [
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
        {
          icon: 'mdi-twitter',
          color: 'indigo',
        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
        },
      ],
    }
  },
  computed: {
    isSmall() {
      return (
        (this.$vuetify.breakpoint.width > 599 &&
          this.$vuetify.breakpoint.width < 769) ||
        (this.$vuetify.breakpoint.width > 767 &&
          this.$vuetify.breakpoint.height < 1080) ||
        (this.$vuetify.breakpoint.width > 1041 &&
          this.$vuetify.breakpoint.height < 1395)
      )
    },
  },
  methods: {
    getSocialLink(platformname) {
      return this.socialLinks[platformname]
    },
  },
}
</script>

<style scoped></style>
