import MediumComponentStepForStep from './9.vue'
import MediumComponentStepForStepMethodA from './9-a.vue'
import MediumComponentStepForStepMethodB1 from './9-b1.vue'
import MediumComponentStepForStepMethodB2 from './9-b2.vue'
import MediumComponentStepForStepMethodB3 from './9-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodB1 },
    template: '<MediumComponentStepForStepMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodB2 },
    template: '<MediumComponentStepForStepMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodB3 },
    template: '<MediumComponentStepForStepMethodB3 />',
  }),
}

