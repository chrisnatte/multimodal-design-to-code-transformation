import MediumComponentProductCard from './5.vue'
import MediumComponentProductCardMethodA from './5-a.vue'
import MediumComponentProductCardMethodB1 from './5-b1.vue'
import MediumComponentProductCardMethodB2 from './5-b2.vue'
import MediumComponentProductCardMethodB3 from './5-b3.vue'
import MediumComponentProductCardMethodC1 from './5-c1.vue'
import MediumComponentProductCardMethodC2 from './5-c2.vue'
import MediumComponentProductCardMethodC3 from './5-c3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentProductCardMethodB1 },
    template: '<MediumComponentProductCardMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentProductCardMethodB2 },
    template: '<MediumComponentProductCardMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentProductCardMethodB3 },
    template: '<MediumComponentProductCardMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { MediumComponentProductCardMethodC1 },
    template: '<MediumComponentProductCardMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { MediumComponentProductCardMethodC2 },
    template: '<MediumComponentProductCardMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { MediumComponentProductCardMethodC3 },
    template: '<MediumComponentProductCardMethodC3 />',
  }),
}
