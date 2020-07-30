import Vue from 'vue'
import useLocalStorageState from '@/hooks/useLocalStorageState'

describe('useLocalStorageState', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('initial state', () => {
    function initialByBaseTypeValue(val: any, res = val) {
      localStorage.clear()

      const state = useLocalStorageState('testKey', val)

      expect(state.value).toBe(val)
      expect(localStorage.getItem('testKey')).toBe(res.toString())
    }

    it('initial state not defaultValue', () => {
      const state = useLocalStorageState('testKey')

      expect(state.value).toBe(undefined)
      expect(localStorage.getItem('testKey')).toBe(null)
    })

    it('initial undefined', () => {
      const state = useLocalStorageState('testKey', undefined)

      expect(state.value).toBe(undefined)
      expect(localStorage.getItem('testKey')).toBe(null)
    })

    it('initial null', () => {
      const state = useLocalStorageState('testKey', null)

      expect(state.value).toBe(null)
      expect(localStorage.getItem('testKey')).toBe(null)
    })

    it('initial number', () => {
      initialByBaseTypeValue(-1)
      initialByBaseTypeValue(0)
      initialByBaseTypeValue(1)
    })

    it('initial string', () => {
      initialByBaseTypeValue('1')
      initialByBaseTypeValue('xx')
    })

    it('initial boolean', () => {
      initialByBaseTypeValue(false)
      initialByBaseTypeValue(true)
    })

    it('initial object', () => {
      const val = { a: 1, b: '2' }
      const state = useLocalStorageState('testKey', val)

      expect(state.value).toEqual(val)
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(val))
    })

    it('initial array', () => {
      const val = [1, 2, 3]
      const state = useLocalStorageState('testKey', val)

      expect(state.value).toEqual(val)
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(val))
    })
  })


  describe('get state', () => {
    it('get different key state', () => {
      const state1 = useLocalStorageState('testKey1', 1)

      const state2 = useLocalStorageState('testKey2', 2)

      expect(state1.value).toBe(1)
      expect(state2.value).toBe(2)
    })

    it('get same key state', () => {
      const state1 = useLocalStorageState('testKey', 1)

      const state2 = useLocalStorageState('testKey', 2)

      expect(state1).toEqual(state2)
    })
  })


  describe('set state', () => {
    async function setStateByBaseTypeValue(val: any, resVal = val) {
      localStorage.clear()

      const state = useLocalStorageState('testKey')

      state.value = val

      expect(state.value).toBe(val)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(resVal == null ? null : resVal.toString())
    }

    it('set undefined', async () => {
      const state = useLocalStorageState('testKey', 1)

      state.value = undefined

      expect(state.value).toBe(undefined)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(null)
    })

    it('set null', async () => {
      await setStateByBaseTypeValue(null)
    })

    it('set string', async () => {
      await setStateByBaseTypeValue('')
      await setStateByBaseTypeValue('1')
      await setStateByBaseTypeValue('xx')
    })

    it('set number', async () => {
      await setStateByBaseTypeValue(-1)
      await setStateByBaseTypeValue(0)
      await setStateByBaseTypeValue(1)
    })

    it('set boolean', async () => {
      await setStateByBaseTypeValue(false)
      await setStateByBaseTypeValue(true)
    })

    it('set object', async () => {
      const val = { a: 1, b: '2' }
      const state = useLocalStorageState('testKey')

      state.value = val

      expect(state.value).toEqual(val)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(val))
    })

    it('set array', async () => {
      const val = [1, '2', undefined]
      const state = useLocalStorageState('testKey')

      state.value = val

      expect(state.value).toEqual(val)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(val))
    })

    it('multiple set state', async () => {
      const state = useLocalStorageState('testKey')

      const array = [1, '2', undefined]
      state.value = array
      expect(state.value).toEqual(array)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(array))

      const obj = { a: 1, b: '', c: undefined }
      state.value = obj
      expect(state.value).toEqual(obj)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(obj))

      const num = 1
      state.value = num
      expect(state.value).toEqual(num)
      await Vue.nextTick()
      expect(localStorage.getItem('testKey')).toBe(num.toString())
    })
  })
})
