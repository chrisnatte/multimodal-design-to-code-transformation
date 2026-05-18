import SimpleComponentLoadingState from './7.vue'
import SimpleComponentLoadingStateMethodA from './7-a.vue'

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
