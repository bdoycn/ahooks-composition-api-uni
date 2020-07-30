import useCounter from '@/hooks/useCounter'

describe('useCounter', () => {
  it('basic usage', () => {
    const { current } = useCounter()

    expect(current.value).toBe(0)

    current.value += 2
    expect(current.value).toBe(2)
  })

  it('initial value', () => {
    const { current } = useCounter(1)

    expect(current.value).toBe(1)
  })

  it('inc', () => {
    const { current, inc } = useCounter(0)

    inc()
    expect(current.value).toBe(1)
  })

  it('dec', () => {
    const { current, dec } = useCounter(0)

    dec()
    expect(current.value).toBe(-1)
  })

  it('reset', () => {
    const { current, reset } = useCounter(0)

    current.value += 10
    reset()
    expect(current.value).toBe(0)
  })

  it('min', () => {
    const { current, dec } = useCounter(0, { min: -1 })

    dec()
    dec()
    expect(current.value).toBe(-1)
  })

  it('max', () => {
    const { current, inc } = useCounter(0, { max: 1 })

    inc()
    inc()
    expect(current.value).toBe(1)
  })
})
