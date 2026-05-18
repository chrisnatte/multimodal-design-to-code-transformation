import HardComponentEditDialogGroundTruth from './1.vue'
import HardComponentEditDialogMethodA from './1-a.vue'

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
