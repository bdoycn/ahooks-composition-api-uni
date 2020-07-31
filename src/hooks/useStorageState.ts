import { Ref, ref, UnwrapRef, watchEffect } from '@vue/composition-api'
import { NoCallRecord } from '@/types/basic'

const getStorageValue = (storage: Storage, key: string): any => {
  const strVal = storage.getItem(key)

  let val
  try {
    val = strVal === null ? null : JSON.parse(strVal)
  } catch {
    val = null
  }

  return val
}

const setStorageValue = (storage: Storage, key: string, val: AllowType): void => {
  if (val == null) {
    storage.removeItem(key)
    return
  }

  let strVal
  if (typeof val === 'object') strVal = JSON.stringify(val)
  else strVal = val.toString()

  storage.setItem(key, strVal)
}

const getRealValue = <T extends AllowType>(value?: Value<T>, previousState?: T): T | undefined => {
  let realValue

  if (typeof value === 'function') realValue = value(previousState)
  else realValue = value

  return realValue
}

/**
 * 使用 localStorage 状态
 * 自动将 state 值存入 localStorage
 * 如果 localStorage 中存在值 则将该值设为当前值
 * 如需删除 则将值设为 null 或 undefined
 * @param key 键
 * @param [defaultValue] 默认值
 */
export default function useStorageState<T extends AllowType>(
  storage: Storage,
  key: string,
  defaultValue?: Value<T>,
): Res<T> {
  const localStateValue = getStorageValue(storage, key) as T | null
  const realValue = localStateValue ?? getRealValue(defaultValue)
  const state = ref(realValue)

  watchEffect(() => {
    setStorageValue(storage, key, state.value)
  })

  return state
}

export const createUseStorageState = (storage: Storage) => useStorageState.bind(null, storage)

export type AllowType = string | number | boolean | null | undefined | NoCallRecord

export type FnValue<T> = (previousState?: T) => T

export type Value<T> = T | FnValue<T>

export type State<T> = Ref<UnwrapRef<T> | undefined>

export type Res<T> = State<T>

export type UseStorageStateType = ReturnType<typeof createUseStorageState>
