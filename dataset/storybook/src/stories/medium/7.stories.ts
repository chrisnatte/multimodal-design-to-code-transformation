import MediumComponentPaketList from './7.vue'
import MediumComponentPaketListMethodA from './7-a.vue'

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
