import SimpleComponentSearch from './8.vue'
import SimpleComponentSearchMethodA from './8-a.vue'
import SimpleComponentSearchMethodB1 from './8-b1.vue'
import SimpleComponentSearchMethodB2 from './8-b2.vue'
import SimpleComponentSearchMethodB3 from './8-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentSearchMethodB1 },
    template: '<SimpleComponentSearchMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentSearchMethodB2 },
    template: '<SimpleComponentSearchMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentSearchMethodB3 },
    template: '<SimpleComponentSearchMethodB3 />',
  }),
}

