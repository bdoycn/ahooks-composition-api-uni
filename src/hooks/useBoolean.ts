import { ref, Ref } from '@vue/composition-api'

/**
 * 使用 Boolean 变量
 * @param defaultValue 默认值 默认为 false
 */
export default function useBoolean(defaultValue: boolean = false): Res {
  const state = ref(defaultValue)

  const toggle: Toggle = () => (state.value = !state.value)

  return [state, toggle]
}


export type Toggle = () => void
export type Res = [Ref<boolean>, Toggle]
