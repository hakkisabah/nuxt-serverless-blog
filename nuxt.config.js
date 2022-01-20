// eslint-disable-next-line nuxt/no-cjs-in-config
const { sitemap } = require('./utils/sitemap')
// eslint-disable-next-line import/order
const colors = require('vuetify/es5/util/colors').default
// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/breakpoint.js' },
    { src: '~/plugins/i18n.js', ssr: true },
    { src: '~/plugins/linkresolver.js' },
    { src: '~/plugins/jsonld.js' },
    { src: '~/plugins/special-chars.js' },
    { src: '~/plugins/dynamic-meta-creator.js' },
    { src: '~/plugins/vue-google-analytics.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/device',
    [
      'nuxt-i18n',
      {
        baseUrl: process.env.domain || 'http://localhost:3000',
        locales: [
          { code: 'tr', iso: 'tr-TR', file: 'tr-TR.json' },
          { code: 'en', iso: 'en-EN', file: 'en-EN.json' },
        ],
        lazy: true,
        langDir: 'lang/jsons/',
        vueI18nLoader: true,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: false,
        },
        seo: false,
      },
    ],
    ['@nuxtjs/sitemap', async () => await sitemap()],
  ],
  dotenv: {
    /* module options */
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  loading: {
    color: 'white',
    height: '5px',
    continuous: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: `https://${process.env.domain}/_nuxt/`, // <= https must be over here
  },
  // srcDir: 'client/',
  performance: {
    gzip: false,
  },
  router: {
    base: `/`,
  },
  dev: false, // must be false before deploy
}
