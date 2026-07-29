import SimpleComponentFilter from '../../../code/components/gt/simple/10.vue'
import SimpleComponentFilterMethodA from './10-a.vue'
import SimpleComponentFilterMethodB1 from './10-b1.vue'
import SimpleComponentFilterMethodB2 from './10-b2.vue'
import SimpleComponentFilterMethodB3 from './10-b3.vue'
import SimpleComponentFilterMethodC1 from './10-c1.vue'
import SimpleComponentFilterMethodC2 from './10-c2.vue'
import SimpleComponentFilterMethodC3 from './10-c3.vue'

export default {
  title: 'Components/Simple/10-Filter',
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

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentFilterMethodC1 },
    template: '<SimpleComponentFilterMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentFilterMethodC2 },
    template: '<SimpleComponentFilterMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentFilterMethodC3 },
    template: '<SimpleComponentFilterMethodC3 />',
  }),
}
