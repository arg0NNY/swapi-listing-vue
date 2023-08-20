import type { SwapiPeople } from '@/api/types'
import { transformPeople } from '../swapi'

describe('utils/swapi', () => {
  it('should transform people as intended', () => {
    const people: SwapiPeople = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      url: 'https://swapi.dev/api/people/1/'
    }
    expect(transformPeople(people)).toEqual({
      id: '1',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond'
    })
  })
})
