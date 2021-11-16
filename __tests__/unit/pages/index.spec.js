// __tests__/unit/pages/index.spec.js

// Libraries
import Vuetify from 'vuetify'

// Page
import indexPage from '@/pages/index'

// Components
import LazyTimeline from '@/components/Timeline'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('index.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const wrapper = shallowMount(indexPage, {
    localVue,
    vuetify,
    mocks: { $colorMode: (param) => param },
    components: {
      LazyTimeline,
    },
  })

  it('should have a LazyTimeline', () => {
    const isLazyTimeline = wrapper.vm.$options.components.LazyTimeline
    expect(isLazyTimeline).toBeTruthy()
  })
})
