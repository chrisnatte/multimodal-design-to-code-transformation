import SimpleComponentFeedbackInput from './5.vue'
import SimpleComponentFeedbackInputMethodA from './5-a.vue'

export default {
  title: 'Simple/5-Feedback-Input',
  component: SimpleComponentFeedbackInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodA },
    template: '<SimpleComponentFeedbackInputMethodA />',
  }),
}
