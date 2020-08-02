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


  return [templateData, { addTemplateData }] as const
}

export default useTemplateData
