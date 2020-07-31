/**
 * 防抖
 * @param fn 执行函数
 * @param [options]
 * @param [options.wait] 等待时间
 * @param [options.leading = false] 是否先执行后等待
 * @param [options.trailing = true] 是否先等待后执行
 */
export default function useDebounce<P extends any[], R>(
  fn: (...params: P) => R,
  options: Options = {},
) {
  const { wait = 1000, leading = false, trailing = true } = options

  let timer: number
  // 是否在间隔期间
  let inInterval: boolean
  // 是否首次执行(在间隔期间)
  let isFirstExecInInterval: boolean

  return (...params: P) => {
    clearTimeout(timer)
    if (isFirstExecInInterval) isFirstExecInInterval = false

    if (leading && !inInterval) {
      fn(...params)
      isFirstExecInInterval = true
    }
    inInterval = true

    timer = setTimeout(() => {
      inInterval = false

      if (
        (trailing && !leading)
        || (trailing && leading && !isFirstExecInInterval)
      ) fn(...params)
    }, wait)
  }
}

export type Options = {
  wait?: number,
  leading?: boolean,
  trailing?: boolean,
}

