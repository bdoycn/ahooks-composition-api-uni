import UseWhyDidYouUpdate from './template/UseWhyDidYouUpdate.vue'
import { shallowMount, mount } from '@vue/test-utils'

describe('useWhyDidYouUpdate vue', () => {
  let wrapper: ReturnType<typeof shallowMount>
  let consoleLogMockFn = jest.fn()

  beforeEach(() => {
    consoleLogMockFn = jest.fn()
    console.log = consoleLogMockFn

    wrapper = shallowMount(UseWhyDidYouUpdate)
  })

  it('initial mount', () => {
    expect(consoleLogMockFn.mock.calls.length).toBe(2)
    expect(consoleLogMockFn.mock.calls[0]).toEqual([
      { refValue: '', reactiveValue: { text: '' } }
    ])
    expect(consoleLogMockFn.mock.calls[1]).toEqual([
      { refValue: undefined, reactiveValue: undefined }
    ])
  })

  it('change dependencies', async () => {
    await wrapper.vm.$nextTick()

    await wrapper.find('#refInput').setValue(1)
    expect(consoleLogMockFn.mock.calls.length).toBe(4)
    expect(consoleLogMockFn.mock.calls[2]).toEqual([{ refValue: '1' }])
    expect(consoleLogMockFn.mock.calls[3]).toEqual([{ refValue: '' }])

    await wrapper.find('#reactiveInput').setValue(1)
    expect(consoleLogMockFn.mock.calls.length).toBe(6)
    expect(consoleLogMockFn.mock.calls[4]).toEqual([{ reactiveValue: { text: '1' } }])
    expect(consoleLogMockFn.mock.calls[5]).toEqual([{ reactiveValue: { text: '' } }])
  })
})
