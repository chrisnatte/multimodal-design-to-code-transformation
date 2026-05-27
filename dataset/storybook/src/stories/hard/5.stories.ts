import HardComponentStepFormularDialog from './5.vue'
import HardComponentStepFormularDialogMethodA from './5-a.vue'
import HardComponentStepFormularDialogMethodB1 from './5-b1.vue'
import HardComponentStepFormularDialogMethodB2 from './5-b2.vue'
import HardComponentStepFormularDialogMethodB3 from './5-b3.vue'

export default {
  title: 'Hard/5-Step-Formular-Dialog',
  component: HardComponentStepFormularDialog,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentStepFormularDialogMethodA },
    template: '<HardComponentStepFormularDialogMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { HardComponentStepFormularDialogMethodB1 },
    template: '<HardComponentStepFormularDialogMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentStepFormularDialogMethodB2 },
    template: '<HardComponentStepFormularDialogMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentStepFormularDialogMethodB3 },
    template: '<HardComponentStepFormularDialogMethodB3 />',
  }),
}

