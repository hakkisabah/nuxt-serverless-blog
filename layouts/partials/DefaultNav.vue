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
      isSearch: false,
      navigationContent: this.$t(
        'layouts.partials.navigationContent.menuNames'
      ),
      menuLinks: require('@/lang/jsons/links.json').menuNames,
      currentAndDetectedLang: this.$i18n.locale,
      loading: false,
      items: [],
      search: null,
      select: null,
      searchedResults: ['Hakki Sabah', 'test 4', 'asşdf'],
    }
  },
  computed: {
    title() {
      return process.env.TITLE
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    navigationLinkResolver(to) {
      if (to !== '/') {
        return this.currentAndDetectedLang === 'en'
          ? '/' + to
          : '/' + this.currentAndDetectedLang + '/' + to
      } else {
        return '/'
      }
    },
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
      }, 500)
    },
  },
}
</script>

<style scoped></style>
