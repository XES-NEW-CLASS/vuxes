import { findOneDom, findAllDom, createVue, createElm, triggerEvent } from '../../../jestUtils/dom'
import { wait } from '../../../jestUtils/time'

const popoverTemplete = ({ appendToBody }) => {
  return `
    <x-popover
      ref="testPopover"
      title="测试用"
      content="测试文案"
      trigger="click"
      :appendToBody="${appendToBody}"
      placement="top-start"
      @show="addIndex"
      @hide="deleteIndex"
    >
      <button slot="reference">点击 激活</button>
    </x-popover>
  `
}
let jestFn = jest.fn()
let currentMountedElm, currentMountedParent, currentVue
describe('测试 Popover 组件的props功能', () => {

  describe('appendToBody、@show、@hide 是否生效', () => {
    const appendToBodyDatas = [true, false]
    let i = 0
    beforeEach(() => {
      currentMountedParent = createElm()
      currentMountedElm = document.createElement('div')
      currentMountedParent.appendChild(currentMountedElm)
      currentVue = createVue({
        template: popoverTemplete({appendToBody: appendToBodyDatas[i++]}),
        data () {
          return {
            index: 0
          }
        },
        methods: {
          addIndex () {
            this.index = this.index + 1
          },
          deleteIndex: jestFn
        }
      }, true, currentMountedElm)
    })
    it ('appendToBody 为true, 点击按钮后body下的popper元素应该显示, show方法被调用', (done) => {
      const btn = findOneDom(currentVue.$el, 'button')
      let popoverElm = findAllDom(currentMountedParent, '.x-popover')
      expect(currentVue.index).toBe(0)
      expect(popoverElm.length).toBe(1)
      expect(getComputedStyle(popoverElm[0]).display).toBe('none')

      btn.click()
      setTimeout(() => {
        expect(currentVue.index).toBe(1)
        expect(findAllDom(currentMountedParent, '.x-popover').length).toBe(0)
        expect(getComputedStyle(findOneDom(document.body, '.x-popover')).display).toBe('block')

        done()
      })
    })

    it ('appendToBody 为false, 点击按钮后父容器下popper元素应该显示，再次点击后hide方法被调用', (done) => {
      const btn = findOneDom(currentVue.$el, 'button')
      let popoverElm = findAllDom(currentMountedParent, '.x-popover')
      expect(popoverElm.length).toBe(1)
      expect(getComputedStyle(popoverElm[0]).display).toBe('none')

      btn.click()
      setTimeout(() => {
        let popoverElm = findAllDom(currentMountedParent, '.x-popover')
        expect(popoverElm.length).toBe(1)
        expect(getComputedStyle(popoverElm[0]).display).toBe('block')

        const fnCalledLength = jestFn.mock.calls.length
        btn.click()
        setTimeout(() => {
          expect(jestFn.mock.calls.length).toBe(fnCalledLength + 1)
          done()
        })
      })
    })
  })

  describe('disabled 是否生效', () => {

    it ('popover 禁用，点击按钮不显示popover', () => {
      const disabledJestFn = jest.fn()
      const mountedElm = createElm()
      const currentVueIns = createVue({
        template: `
        <x-popover
            ref="testPopover"
            title="测试用"
            content="测试文案"
            trigger="click"
            :disabled="true"
            @show="show"
        >
            <button slot="reference">点击 激活</button>
        </x-popover>
      `,
        methods: {
          show: disabledJestFn
        }
      }, true, mountedElm)

      const btn = findOneDom(currentVueIns.$el, 'button')
      const { testPopover } = currentVueIns.$refs
      expect(testPopover.showPopper).toBe(false)

      btn.click()
      expect(testPopover.showPopper).toBe(true)
      expect(disabledJestFn.mock.calls.length).toBe(0)
    })
  })

  describe('显示与隐藏 延迟', () => {
    it('', async () => {
      const disabledJestFn = jest.fn()
      const mountedElm = createElm()
      const currentVueIns = createVue({
        template: `
        <x-popover
            ref="testPopover"
            title="测试用"
            content="测试文案"
            trigger="hover"
            :open-delay="100"
            :close-delay="100"
        >
            <button slot="reference">点击 激活</button>
        </x-popover>
      `,
        methods: {
          show: disabledJestFn
        }
      }, true, mountedElm)

      const btn = findOneDom(currentVueIns.$el, 'button')
      const { testPopover } = currentVueIns.$refs
      expect(testPopover.showPopper).toBe(false)

      triggerEvent(btn, 'mouseenter')
      expect(testPopover.showPopper).toBe(false)
      await wait(100)
      expect(testPopover.showPopper).toBe(true)

      triggerEvent(btn, 'mouseleave')
      expect(testPopover.showPopper).toBe(true)
      await wait(100)
      expect(testPopover.showPopper).toBe(false)
      // btn.click()
      // setTimeout(() => {
      //   expect(testPopover.showPopper).toBe(true)
      //
      //   btn.click()
      //   setTimeout(() => {
      //     expect(testPopover.showPopper).toBe(false)
      //     done()
      //   })
      // }, 100)
    })
  })
})
