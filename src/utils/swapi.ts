import type { SwapiPeople } from '@/api/types'
import type { People } from '@/types'
import { pick } from '@/utils/object'

export const transformPeople = (people: SwapiPeople): People => ({
  id: people.url.match(/\/people\/([0-9]+)/)![1],
  ...pick(people, ['name', 'height', 'mass', 'hair_color'])
})
