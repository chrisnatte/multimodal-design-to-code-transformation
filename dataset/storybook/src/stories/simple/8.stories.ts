import SimpleComponentSearch from './8.vue'
import SimpleComponentSearchMethodA from './8-a.vue'
import SimpleComponentSearchMethodB1 from './8-b1.vue'
import SimpleComponentSearchMethodB2 from './8-b2.vue'
import SimpleComponentSearchMethodB3 from './8-b3.vue'
import SimpleComponentSearchMethodC1 from './8-c1.vue'
import SimpleComponentSearchMethodC2 from './8-c2.vue'
import SimpleComponentSearchMethodC3 from './8-c3.vue'

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

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentSearchMethodC1 },
    template: '<SimpleComponentSearchMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentSearchMethodC2 },
    template: '<SimpleComponentSearchMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentSearchMethodC3 },
    template: '<SimpleComponentSearchMethodC3 />',
  }),
}
