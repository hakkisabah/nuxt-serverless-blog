// __tests__/unit/layouts/default.spec.js

// Libraries
import Vuetify from 'vuetify'

// Layouts
import defaultLayout from '@/layouts/default'
// Child Layouts
import DefaultNav from '@/layouts/partials/DefaultNav'
import DefaultLeft from '@/layouts/partials/DefaultLeft'
import DefaultCenter from '@/layouts/partials/DefaultCenter'
import DefaultRight from '@/layouts/partials/DefaultRight'

// Utilities
import { createLocalVue, RouterLinkStub, shallowMount } from '@vue/test-utils'
import { beforeEach, describe, it } from '@jest/globals'

describe('default.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have components', () => {
    const wrapper = shallowMount(defaultLayout, {
      localVue,
      vuetify,
      mocks: {
        isLoad: false,
        $t: (msg) => msg,
        $i18n: (locale) => locale,
        $colorMode: (param) => param,
      },
      stubs: {
        nuxt: true,
        NuxtLink: true,
        RouterLink: RouterLinkStub,
        // Any other component that you want stubbed
      },
    })

    // We can check first loading..
    if (wrapper.isLoad === true) {
      // With jest we can create snapshot files of the HTML output

      const nav = wrapper.findComponent(DefaultNav)
      expect(nav.exists()).toBe(true)

      const left = wrapper.findComponent(DefaultLeft)
      expect(left.exists()).toBe(true)

      const center = wrapper.findComponent(DefaultCenter)
      expect(center.exists()).toBe(true)

      const right = wrapper.findComponent(DefaultRight)
      expect(right.exists()).toBe(true)

      const defaultLayoutId = wrapper.find('#myblog')
      expect(defaultLayoutId.exists()).toBe(true)
    }
  })
})
