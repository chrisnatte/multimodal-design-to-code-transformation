import MediumComponentProfileView from './6.vue'
import MediumComponentProfileViewMethodA from './6-a.vue'
import MediumComponentProfileViewMethodB1 from './6-b1.vue'
import MediumComponentProfileViewMethodB2 from './6-b2.vue'
import MediumComponentProfileViewMethodB3 from './6-b3.vue'
import MediumComponentProfileViewMethodC1 from './6-c1.vue'
import MediumComponentProfileViewMethodC2 from './6-c2.vue'
import MediumComponentProfileViewMethodC3 from './6-c3.vue'

export default {
  title: 'Medium/6-Profile-View',
  component: MediumComponentProfileView,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentProfileViewMethodA },
    template: '<MediumComponentProfileViewMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodB1 },
    template: '<MediumComponentProfileViewMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodB2 },
    template: '<MediumComponentProfileViewMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodB3 },
    template: '<MediumComponentProfileViewMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodC1 },
    template: '<MediumComponentProfileViewMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodC2 },
    template: '<MediumComponentProfileViewMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { MediumComponentProfileViewMethodC3 },
    template: '<MediumComponentProfileViewMethodC3 />',
  }),
}
