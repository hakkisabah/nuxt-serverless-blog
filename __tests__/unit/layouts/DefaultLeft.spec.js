// __tests__/unit/layouts/DefaultLeft.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import DefaultLeft from '@/layouts/partials/DefaultLeft'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('DefaultLeft.vue', () => {
  const localVue = createLocalVue()
  let vuetify = new Vuetify()
  const wrapper = mount(DefaultLeft, {
    localVue,
    vuetify,
  })

  it('should have a v-card', async () => {
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const defaultLeft = wrapper.find('.v-card')
    expect(defaultLeft.exists()).toBe(true)
    expect(defaultLeft.text()).toBe('')

    const defaultLeftCardImg = wrapper.find('.v-card__actions a')
    expect(defaultLeftCardImg.attributes().href).toBeDefined()

  })
  it('should have corrected properties', () => {
    const socialLinks = wrapper.vm.$data.socialLinks
    expect(socialLinks).toHaveProperty('twitter')
    expect(socialLinks).toHaveProperty('linkedin')
    expect(socialLinks).toHaveProperty('instagram')

    const socials = wrapper.vm.$data.socials
    expect(Array.isArray(socials)).toBe(true)
    expect(socials).toEqual(
      expect.arrayContaining([
        { color: 'cyan darken-1', icon: 'mdi-linkedin' },
        { color: 'indigo', icon: 'mdi-twitter' },
        { color: 'red lighten-3', icon: 'mdi-instagram' },
      ])
    )

    const socialCardImage = wrapper.vm.$data.socialCardImage
    expect(socialCardImage).toBeDefined()
  })
})
