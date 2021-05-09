// __tests__/unit/layouts/DefaultLeft.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import DefaultLeft from '@/layouts/partials/DefaultLeft'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { beforeEach, describe, it } from '@jest/globals'

describe('DefaultLeft.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()

  it('should have a v-sheet', () => {
    const wrapper = mount(DefaultLeft, {
      localVue,
      vuetify,
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const defaultRightSheet = wrapper.find('.v-sheet')

    expect(defaultRightSheet.exists()).toBe(true)
  })
})
