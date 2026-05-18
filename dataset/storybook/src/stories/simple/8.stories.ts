import SimpleComponentSearch from './8.vue'
import SimpleComponentSearchMethodA from './8-a.vue'

export default {
  title: 'Simple/8-Search',
  component: SimpleComponentSearch,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentSearchMethodA },
    template: '<SimpleComponentSearchMethodA />',
  }),
}
