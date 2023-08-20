import { useLocalStorage } from '@vueuse/core'
import type { People } from '@/types'

export default () => useLocalStorage<People[]>('people.favorite', () => [])
