import HardComponentActionTable from './4.vue'
import HardComponentActionTableMethodA from './4-a.vue'
import HardComponentActionTableMethodB1 from './4-b1.vue'
import HardComponentActionTableMethodB2 from './4-b2.vue'
import HardComponentActionTableMethodB3 from './4-b3.vue'
import HardComponentActionTableMethodC1 from './4-c1.vue'
import HardComponentActionTableMethodC2 from './4-c2.vue'
import HardComponentActionTableMethodC3 from './4-c3.vue'

export default {
  title: 'Components/Hard/4-Actions-Table',
  component: HardComponentActionTable,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentActionTableMethodA },
    template: '<HardComponentActionTableMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { HardComponentActionTableMethodB1 },
    template: '<HardComponentActionTableMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentActionTableMethodB2 },
    template: '<HardComponentActionTableMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentActionTableMethodB3 },
    template: '<HardComponentActionTableMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { HardComponentActionTableMethodC1 },
    template: '<HardComponentActionTableMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { HardComponentActionTableMethodC2 },
    template: '<HardComponentActionTableMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { HardComponentActionTableMethodC3 },
    template: '<HardComponentActionTableMethodC3 />',
  }),
}
