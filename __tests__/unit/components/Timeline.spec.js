// __tests__/unit/components/Timeline.spec.js

// Store
import Vuex from 'vuex'

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import Timeline from '@/components/Timeline'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it, jest } from '@jest/globals'
import * as blogStore from '~/store'

describe('Timeline.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const vuetify = new Vuetify()
  const store = new Vuex.Store({ ...blogStore })

  const wrapper = mount(Timeline, {
    localVue,
    vuetify,
    store,
    mocks: {
      navigationLinkResolver: (param) => param,
      $colorMode: (param) => param,
    },
  })
  it('should have a timeline component', () => {
    const timeline = wrapper.findComponent(Timeline)
    expect(timeline.exists()).toBe(true)
  })
  it('should have blogs', async () => {
    const blogs = await wrapper.vm.$store.getters.getBlogs
    expect(Array.isArray(blogs)).toBe(true)
  })
})
