// __tests__/unit/components/Player.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import Player from '@/components/Player'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('Player.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const wrapper = mount(Player, {
    localVue,
    vuetify,
  })

  it('should have a iframe', () => {
    expect(wrapper.get('iframe')).toBeTruthy()
  })

  it('should playlist links is a object', () => {
    const playlistLinks = wrapper.vm.$data.playlistLinks
    expect(typeof playlistLinks).toBe('object')
  })
})
