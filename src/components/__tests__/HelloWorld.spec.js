import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

//test if Helloworld Component display good information
describe('HelloWorld', () => {
  it('renders properly', () => {
    //mount HelloWold component with specific message
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    //expect specific message after component mounted
    expect(wrapper.text()).toContain('Hello Vitest')
    const content = 'Hello Vitest'
    //test if component contain specfic test
    expect(wrapper.props().msg).toBe(content)
  })
})
