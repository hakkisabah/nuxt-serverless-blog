import Vue from 'vue'
const mixin = {
  data() {
    return {
      currentAndDetectedLang: this.$i18n,
    }
  },
  methods: {
    navigationLinkResolver(to) {
      const locale = this.currentAndDetectedLang.getBrowserLocale()
      if (to !== '/') {
        return locale === 'en' ? '/' + to : '/' + locale + '/' + to
      } else {
        return '/'
      }
    },
  },
}

Vue.mixin(mixin)
