import useToggle from '@/hooks/useToggle'
describe('useToggle', () => {
  it('basic usage', () => {
    const [state, { toggle }] = useToggle()

    expect(state.value).toBe(false)

    toggle()
    expect(state.value).toBe(true)

    toggle()
    expect(state.value).toBe(false)
  })

  it('default value', () => {
    const [state] = useToggle(1)

    expect(state.value).toBe(1)
  })

  it('boolean toggle', () => {
    const [state, { toggle }] = useToggle(true)

    expect(state.value).toBe(true)

    toggle()
    expect(state.value).toBe(false)
  })

  it('number toggle', () => {
    const [state, { toggle }] = useToggle(1)
    expect(state.value).toBe(1)
    toggle()
    expect(state.value).toBe(false)

    const [zeroState, { toggle: zeroToggle }] = useToggle(0)
    expect(zeroState.value).toBe(0)
    zeroToggle()
    expect(zeroState.value).toBe(true)
  })

  it('string toggle', () => {
    const [state, { toggle }] = useToggle('1')
    expect(state.value).toBe('1')
    toggle()
    expect(state.value).toBe(false)

    const [emptyState, { toggle: emptyToggle }] = useToggle('')
    expect(emptyState.value).toBe('')
    emptyToggle()
    expect(emptyState.value).toBe(true)
  })

  it('null toggle', () => {
    const [state, { toggle }] = useToggle(null)

    expect(state.value).toBe(null)

    toggle()
    expect(state.value).toBe(true)
  })

  it('null toggle', () => {
    const [state, { toggle }] = useToggle(undefined)

    expect(state.value).toBe(false)

    toggle()
    expect(state.value).toBe(true)
  })

  it('object toggle', () => {
    const [state, { toggle }] = useToggle({ a: 1 })

    expect(state.value).toEqual({ a: 1 })

    toggle()
    expect(state.value).toBe(false)
  })

  it('array toggle', () => {
    const [state, { toggle }] = useToggle([1, 2])

    expect(state.value).toEqual([1, 2])

    toggle()
    expect(state.value).toBe(false)
  })

  it('number toggle to string', () => {
    const [state, { toggle }] = useToggle(1, '1')

    expect(state.value).toBe(1)

    toggle()
    expect(state.value).toBe('1')
  })

  it('object toggle to array', () => {
    const obj = { a: 1 }
    const arr = [1, 2]
    const [state, { toggle }] = useToggle(obj, arr)

    expect(state.value).toEqual(obj)

    toggle()
    expect(state.value).toEqual(arr)
  })

  it('toggle to specified value', () => {
    const [state, { toggle }] = useToggle<any>(1)

    expect(state.value).toBe(1)

    toggle('2')
    expect(state.value).toBe('2')
  })

  it('setLeft && setRight', () => {
    const [state, { setLeft, setRight }] = useToggle(1, 2)

    expect(state.value).toBe(1)

    setRight()
    expect(state.value).toBe(2)

    setLeft()
    expect(state.value).toBe(1)
  })
})
