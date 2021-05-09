// __tests__/unit/layouts/error.spec.js

// Layout
import errorLayout from '@/layouts/error'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { describe, it } from '@jest/globals'

describe('error.vue', () => {
  const localVue = createLocalVue()
  const wrapper = shallowMount(errorLayout, {
    localVue,
    mocks: {
      $t: (msg) => msg,
    },
    propsData: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        errorMessages: this.$t('pages.errors'),
      }
    },
    stubs: {
      NuxtLink: true,
      // Any other component that you want stubbed
    },
  })

  it('should have corrected error page', () => {
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()

    const errorProp = wrapper.vm.$props.error
    expect(errorProp.default).toBeNull()

    expect(wrapper.vm.$data.errorMessages).toEqual('pages.errors')
  })
})
