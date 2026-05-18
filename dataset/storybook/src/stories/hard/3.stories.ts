import HardComponentFilterList from './3.vue'
import HardComponentFilterListMethodA from './3-a.vue'

export default {
  title: 'Hard/3-Filter-List',
  component: HardComponentFilterList,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentFilterListMethodA },
    template: '<HardComponentFilterListMethodA />',
  }),
}
