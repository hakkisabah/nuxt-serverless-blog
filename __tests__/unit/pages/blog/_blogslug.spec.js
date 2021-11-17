// __tests__/unit/pages/blog/_blogslug.spec.js

// Router
import VueRouter from 'vue-router'

// Store
import Vuex from 'vuex'

// Libraries
import Vuetify from 'vuetify'

// Page
import blogSlug from '@/pages/blog/_blogslug'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { describe, it, jest } from '@jest/globals'
import * as blogStore from '~/store'

describe('index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(VueRouter)
  const vuetify = new Vuetify()
  const store = new Vuex.Store({ ...blogStore })
  const router = new VueRouter()

  jest.spyOn(blogSlug, 'asyncData')
  jest.spyOn(blogSlug, 'created')
  const wrapper = shallowMount(blogSlug, {
    localVue,
    vuetify,
    store,
    router,
    mocks: {
      blogslug: '',
      blogData: {},
    },
  })
  it('should have blogData', async () => {
    // eslint-disable-next-line no-console
    wrapper.setData({
      ...(await wrapper.vm.$options.asyncData({
        params: { blogslug: 'my-blog-here' },
      })),
    })
    await wrapper.vm.$options.store.dispatch('nuxtServerInit')
    const blog = await wrapper.vm.$options.store.dispatch(
      'getBlog',
      wrapper.vm.blogslug
    )
    expect(blog.slug).toEqual(wrapper.vm.blogslug)
  })
})
