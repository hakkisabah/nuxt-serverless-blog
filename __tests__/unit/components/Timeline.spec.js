// __tests__/unit/components/Timeline.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import Timeline from '@/components/Timeline'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('Timeline.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()

  const wrapper = mount(Timeline, {
    localVue,
    vuetify,
    stubs: {
      nuxt: true,
      // Any other component that you want stubbed
    },
  })
  it('should have a timeline', () => {
    // With jest we can create snapshot files of the HTML output

    const timeline = wrapper.findComponent(Timeline)
    expect(timeline.exists()).toBe(true)
  })
})
