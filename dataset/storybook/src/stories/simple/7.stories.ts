import SimpleComponentLoadingState from './7.vue'
import SimpleComponentLoadingStateMethodA from './7-a.vue'
import SimpleComponentLoadingStateMethodB1 from './7-b1.vue'
import SimpleComponentLoadingStateMethodB2 from './7-b2.vue'
import SimpleComponentLoadingStateMethodB3 from './7-b3.vue'

export default {
  title: 'Simple/7-Loading-State',
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

