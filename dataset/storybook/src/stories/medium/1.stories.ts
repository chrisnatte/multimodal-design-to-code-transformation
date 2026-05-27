import MediumComponentLoginCard from './1.vue'
import MediumComponentLoginCardMethodA from './1-a.vue'
import MediumComponentLoginCardMethodB1 from './1-b1.vue'
import MediumComponentLoginCardMethodB2 from './1-b2.vue'
import MediumComponentLoginCardMethodB3 from './1-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentLoginCardMethodB1 },
    template: '<MediumComponentLoginCardMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentLoginCardMethodB2 },
    template: '<MediumComponentLoginCardMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentLoginCardMethodB3 },
    template: '<MediumComponentLoginCardMethodB3 />',
  }),
}

