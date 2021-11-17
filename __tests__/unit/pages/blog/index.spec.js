// __tests__/unit/pages/blog/index.spec.js

// Store
import Vuex from 'vuex'

// Libraries
import Vuetify from 'vuetify'

// Page
import blogIndex from '@/pages/blog/index'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import { describe, it, jest } from '@jest/globals'
import * as blogStore from '~/store'

describe('index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const vuetify = new Vuetify()
  const store = new Vuex.Store({ ...blogStore })

  jest.spyOn(blogIndex, 'created')
  const wrapper = mount(blogIndex, {
    localVue,
    vuetify,
    store,
    mocks: {
      navigationLinkResolver: (param) => param,
      blogs: [],
    },
  })
  it('should have blogs', () => {
    const blogs = wrapper.vm.$store.getters.getBlogs
    expect(Array.isArray(blogs)).toBe(true)
  })
})
