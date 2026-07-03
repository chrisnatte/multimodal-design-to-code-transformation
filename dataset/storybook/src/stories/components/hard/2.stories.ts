import HardComponentUserTable from './2.vue'
import HardComponentUserTableMethodA from './2-a.vue'
import HardComponentUserTableMethodB1 from './2-b1.vue'
import HardComponentUserTableMethodB2 from './2-b2.vue'
import HardComponentUserTableMethodB3 from './2-b3.vue'
import HardComponentUserTableMethodC1 from './2-c1.vue'
import HardComponentUserTableMethodC2 from './2-c2.vue'
import HardComponentUserTableMethodC3 from './2-c3.vue'

export default {
  title: 'Components/Hard/2-User-Table',
  component: HardComponentUserTable,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentUserTableMethodA },
    template: '<HardComponentUserTableMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { HardComponentUserTableMethodB1 },
    template: '<HardComponentUserTableMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentUserTableMethodB2 },
    template: '<HardComponentUserTableMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentUserTableMethodB3 },
    template: '<HardComponentUserTableMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { HardComponentUserTableMethodC1 },
    template: '<HardComponentUserTableMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { HardComponentUserTableMethodC2 },
    template: '<HardComponentUserTableMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { HardComponentUserTableMethodC3 },
    template: '<HardComponentUserTableMethodC3 />',
  }),
}
