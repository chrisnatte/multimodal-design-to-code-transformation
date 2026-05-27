import MediumComponentInfoCardWithProgress from './10.vue'
import MediumComponentInfoCardWithProgressMethodA from './10-a.vue'
import MediumComponentInfoCardWithProgressMethodB1 from './10-b1.vue'
import MediumComponentInfoCardWithProgressMethodB2 from './10-b2.vue'
import MediumComponentInfoCardWithProgressMethodB3 from './10-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentInfoCardWithProgressMethodB1 },
    template: '<MediumComponentInfoCardWithProgressMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentInfoCardWithProgressMethodB2 },
    template: '<MediumComponentInfoCardWithProgressMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentInfoCardWithProgressMethodB3 },
    template: '<MediumComponentInfoCardWithProgressMethodB3 />',
  }),
}

