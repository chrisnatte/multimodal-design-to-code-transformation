import SimpleComponentFilter from './10.vue'
import SimpleComponentFilterMethodA from './10-a.vue'

export default {
  title: 'Simple/10-Filter',
  component: SimpleComponentFilter,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentFilterMethodA },
    template: '<SimpleComponentFilterMethodA />',
  }),
}
