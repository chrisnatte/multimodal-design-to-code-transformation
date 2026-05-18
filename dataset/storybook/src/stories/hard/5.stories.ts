import HardComponentStepFormularDialog from './5.vue'
import HardComponentStepFormularDialogMethodA from './5-a.vue'

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
