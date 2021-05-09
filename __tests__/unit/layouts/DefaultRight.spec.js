// __tests__/unit/layouts/DefaultRight.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import DefaultRight from '@/layouts/partials/DefaultRight'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { beforeEach, describe, it } from '@jest/globals'

describe('DefaultRight.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a v-sheet', () => {
    const wrapper = mount(DefaultRight, {
      localVue,
      vuetify,
    })

    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const defaultRightSheet = wrapper.find('.v-sheet')

    expect(defaultRightSheet.exists()).toBe(true)

    // ITS CHANGE WHILE DEVELOPING
    expect(defaultRightSheet.text()).toBe("Right")
  })
})
