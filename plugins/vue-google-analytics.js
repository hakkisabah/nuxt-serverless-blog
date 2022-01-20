import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx) => {
  Vue.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
  })
}
