import { mount } from '@vue/test-utils'
import AsyncWrapper from '../AsyncWrapper.vue'

describe('AsyncWrapper', () => {
  it('should display loading status', () => {
    const wrapper = mount(AsyncWrapper, { props: { status: 'pending' } })

    expect(wrapper.text()).toContain('Loading')
  })

  it('should output "Something went wrong" message if status is error', () => {
    const wrapper = mount(AsyncWrapper, { props: { status: 'error' } })

    expect(wrapper.text()).toContain('Something went wrong')
  })
})
