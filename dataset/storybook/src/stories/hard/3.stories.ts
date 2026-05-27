import HardComponentFilterList from './3.vue'
import HardComponentFilterListMethodA from './3-a.vue'
import HardComponentFilterListMethodB1 from './3-b1.vue'
import HardComponentFilterListMethodB2 from './3-b2.vue'
import HardComponentFilterListMethodB3 from './3-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { HardComponentFilterListMethodB1 },
    template: '<HardComponentFilterListMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentFilterListMethodB2 },
    template: '<HardComponentFilterListMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentFilterListMethodB3 },
    template: '<HardComponentFilterListMethodB3 />',
  }),
}

