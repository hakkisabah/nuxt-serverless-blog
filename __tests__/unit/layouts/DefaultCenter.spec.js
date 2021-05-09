// __tests__/unit/layouts/DefaultCenter.spec.js

// Libraries
import Vuetify from 'vuetify'

// Layouts
import DefaultCenter from '@/layouts/partials/DefaultCenter'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { beforeEach, describe, it } from '@jest/globals'

describe('DefaultCenter.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have nuxt', () => {
    const wrapper = mount(DefaultCenter, {
      localVue,
      vuetify,
      stubs: {
        nuxt: true,
        // Any other component that you want stubbed
      },
    })

    const defaultLayoutId = wrapper.find('nuxt-stub')
    expect(defaultLayoutId.exists()).toBe(true)
  })
})
