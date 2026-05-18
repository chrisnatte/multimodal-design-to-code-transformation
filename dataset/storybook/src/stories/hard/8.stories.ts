import HardComponentAdvancedProductDetailView from './8.vue'
import HardComponentAdvancedProductDetailViewMethodA from './8-a.vue'

export default {
  title: 'Hard/8-Advanced-Product-Detail-View',
  component: HardComponentAdvancedProductDetailView,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentAdvancedProductDetailViewMethodA },
    template: '<HardComponentAdvancedProductDetailViewMethodA />',
  }),
}
