import useSet from '@/hooks/useSet'

describe('useSet', () => {
  function hasValues(set: Set<any>, values: any[]) {
    values.forEach((value) => {
      expect(set.has(value)).toBe(true)
    })
  }

  it('basic usage', () => {
    const [set] = useSet()

    expect(set.value).toBeInstanceOf(Set)
  })

  it('initial value', () => {
    const [set] = useSet([1, 1, '1'])

    hasValues(set.value, [1, '1'])
    expect(set.value.size).toBe(2)
  })

  it('object value', () => {
    const obj1 = {}
    const obj1Copy = obj1
    const obj2 = {}

    const [set] = useSet([obj1, obj1Copy, obj2])

    hasValues(set.value, [obj1, obj2])
    expect(set.value.size).toBe(2)
  })

  it('add', () => {
    const [set, { add }] = useSet([1])

    add(1)
    add(2)

    hasValues(set.value, [1, 2])
    expect(set.value.size).toBe(2)
  })

  it('has', () => {
    const [set, { has }] = useSet([1])

    expect(has(1)).toBe(true)
    expect(has(2)).toBe(false)
  })

  it('remove', () => {
    const [set, { has, remove }] = useSet([1])

    expect(has(1)).toBe(true)
    remove(1)
    expect(has(1)).toBe(false)
  })

  it('clear', () => {
    const [set, { add, has, remove, clear }] = useSet([1])

    add(2)
    clear()

    expect(has(1)).toBe(false)
    expect(has(2)).toBe(false)
  })

  it('reset', () => {
    const [set, { add, has, remove, reset }] = useSet([1])

    add(2)
    remove(1)
    reset()

    expect(has(1)).toBe(true)
    expect(has(2)).toBe(false)
  })
})
