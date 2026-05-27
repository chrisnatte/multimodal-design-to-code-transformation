import MediumComponentPaketList from './7.vue'
import MediumComponentPaketListMethodA from './7-a.vue'
import MediumComponentPaketListMethodB1 from './7-b1.vue'
import MediumComponentPaketListMethodB2 from './7-b2.vue'
import MediumComponentPaketListMethodB3 from './7-b3.vue'
import MediumComponentPaketListMethodC1 from './7-c1.vue'
import MediumComponentPaketListMethodC2 from './7-c2.vue'
import MediumComponentPaketListMethodC3 from './7-c3.vue'

export default {
  title: 'Medium/7-Paket-List',
  component: MediumComponentPaketList,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentPaketListMethodA },
    template: '<MediumComponentPaketListMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentPaketListMethodB1 },
    template: '<MediumComponentPaketListMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentPaketListMethodB2 },
    template: '<MediumComponentPaketListMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentPaketListMethodB3 },
    template: '<MediumComponentPaketListMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { MediumComponentPaketListMethodC1 },
    template: '<MediumComponentPaketListMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { MediumComponentPaketListMethodC2 },
    template: '<MediumComponentPaketListMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { MediumComponentPaketListMethodC3 },
    template: '<MediumComponentPaketListMethodC3 />',
  }),
}
