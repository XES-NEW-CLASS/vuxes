import { findOneDom, findAllDom, createVue, createTestVue, createElm, triggerEvent } from '../../../jestUtils/dom'
import { wait } from '../../../jestUtils/time'

const popoverTemplete = (popoverTemplateId) => {
  return `
    <p>
      <x-popover
        ref="testPopover"
        title="测试用"
        content="测试文案"
        trigger="click"
        placement="top-start"
      ></x-popover>
      <button v-if="${popoverTemplateId === 0}" v-popover:testPopover>测popoverRef试用</button>
      <button v-else-if="${popoverTemplateId === 1}" v-popover="'testPopover'">测试用</button>
      <button v-else-if="${popoverTemplateId === 2}" v-popover="popoverRef">{{ text }}</button>
    </p>
  `
}
let jestFn = jest.fn()
let popoverTemplateId = 0
let currentMountedElm, currentVue, currentVueData
describe('测试 Popover 组件的props功能', () => {
  beforeEach(() => {
    currentMountedElm = createElm()
    currentVueData = {
      template: `
        ${popoverTemplete(popoverTemplateId++)}
      `
    }
    if (popoverTemplateId === 3) {
      currentVueData = {
        ...currentVueData,
        data () {
          return { popoverRef: null, text: '测试文案' }
        },
        mounted () {
          this.popoverRef = this.$refs.testPopover
        }
      }
    }
    currentVue = createVue(currentVueData)
  })

  it ('指令v-popover:testPopover，点击按钮显示popover', () => {
    const btn = findOneDom(currentVue.$el, 'button')
    const { testPopover } = currentVue.$refs

    expect(testPopover.$refs.reference).toBe(btn)
    expect(testPopover.showPopper).toBeFalsy()
    btn.click()
    expect(testPopover.showPopper).toBeTruthy()
    document.body.click()
    expect(testPopover.showPopper).toBeFalsy()
  })

  it ('指令v-popover="\'testPopover\'"，点击按钮显示popover', () => {
    const btn = findOneDom(currentVue.$el, 'button')
    const { testPopover } = currentVue.$refs

    expect(testPopover.$refs.reference).toBe(btn)
    expect(testPopover.showPopper).toBeFalsy()
    btn.click()
    expect(testPopover.showPopper).toBeTruthy()
    document.body.click()
    expect(testPopover.showPopper).toBeFalsy()
  })

  it ('指令v-popover="popoverRef"，点击按钮显示popover', () => {
    const btn = findOneDom(currentVue.$el, 'button')
    const { testPopover } = currentVue.$refs

    expect(testPopover.$refs.reference).toBe(btn)
    expect(testPopover.showPopper).toBeFalsy()
    btn.click()
    expect(testPopover.showPopper).toBeTruthy()
    document.body.click()
    expect(testPopover.showPopper).toBeFalsy()
  })
})
