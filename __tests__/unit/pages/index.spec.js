// __tests__/unit/pages/index.spec.js

// Libraries
import Vuetify from 'vuetify'

// Page
import indexPage from '@/pages/index'

// Components
import Timeline from '@/components/Timeline'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { beforeEach, describe, it } from '@jest/globals'

describe('index.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a v-sheet', () => {
    const wrapper = mount(indexPage, {
      localVue,
      vuetify,
      stubs: {
        nuxt: true,
        // Any other component that you want stubbed
      },
      components: {
        LazyTimeline: Timeline,
      },
    })

    // TODO
  })
})
