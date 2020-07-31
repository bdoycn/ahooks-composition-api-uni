import useStorageState from '@/hooks/useStorageState'
import { commonTest } from './helpers/useStorageState'

const useLocalStorageState
  = (...params: UseStorageStateResetParams) => useStorageState(localStorage, ...params)
const useSessionStorageState
  = (...params: UseStorageStateResetParams) => useStorageState(sessionStorage, ...params)

commonTest(useLocalStorageState, 'useStorageState localStorage', localStorage)
commonTest(useSessionStorageState, 'useStorageState sessionStorage', sessionStorage)

type UseStorageStateResetParams
  = typeof useStorageState extends (arg0: any, ...args: infer P) => any ? P : never
