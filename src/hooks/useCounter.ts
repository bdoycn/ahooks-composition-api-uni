import { ref, Ref } from '@vue/composition-api'

const defaultOptions: Options = {

}

/**
 * 管理计数
 * @param [initialValue = 0] 默认值
 * @param [options] 选项
 * @param [options.min] 最小值
 * @param [options.max] 最大值
 */
export default function useCounter(
  initialValue: number = 0,
  options: Options = defaultOptions,
): Res {
  const { min, max } = options
  const current = ref(initialValue)

  const isInRange = (val: number) => ((!min || val >= min) && (!max || val <= max))

  const inc = () => isInRange(current.value + 1) && current.value++
  const dec = () => isInRange(current.value - 1) && current.value--
  const reset = () => (current.value = initialValue)

  return {
    current,
    inc,
    dec,
    reset,
  }
}

export type Options = {
  min?: number,
  max?: number,
}

export type Res = {
  current: Ref<number>,
  inc: VoidFunction,
  dec: VoidFunction,
  reset: VoidFunction,
}
