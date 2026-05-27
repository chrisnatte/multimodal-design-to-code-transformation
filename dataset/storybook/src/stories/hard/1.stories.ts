import HardComponentEditDialogGroundTruth from './1.vue'
import HardComponentEditDialogMethodA from './1-a.vue'
import HardComponentEditDialogMethodB1 from './1-b1.vue'
import HardComponentEditDialogMethodB2 from './1-b2.vue'
import HardComponentEditDialogMethodB3 from './1-b3.vue'
import HardComponentEditDialogMethodC1 from './1-c1.vue'
import HardComponentEditDialogMethodC2 from './1-c2.vue'
import HardComponentEditDialogMethodC3 from './1-c3.vue'

export default {
  title: 'Hard/1-Edit-Dialog',
  component: HardComponentEditDialogGroundTruth,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentEditDialogMethodA },
    template: '<HardComponentEditDialogMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { HardComponentEditDialogMethodB1 },
    template: '<HardComponentEditDialogMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentEditDialogMethodB2 },
    template: '<HardComponentEditDialogMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentEditDialogMethodB3 },
    template: '<HardComponentEditDialogMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { HardComponentEditDialogMethodC1 },
    template: '<HardComponentEditDialogMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { HardComponentEditDialogMethodC2 },
    template: '<HardComponentEditDialogMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { HardComponentEditDialogMethodC3 },
    template: '<HardComponentEditDialogMethodC3 />',
  }),
}
