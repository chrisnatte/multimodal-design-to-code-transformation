import MediumComponentLoginCard from './1.vue'
import MediumComponentLoginCardMethodA from './1-a.vue'

export default {
  title: 'Medium/1-Login-Card',
  component: MediumComponentLoginCard,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentLoginCardMethodA },
    template: '<MediumComponentLoginCardMethodA />',
  }),
}
