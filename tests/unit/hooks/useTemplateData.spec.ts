import useTemplateData from '@/hooks/useTemplateData'
import { reactive } from '@vue/composition-api'

describe('useTemplateData', () => {
  it('basic usage', () => {
    const [templateData, { addTemplateData }] = useTemplateData()

    addTemplateData('title', 1)

    expect(templateData.title).toBe(1)
  })

  it('initialValue', () => {
    const [templateData, { addTemplateData }] = useTemplateData({ a: 1 })

    addTemplateData('title', 1)

    expect(templateData).toEqual({ a: 1, title: 1 })
  })

  it('add multiple data', () => {
    const [templateData, { addTemplateData }] = useTemplateData({ a: 1 })

    addTemplateData({ b: 2, c: 3, d: 4, e: 5 })

    expect(templateData).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
  })

  it('add data block by object', () => {
    const [templateData, { addTemplateDataBlock }] = useTemplateData({ a: 1 })

    addTemplateDataBlock('block', { b: 2, c: 3, d: 4, e: 5 })

    expect(templateData).toEqual({ a: 1, block: { b: 2, c: 3, d: 4, e: 5 } })
  })

  it('add data block', () => {
    const [templateData, { addTemplateDataBlock }] = useTemplateData({ a: 1 })

    addTemplateDataBlock('block', () => ({ b: 2, c: 3, d: 4, e: 5 }))

    expect(templateData).toEqual({ a: 1, block: { b: 2, c: 3, d: 4, e: 5 } })
  })
})
