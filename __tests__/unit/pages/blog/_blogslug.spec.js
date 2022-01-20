// __tests__/unit/pages/blog/_blogslug.spec.js

// mocks blogs

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
import { describe, it } from '@jest/globals'
import blogs from '~/mocks/blog.json'
import * as blogStore from '~/store'

describe('index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  localVue.use(VueRouter)
  const vuetify = new Vuetify()
  const store = new Vuex.Store({ ...blogStore })
  const router = new VueRouter()
  store.state.blogs = blogs
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
  wrapper.setData({ blogslug: 'my-blog-here' })
  it('should have blogData', async () => {
    const blog = await blogStore.actions.getBlog(
      wrapper.vm.$store,
      wrapper.vm.blogslug
    )
    expect(blog.slug).toEqual(wrapper.vm.blogslug)
  })
})
