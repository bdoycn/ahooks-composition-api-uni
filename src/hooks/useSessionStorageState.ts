import { createUseStorageState } from './useStorageState'

const useSessionStorageState = createUseStorageState(sessionStorage)

export default useSessionStorageState
