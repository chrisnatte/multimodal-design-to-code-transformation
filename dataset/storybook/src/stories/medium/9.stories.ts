import MediumComponentStepForStep from './9.vue'
import MediumComponentStepForStepMethodA from './9-a.vue'
import MediumComponentStepForStepMethodB1 from './9-b1.vue'
import MediumComponentStepForStepMethodB2 from './9-b2.vue'
import MediumComponentStepForStepMethodB3 from './9-b3.vue'
import MediumComponentStepForStepMethodC1 from './9-c1.vue'
import MediumComponentStepForStepMethodC2 from './9-c2.vue'
import MediumComponentStepForStepMethodC3 from './9-c3.vue'

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

export const MethodC1 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodC1 },
    template: '<MediumComponentStepForStepMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodC2 },
    template: '<MediumComponentStepForStepMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { MediumComponentStepForStepMethodC3 },
    template: '<MediumComponentStepForStepMethodC3 />',
  }),
}
