import { shallowMount } from '@vue/test-utils'
import { findAllDom } from '../../jestUtils/dom'

import router from '@/router'
import App from '@/App.vue'

describe('测试 App.vue', () => {
  it('期望app.vue文件中存在app元素', () => {
    const wrapper = shallowMount(App, {
      router
    })
    expect(findAllDom(wrapper, '#app').length).toBe(1)
    expect(wrapper.element).toMatchSnapshot()
  })
})
