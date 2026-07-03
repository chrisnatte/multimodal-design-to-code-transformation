import SimpleComponentPasswordInput from './1.vue'
import SimpleComponentPasswordInputMethodA from './1-a.vue'
import SimpleComponentPasswordInputMethodB1 from './1-b1.vue'
import SimpleComponentPasswordInputMethodB2 from './1-b2.vue'
import SimpleComponentPasswordInputMethodB3 from './1-b3.vue'
import SimpleComponentPasswordInputMethodC1 from './1-c1.vue'
import SimpleComponentPasswordInputMethodC2 from './1-c2.vue'
import SimpleComponentPasswordInputMethodC3 from './1-c3.vue'

export default {
  title: 'Components/Simple/1-Password-Input',
  component: SimpleComponentPasswordInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodA },
    template: '<SimpleComponentPasswordInputMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodB1 },
    template: '<SimpleComponentPasswordInputMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodB2 },
    template: '<SimpleComponentPasswordInputMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodB3 },
    template: '<SimpleComponentPasswordInputMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodC1 },
    template: '<SimpleComponentPasswordInputMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodC2 },
    template: '<SimpleComponentPasswordInputMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodC3 },
    template: '<SimpleComponentPasswordInputMethodC3 />',
  }),
}
