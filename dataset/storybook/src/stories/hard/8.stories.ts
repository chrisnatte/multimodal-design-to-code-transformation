import HardComponentAdvancedProductDetailView from './8.vue'
import HardComponentAdvancedProductDetailViewMethodA from './8-a.vue'
import HardComponentAdvancedProductDetailViewMethodB1 from './8-b1.vue'
import HardComponentAdvancedProductDetailViewMethodB2 from './8-b2.vue'
import HardComponentAdvancedProductDetailViewMethodB3 from './8-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { HardComponentAdvancedProductDetailViewMethodB1 },
    template: '<HardComponentAdvancedProductDetailViewMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentAdvancedProductDetailViewMethodB2 },
    template: '<HardComponentAdvancedProductDetailViewMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentAdvancedProductDetailViewMethodB3 },
    template: '<HardComponentAdvancedProductDetailViewMethodB3 />',
  }),
}

