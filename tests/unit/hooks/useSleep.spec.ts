import useSleep from '@/hooks/useSleep'

describe('useSleep', () => {
  it('basic usage', async () => {
    const sleepTime = 100
    const startTime = Date.now()

    await useSleep(sleepTime)
      .then(() => {
        const endTime = Date.now()
        expect(endTime - startTime).toBeGreaterThanOrEqual(sleepTime)
      })
  })
})
