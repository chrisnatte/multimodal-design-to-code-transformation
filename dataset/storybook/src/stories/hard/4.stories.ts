import HardComponentActionTable from './4.vue'
import HardComponentActionTableMethodA from './4-a.vue'

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
