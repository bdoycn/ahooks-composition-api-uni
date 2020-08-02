import { ref, Ref } from '@vue/composition-api'

function useToggle<D = boolean | undefined>(): [Ref<D>, Actions<D, D>]

function useToggle<D = IState>(defaultValue: D): [Ref<D>, Actions<D, D>]

function useToggle<D = IState, R = IState>(
  defaultValue: D,
  reverseValue: R
): [Ref<D | R>, Actions<D, R>]

/**
 * 用于在两个状态值间切换的 Hook
 * @param [defaultValue=false] 默认值
 * @param [reverseValue=!defaultValue] 相反值
 */
function useToggle<D extends IState = IState, R extends IState = IState>(
  defaultValue: D = false as D,
  reverseValue: R = !defaultValue as R,
) {
  const state = ref<D | R>(defaultValue)
  const unwrapDefaultValue = ref(defaultValue).value
  const unwrapReverseValue = ref(reverseValue).value

  const toggle: Toggle<D, R> = (value) => {
    let newValue = ref(value).value
    if (newValue === undefined) {
      newValue = (state.value === unwrapDefaultValue) ? unwrapReverseValue : unwrapDefaultValue
    }

    state.value = newValue
  }

  const setLeft: SetLeft = () => (state.value = unwrapDefaultValue)

  const setRight: SetRight = () => (state.value = unwrapReverseValue)

  const actions: Actions<D, R> = {
    toggle,
    setLeft,
    setRight,
  }

  return [state, actions]
}

export default useToggle

export type IState = any

export type Toggle<D, R> = (value?: D | R) => void

export type SetLeft = () => void

export type SetRight = () => void

export type Actions<D, R> = {
  toggle: Toggle<D, R>,
  setLeft: SetLeft,
  setRight: SetRight,
}

