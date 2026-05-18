import HardComponentUserTable from './2.vue'
import HardComponentUserTableMethodA from './2-a.vue'

export default {
  title: 'Hard/2-User-Table',
  component: HardComponentUserTable,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentUserTableMethodA },
    template: '<HardComponentUserTableMethodA />',
  }),
}
