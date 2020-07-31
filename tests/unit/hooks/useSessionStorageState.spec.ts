import useSessionStorageState from '@/hooks/useSessionStorageState'
import { commonTest } from './helpers/useStorageState'

commonTest(useSessionStorageState, 'useSessionStorageState', sessionStorage)
