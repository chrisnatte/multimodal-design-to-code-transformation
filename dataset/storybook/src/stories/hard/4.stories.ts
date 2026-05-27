import HardComponentActionTable from './4.vue'
import HardComponentActionTableMethodA from './4-a.vue'
import HardComponentActionTableMethodB1 from './4-b1.vue'
import HardComponentActionTableMethodB2 from './4-b2.vue'
import HardComponentActionTableMethodB3 from './4-b3.vue'

export default {
  title: 'Hard/4-Actions-Table',
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

