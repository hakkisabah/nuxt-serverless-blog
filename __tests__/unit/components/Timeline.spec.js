// __tests__/unit/components/Timeline.spec.js

// Store
import Vuex from 'vuex'

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import Timeline from '@/components/Timeline'

// Utilities
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { describe, it, jest } from '@jest/globals'
import * as blogStore from '~/store'

describe('Timeline.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const vuetify = new Vuetify()
  const store = new Vuex.Store({ ...blogStore })

  jest.spyOn(Timeline, 'beforeCreate')
  jest.spyOn(Timeline, 'created')
  const wrapper = mount(Timeline, {
    localVue,
    vuetify,
    store,
    mocks: {
      $colorMode: (param) => param,
    },
  })
  it('should have a timeline', () => {
    const timeline = wrapper.findComponent(Timeline)
    expect(timeline.exists()).toBe(true)
  })
})
