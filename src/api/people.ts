import type { People } from '@/types'
import request from '@/api/request'
import type { SwapiPaginate, SwapiPeople } from '@/api/types'
import { transformPeople } from '@/utils/swapi'

export async function searchPeople (search?: string): Promise<People[]> {
  const data = (await request.get('/people')) as SwapiPaginate<SwapiPeople>
  return data.results.map(transformPeople)
}

export async function getPeopleById (id: string): Promise<People> {
  return transformPeople((await request.get(`/people/${id}`)) as SwapiPeople)
}
