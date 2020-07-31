/**
 * 使用 Set
 * @param initialValue 初始化值
 */
export default function useSet<T = any>(initialValue?: Iterable<T>): ReturnType<T> {
  const set = new Set(initialValue)

  const reset = () => {
    set.clear()

    if (!initialValue) return
    for (const item of initialValue) set.add(item)
  }

  return [set, {
    add: set.add.bind(set),
    has: set.has.bind(set),
    remove: set.delete.bind(set),
    clear: set.clear.bind(set),
    reset,
  }]
}

export type ReturnType<T> = [
  Set<T>, {
    add: (value: T) => void,
    has: (value: T) => Boolean,
    remove: (value: T) => void,
    clear: () => void,
    reset: () => void,
  }
]
