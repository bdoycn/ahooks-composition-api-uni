import { isReactive, reactive } from '@vue/composition-api'

function useTemplateData(initialValue: Record<string, any> = {}) {
  const templateData = { ...initialValue }

  function addTemplateData(data: Record<string, any>): void
  function addTemplateData(key: string, value: any): void
  function addTemplateData(key: string | Record<string, any>, value?: any) {
    if (typeof key === 'string') {
      templateData[key] = value
      return
    }

    const data = key
    Object.assign(templateData, data)
  }

  function addTemplateDataBlock(key: string, value: Record<string, any>): void
  function addTemplateDataBlock(key: string, fn: () => Record<string, any>): void
  function addTemplateDataBlock(
    key: string,
    value: Record<string, any> | (() => Record<string, any>),
  ) {
    const realValue: Record<string, any>
      = typeof value === 'function' ? value() : value
    const reactiveRealValue = isReactive(realValue) ? realValue : reactive(realValue)

    templateData[key] = reactiveRealValue
  }


  return [templateData, { addTemplateData, addTemplateDataBlock }] as const
}

export default useTemplateData
