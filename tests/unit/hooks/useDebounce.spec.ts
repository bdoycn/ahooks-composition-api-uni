import useDebounce from '@/hooks/useDebounce'

describe('useDebounce', () => {
  const mockFn = jest.fn()

  beforeEach(() => {
    mockFn.mockClear()
    jest.useFakeTimers()
  })

  it('basic usage', () => {
    const debounceFn = useDebounce(mockFn, { wait: 1000 })

    debounceFn()
    expect(mockFn).not.toBeCalled()
    jest.advanceTimersByTime(1000)
    expect(mockFn).toBeCalled()
  })

  it('leading true & trailing false', () => {
    const debounceFn = useDebounce(mockFn, { wait: 1000, leading: true, trailing: false })

    debounceFn()
    expect(mockFn).toBeCalledTimes(1)

    debounceFn()
    jest.advanceTimersByTime(100)
    expect(mockFn).toBeCalledTimes(1)

    debounceFn()
    jest.advanceTimersByTime(1000)
    expect(mockFn).toBeCalledTimes(1)

    debounceFn()
    jest.advanceTimersByTime(1000)
    expect(mockFn).toBeCalledTimes(2)
  })

  it('leading true & trailing true', () => {
    const debounceFn = useDebounce(mockFn, { wait: 1000, leading: true, trailing: true })

    debounceFn()
    expect(mockFn).toBeCalledTimes(1)

    debounceFn()
    jest.advanceTimersByTime(100)
    expect(mockFn).toBeCalledTimes(1)

    debounceFn()
    jest.advanceTimersByTime(1000)
    expect(mockFn).toBeCalledTimes(2)

    debounceFn()
    jest.advanceTimersByTime(1000)
    expect(mockFn).toBeCalledTimes(3)
  })
})
