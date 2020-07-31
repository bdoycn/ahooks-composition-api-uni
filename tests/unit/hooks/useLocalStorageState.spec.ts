import useLocalStorageState from '@/hooks/useLocalStorageState'
import { commonTest } from './helpers/useStorageState'

commonTest(useLocalStorageState, 'useLocalStorageState', localStorage)
