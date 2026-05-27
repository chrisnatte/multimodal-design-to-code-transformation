import SimpleComponentStatusRow from './2.vue'
import SimpleComponentStatusRowMethodA from './2-a.vue'
import SimpleComponentStatusRowMethodB1 from './2-b1.vue'
import SimpleComponentStatusRowMethodB2 from './2-b2.vue'
import SimpleComponentStatusRowMethodB3 from './2-b3.vue'
import SimpleComponentStatusRowMethodC1 from './2-c1.vue'
import SimpleComponentStatusRowMethodC2 from './2-c2.vue'
import SimpleComponentStatusRowMethodC3 from './2-c3.vue'

export default {
  title: 'Simple/2-Status-Row',
  component: SimpleComponentStatusRow,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodA },
    template: '<SimpleComponentStatusRowMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodB1 },
    template: '<SimpleComponentStatusRowMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodB2 },
    template: '<SimpleComponentStatusRowMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodB3 },
    template: '<SimpleComponentStatusRowMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodC1 },
    template: '<SimpleComponentStatusRowMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodC2 },
    template: '<SimpleComponentStatusRowMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodC3 },
    template: '<SimpleComponentStatusRowMethodC3 />',
  }),
}
