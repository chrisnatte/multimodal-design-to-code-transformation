import SimpleComponentPasswordInput from './1.vue'
import SimpleComponentPasswordInputMethodA from './1-a.vue'

export default {
  title: 'Simple/1-Password-Input',
  component: SimpleComponentPasswordInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentPasswordInputMethodA },
    template: '<SimpleComponentPasswordInputMethodA />',
  }),
}
