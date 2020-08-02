import { ref, Ref } from '@vue/composition-api'

/**
 * 使用 Set
 * @param initialValue 初始化值
 */
export default function useSet<T = any>(initialValue?: Iterable<T>): Res<T> {
  const set = ref(new Set(initialValue))

  // 克隆一份新的 set
  const cloneNewSet = () => (set.value = new Set(set.value))

  const proxySetMethod = <
    M extends Set<any>['add' | 'has' | 'delete' | 'clear']
  >(method: M): M => ((...params: Parameters<M>) => {
    cloneNewSet()
    // @ts-ignore
    return method.call(set.value, ...params)
  }) as M

  const add = proxySetMethod(set.value.add)

  const has = proxySetMethod(set.value.has)

  const remove = proxySetMethod(set.value.delete)

  const clear = proxySetMethod(set.value.clear)

  const reset = () => {
    clear()

    if (!initialValue) return
    for (const item of initialValue) set.value.add(item)
  }

  return [set, {
    add,
    has,
    remove,
    clear,
    reset,
  }]
}

export type Res<T> = [
  Ref<Set<T>>, {
    add: (value: T) => void,
    has: (value: T) => Boolean,
    remove: (value: T) => void,
    clear: () => void,
    reset: () => void,
  }
]
