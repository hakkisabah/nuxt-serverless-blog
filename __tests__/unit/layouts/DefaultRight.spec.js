// __tests__/unit/layouts/DefaultRight.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import DefaultRight from '@/layouts/partials/DefaultRight'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('DefaultLeft.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const wrapper = mount(DefaultRight, {
    localVue,
    vuetify,
  })

  it('should have a v-card', () => {
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const defaultLeft = wrapper.find('.v-card')
    expect(defaultLeft.exists()).toBe(true)
    expect(defaultLeft.text()).toBe('')

    const defaultLeftCardImg = wrapper.find('.v-card__actions a')
    expect(defaultLeftCardImg.attributes().href).toBeDefined()
  })

  it('shoud have a socialcard component', () => {
    const isSocialCard = wrapper.vm.$options.components['Socialcard']
    expect(isSocialCard).toBeTruthy()
  })
})
