// __tests__/unit/pages/index.spec.js

// Libraries
import Vuetify from 'vuetify'

// Page
import indexPage from '@/pages/index'

// Components
import Timeline from '@/components/Timeline'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('index.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
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

  it('should have a LazyTimeline', () => {
    const isLazyTimeline = wrapper.vm.$options.components.LazyTimeline
    expect(isLazyTimeline).toBeTruthy()
  })
})
