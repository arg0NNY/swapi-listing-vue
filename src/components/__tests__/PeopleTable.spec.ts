import type { People } from '../../types'
import { mount } from '@vue/test-utils'
import PeopleTable from '../PeopleTable.vue'

describe('PeopleTable', () => {
  const people: People[] = [
    {
      id: '1',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
    },
    {
      id: '2',
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
    }
  ]

  it('should render all the given people', () => {
    const wrapper = mount(PeopleTable, { props: { people } })

    for (const p of people) {
      expect(wrapper.text()).toContain(p.name)
    }
  })

  it('should add person to favorite on click if person is not in the favorite list', async () => {
    const wrapper = mount(PeopleTable, { props: { people, favorite: [] } })

    await wrapper.get('[data-test="star-btn"]').trigger('click')

    expect(wrapper.emitted()['update:favorite'][0]).toEqual([[people[0]]])
  })

  it('should remove person from favorite on click if person is in the favorite list', async () => {
    const wrapper = mount(PeopleTable, { props: { people, favorite: people } })

    await wrapper.get('[data-test="star-btn"]').trigger('click')

    expect(wrapper.emitted()['update:favorite'][0]).toEqual([[people[1]]])
  })
})
