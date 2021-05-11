// __tests__/unit/components/Socialcard.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import Socialcard from '@/components/Socialcard'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('Socialcard.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const wrapper = mount(Socialcard, {
    localVue,
    vuetify,
  })
  it('should have corrected properties', () => {
    const socialLinks = wrapper.vm.$data.socialLinks
    expect(socialLinks).toHaveProperty('cardimage')
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
  })
})
