// __tests__/unit/layouts/DefaultNav.spec.js

// Libraries
import Vuetify from 'vuetify'

// Child Layout
import DefaultNav from '@/layouts/partials/DefaultNav'

// Utilities
import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

const menuNames = require('@/lang/jsons/links.json').menuNames

describe('DefaultNav.vue', () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const wrapper = mount(DefaultNav, {
    localVue,
    vuetify,
    mocks: {
      $t: (msg) => msg,
      $i18n: (locale) => locale,
      menuLinks: menuNames,
      $colorMode: (param) => param,
    },
    stubs: {
      NuxtLink: true,
      RouterLink: RouterLinkStub,
      // Any other component that you want stubbed
    },
  })

  it('should have corrected html', () => {
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const title = wrapper.find('.v-toolbar__title')
    expect(title.exists()).toBe(true)

    const titleData = DefaultNav.computed.title // Computed
    expect(titleData.call()).toBe(process.env.TITLE)

    const menuWrapper = wrapper.find('.v-tabs-slider-wrapper')
    expect(menuWrapper.exists()).toBe(true)

    const searchIcon = wrapper.find('#searchIcon')
    expect(searchIcon.exists()).toBe(true)

    const searchInput = wrapper.find('#searchInput')
    expect(searchInput.exists()).toBe(false)
  })

  it('should corrected properties with html behaviour', async function () {
    // Default searchIcon state
    expect(wrapper.vm.$data.isSearch).toEqual(false)
    // Simulate a click on the searchIcon

    const searchIcon = wrapper.find('#searchIcon')
    expect(searchIcon.exists()).toBe(true)

    searchIcon.trigger('click')
    // We need await for searchInput after clicking, because element has v-if condition
    // Note : v-show always true while using exists() property
    await wrapper.vm.$nextTick()
    // Ensure that our searchIcon event was clicked
    expect(wrapper.vm.$data.isSearch).toEqual(true)
    // And we check searchInput after clicked
    expect(wrapper.find('#searchInput').exists()).toBe(true)

    // Getting language json for navigationContent
    const defaultNavMenuLinks = wrapper.vm.$data.navigationContent
    // Sending request from DefaultNav.vue to i18n module for nav menu names and menuNames included navigationContent
    expect(defaultNavMenuLinks).toEqual(
      'layouts.partials.navigationContent.menuNames'
    )
  })

  it('should have corrected properties', function () {
    const loading = wrapper.vm.$data.loading
    expect(loading).toEqual(false)

    const items = wrapper.vm.$data.items
    expect(Array.isArray(items)).toBe(true)

    const search = wrapper.vm.$data.search
    expect(search).toEqual(null)

    const select = wrapper.vm.$data.select
    expect(select).toEqual(null)

    const searchedResults = wrapper.vm.$data.searchedResults
    expect(Array.isArray(searchedResults)).toBe(true)
  })

  it('should have watchers and methods', async function () {
    // Watchers
    const searchWatcher = wrapper.vm.$options.watch.search
    expect(searchWatcher).toBeInstanceOf(Function)

    // Methods
    const querySelectionsMethod = await wrapper.vm.$options.methods
      .querySelections
    expect(querySelectionsMethod).toBeInstanceOf(Function)
  })
})
