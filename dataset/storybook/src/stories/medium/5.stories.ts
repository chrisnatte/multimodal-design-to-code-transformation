import MediumComponentProductCard from './5.vue'
import MediumComponentProductCardMethodA from './5-a.vue'

export default {
  title: 'Medium/5-Product-Card',
  component: MediumComponentProductCard,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentProductCardMethodA },
    template: '<MediumComponentProductCardMethodA />',
  }),
}
