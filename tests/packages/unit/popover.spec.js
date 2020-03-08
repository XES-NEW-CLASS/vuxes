import 'regenerator-runtime/runtime'
import { shallowMount } from '@vue/test-utils'
import { findOneDom, findAllDom, createVue, createElm, triggerEvent } from '../../jestUtils/dom'

import Popover from '~/popover/index'

const popoverTemplete = ({ trigger }) => {
  if (trigger !== 'manual') {
    return `
    <x-popover
      ref="testPopover"
      title="测试用"
      content="测试文案"
      trigger="${trigger}"
      placement="top-start"
    >
      <button slot="reference">${trigger} 激活</button>
    </x-popover>
  `
  } else {
    return {
      data: {
        isShow: false
      },
      methods: {
        changePopoverStatus () {
          this.isShow = !this.isShow
          console.log('isShow: ', this.isShow)
        }
      },
      template: `
    <x-popover
      ref="testPopover"
      title="测试用"
      content="测试文案"
      trigger="manual"
      v-model="isShow"
      placement="top-start"
    >
      <button slot="reference" @click="changePopoverStatus">manual 激活</button>
    </x-popover>
  `
    }
  }
}
let currentMountedElm, currentVue
describe('测试 Popover 组件的功能', () => {

  describe('Popover 的四种触发方式', () => {
    let index = 0
    let triggers = ['hover', 'click', 'focus', 'manual']
    beforeEach(() => {
      currentMountedElm = createElm()
      currentVue = createVue(popoverTemplete({
        trigger: triggers[index++]
      }), true, currentMountedElm)
    })

    it('Popover hover trigger', () => {
      jest.useFakeTimers()
      const { testPopover } = currentVue.$refs
      const btn = testPopover.$slots.reference[0].elm

      expect(testPopover.showPopper).toBeFalsy()
      triggerEvent(btn, 'mouseenter')
      expect(testPopover.showPopper).toBeTruthy()
      triggerEvent(btn, 'mouseleave')

      // 隐藏是需要200ms延迟的，因此清除掉定时器
      jest.runAllTimers()
      expect(testPopover.showPopper).toBeFalsy()
    })

    it('Popover click trigger', () => {
      const { testPopover } = currentVue.$refs
      const btn = findOneDom(currentVue.$el, 'button')
      expect(testPopover.showPopper).toBeFalsy()
      btn.click()
      expect(testPopover.showPopper).toBeTruthy()
      btn.click()
      expect(testPopover.showPopper).toBeFalsy()
      testPopover.showPopper = true
      document.body.click()
      expect(testPopover.showPopper).toBeFalsy()
    })

    it('Popover focus trigger', () => {
      const { testPopover } = currentVue.$refs
      const btn = findOneDom(currentVue.$el, 'button')
      expect(testPopover.showPopper).toBeFalsy()
      triggerEvent(btn, 'mousedown')
      expect(testPopover.showPopper).toBeTruthy()
      triggerEvent(btn, 'mouseup')
      expect(testPopover.showPopper).toBeFalsy()
    })

    it('Popover manual trigger', (done) => {
      const { testPopover } = currentVue.$refs
      expect(testPopover.showPopper).toBeFalsy()

      currentVue.changePopoverStatus()
      currentVue.$nextTick(() => {
          expect(testPopover.showPopper).toBeTruthy()
          done()
      })
    })
  })
})
