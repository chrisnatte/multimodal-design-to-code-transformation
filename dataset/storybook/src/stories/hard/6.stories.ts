import HardComponentPasswordInput from './6.vue'
import HardComponentPasswordInputMethodA from './6-a.vue'

export default {
  title: 'Hard/6-Password-Input',
  component: HardComponentPasswordInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentPasswordInputMethodA },
    template: '<HardComponentPasswordInputMethodA />',
  }),
}
