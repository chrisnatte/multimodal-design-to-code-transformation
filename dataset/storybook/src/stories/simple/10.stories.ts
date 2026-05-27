import SimpleComponentFilter from './10.vue'
import SimpleComponentFilterMethodA from './10-a.vue'
import SimpleComponentFilterMethodB1 from './10-b1.vue'
import SimpleComponentFilterMethodB2 from './10-b2.vue'
import SimpleComponentFilterMethodB3 from './10-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentFilterMethodB1 },
    template: '<SimpleComponentFilterMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentFilterMethodB2 },
    template: '<SimpleComponentFilterMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentFilterMethodB3 },
    template: '<SimpleComponentFilterMethodB3 />',
  }),
}

