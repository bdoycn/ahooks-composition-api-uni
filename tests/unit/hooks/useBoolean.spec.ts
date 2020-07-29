import useBoolean from '@/hooks/useBoolean'

describe('useBoolean', () => {
  it('basic usage', () => {
    const [state] = useBoolean()

    expect(state.value).toEqual(false)

    state.value = true
    expect(state.value).toEqual(true)

    state.value = false
    expect(state.value).toEqual(false)
  })

  it('use defaultValue', () => {
    const [state] = useBoolean(true)

    expect(state.value).toEqual(true)
  })

  it('use toggle', () => {
    const [state, toggle] = useBoolean()

    toggle()
    expect(state.value).toEqual(true)
  })
})
