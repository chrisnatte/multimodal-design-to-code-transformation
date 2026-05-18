import MediumComponentProfileView from './6.vue'
import MediumComponentProfileViewMethodA from './6-a.vue'

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
