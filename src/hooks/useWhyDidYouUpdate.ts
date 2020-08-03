import { watchEffect, watch, reactive, isRef, isReactive } from '@vue/composition-api'
import { isEqual, cloneDeep } from 'lodash-es'


function filterInvalidDependencies(dependencies: Dependencies) {
  return Object.keys(dependencies)
    .filter((key: string) => (
      (typeof dependencies[key] !== 'function')
      && dependencies[key] != null
    ))
    .reduce((prev, key) => {
      prev[key] = dependencies[key]
      return prev
    }, {} as Dependencies)
}

/**
 * 对比依赖子项 是否相同
 * @param item 当前的依赖子项
 * @param prevItem 之前的依赖子项
 */
function contrastDependenciesItem(
  item: any,
  prevItem: any,
) {
  if (isRef(item)) return item.value === prevItem.value
  else if (isReactive(item)) return isEqual(item, prevItem)
  return item === prevItem
}

/**
 * 查看组件更新是哪些依赖所导致的
 * @param componentName 组件名称
 * @param dependencies 当前组件的依赖项 如 props ref reactive
 * @param [options] 监听选项
 * @param [options.immediate = true] 立即监听
 * @param [options.deep = false] 深度监听
 */
function useWhyDidYouUpdate(
  componentName: string,
  dependencies: Dependencies,
): void {
  // watch 中不能存在函数
  const filteredDependencies = filterInvalidDependencies(dependencies)
  const filteredDependenciesEntries = Object.entries(filteredDependencies)
  const filteredDependenciesKeys = filteredDependenciesEntries.map(([key]) => key)
  const filteredDependenciesValues = filteredDependenciesEntries.map(([, value]) => value)

  // 存储 reactive 类型的依赖的映射关系 (原值 -> 深拷贝之后的值)
  const reactiveDependenciesMap = new Map()

  // 处理后的依赖值 (将 reactive 值封装到函数中)
  const processedDependenciesValues
    = filteredDependenciesValues.map((item) => (isReactive(item) ? () => item : item))

  watch(processedDependenciesValues, (
    currDependenciesArray: any[],
    prevDependenciesArray: any[] = [],
  ) => {
    const changedDependencies = currDependenciesArray.reduce((prev, currItem, index) => {
      const _isReactive = isReactive(currItem)
      const prevItem = _isReactive
        ? reactiveDependenciesMap.get(currItem)
        : prevDependenciesArray[index]

      const isDifferent = !contrastDependenciesItem(currItem, prevItem)
      if (isDifferent) {
        const key = filteredDependenciesKeys[index]
        prev[0][key] = currItem
        prev[1][key] = prevItem
      }

      reactiveDependenciesMap.set(currItem, cloneDeep(currItem))
      return prev
    }, [{}, {}] as [Dependencies, Dependencies])

    if (Object.keys(changedDependencies).length > 0) {
      console.group(`[why-did-you-update] ${componentName}`)
      console.log(changedDependencies[0])
      console.log(changedDependencies[1])
      console.groupEnd()
    }
  }, {
    immediate: true,
    deep: true,
  })
}

export default useWhyDidYouUpdate

type Dependencies = Record<string, any>
