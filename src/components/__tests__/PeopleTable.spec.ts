import type { People } from '../../types'
import { mount } from '@vue/test-utils'
import PeopleTable from '../PeopleTable.vue'

describe('PeopleTable', () => {
  it('should render all the given people', () => {
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

    const wrapper = mount(PeopleTable, { props: { people } })

    expect(wrapper.text()).toContain('Luke Skywalker')
    expect(wrapper.text()).toContain('C-3PO')
  })
})
