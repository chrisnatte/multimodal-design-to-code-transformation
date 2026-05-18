import MediumComponentStepForStep from './9.vue'
import MediumComponentStepForStepMethodA from './9-a.vue'

export default {
  title: 'Medium/9-Step-For-Step',
  component: MediumComponentStepForStep,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentStepForStepMethodA },
    template: '<MediumComponentStepForStepMethodA />',
  }),
}
