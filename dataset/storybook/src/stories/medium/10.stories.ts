import MediumComponentInfoCardWithProgress from './10.vue'
import MediumComponentInfoCardWithProgressMethodA from './10-a.vue'

export default {
  title: 'Medium/10-Info-Card-With-Progress',
  component: MediumComponentInfoCardWithProgress,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentInfoCardWithProgressMethodA },
    template: '<MediumComponentInfoCardWithProgressMethodA />',
  }),
}
