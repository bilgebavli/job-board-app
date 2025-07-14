// import { describe, it, expect } from 'vitest'

// import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })


import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import JbButton from '@/components/JbButton.vue'
import { createRouter, createMemoryHistory, RouterLink } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
})

describe('JbButton', () => {
  it('renders a button element when no "to" prop is provided', () => {
    const wrapper = mount(JbButton, {
      props: { textColor: 'red' },
      slots: { default: 'Click me' },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('Click me')
  })

  it('renders a router-link when "to" prop is provided', async () => {
    const wrapper = mount(JbButton, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink,
        },
      },
      props: { to: '/home', textColor: 'blue' },
      slots: { default: 'Go Home' },
    })

    // router-link var mı kontrol et
    expect(wrapper.findComponent(RouterLink).exists()).toBe(true)
    expect(wrapper.text()).toContain('Go Home')
  })

  it('applies correct classes from props', () => {
    const wrapper = mount(JbButton, {
      props: {
        bgColor: 'green',
        textColor: 'white',
        block: true,
        flat: true,
        outline: true,
        textAlign: 'left',
        textTransform: 'uppercase',
        disabled: true,
      },
    })

    const btn = wrapper.find('button')

    expect(btn.classes()).toContain('bg-green')
    expect(btn.classes()).toContain('text-white')
    expect(btn.classes()).toContain('btn-block')
    expect(btn.classes()).toContain('rounded-0')
    expect(btn.attributes('disabled')).toBeDefined()
  })
})
