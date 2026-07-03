import HardComponentPasswordInput from './6.vue'
import HardComponentPasswordInputMethodA from './6-a.vue'
import HardComponentPasswordInputMethodB1 from './6-b1.vue'
import HardComponentPasswordInputMethodB2 from './6-b2.vue'
import HardComponentPasswordInputMethodB3 from './6-b3.vue'
import HardComponentPasswordInputMethodC1 from './6-c1.vue'
import HardComponentPasswordInputMethodC2 from './6-c2.vue'
import HardComponentPasswordInputMethodC3 from './6-c3.vue'

export default {
  title: 'Components/Hard/6-Password-Input',
  component: HardComponentPasswordInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentPasswordInputMethodA },
    template: '<HardComponentPasswordInputMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodB1 },
    template: '<HardComponentPasswordInputMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodB2 },
    template: '<HardComponentPasswordInputMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodB3 },
    template: '<HardComponentPasswordInputMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodC1 },
    template: '<HardComponentPasswordInputMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodC2 },
    template: '<HardComponentPasswordInputMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { HardComponentPasswordInputMethodC3 },
    template: '<HardComponentPasswordInputMethodC3 />',
  }),
}
