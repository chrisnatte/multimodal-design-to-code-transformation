import SimpleComponentLoadingState from '../../../code/components/gt/simple/7.vue'
import SimpleComponentLoadingStateMethodA from './7-a.vue'
import SimpleComponentLoadingStateMethodB1 from './7-b1.vue'
import SimpleComponentLoadingStateMethodB2 from './7-b2.vue'
import SimpleComponentLoadingStateMethodB3 from './7-b3.vue'
import SimpleComponentLoadingStateMethodC1 from './7-c1.vue'
import SimpleComponentLoadingStateMethodC2 from './7-c2.vue'
import SimpleComponentLoadingStateMethodC3 from './7-c3.vue'

export default {
  title: 'Components/Simple/7-Loading-State',
  component: SimpleComponentLoadingState,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodA },
    template: '<SimpleComponentLoadingStateMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodB1 },
    template: '<SimpleComponentLoadingStateMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodB2 },
    template: '<SimpleComponentLoadingStateMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodB3 },
    template: '<SimpleComponentLoadingStateMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodC1 },
    template: '<SimpleComponentLoadingStateMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodC2 },
    template: '<SimpleComponentLoadingStateMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentLoadingStateMethodC3 },
    template: '<SimpleComponentLoadingStateMethodC3 />',
  }),
}
