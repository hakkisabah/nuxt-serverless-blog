<template>
  <v-card>
    <v-toolbar :dark="$colorMode.preference === 'dark'">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-row v-if="!isSearch" class="mr-5">
        <v-spacer></v-spacer>
        <v-icon class="mr-3">mdi-weather-night</v-icon>
        <v-switch
          :input-value="$colorMode.preference !== 'dark'"
          inset
          flat
          @click="toggleDarkMode()"
        >
        </v-switch>
        <v-icon>mdi-weather-sunny</v-icon>
        <v-spacer></v-spacer>
      </v-row>
      <v-autocomplete
        v-if="isSearch"
        id="searchInput"
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="What state are you from?"
        solo-inverted
      ></v-autocomplete>
      <v-btn id="searchIcon" icon @click="isSearch = !isSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered slider-color="red" mobile-breakpoint>
          <v-tab
            v-for="(name, index) in navigationContent"
            :key="index"
            :to="`${navigationLinkResolver(menuLinks[index])}`"
            active-class
          >
            <v-icon v-if="backBlogIcon && index == 1" medium
              >mdi-arrow-left</v-icon
            >
            {{ name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'DefaultNav',
  data() {
    return {
      backBlogIcon: false,
      isSearch: false,
      navigationContent: this.$t(
        'layouts.partials.navigationContent.menuNames'
      ),
      menuLinks: require('@/lang/jsons/links.json').menuNames,
      loading: false,
      items: [],
      search: null,
      select: null,
      searchedResults: ['Hakki Sabah', 'test 4', 'asşdf'],
    }
  },
  computed: {
    title() {
      return process.env.NAV_TITLE
    },
  },
  watch: {
    '$nuxt.$route': {
      // Check navigation blog text for back icon
      handler(to, from) {
        if (to.params.blogslug) {
          this.backBlogIcon = true
        } else {
          this.backBlogIcon = false
        }
      },
      deep: true,
    },
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  created() {
    // Check navigation blog text for back icon
    if (this.$route.params.blogslug) {
      this.backBlogIcon = true
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference !== 'dark') {
        this.$colorMode.preference = 'dark'
        this.$vuetify.theme.dark = true
      } else {
        this.$colorMode.preference = 'light'
        this.$vuetify.theme.dark = false
      }
    },
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        // TODO : need some ajax/axios requests..
        this.items = this.searchedResults.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase())
        })
        this.loading = false
      }, 100)
    },
  },
}
</script>

<style scoped></style>
