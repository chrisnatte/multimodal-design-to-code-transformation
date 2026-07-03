import SimpleComponentFeedbackInput from './5.vue'
import SimpleComponentFeedbackInputMethodA from './5-a.vue'
import SimpleComponentFeedbackInputMethodB1 from './5-b1.vue'
import SimpleComponentFeedbackInputMethodB2 from './5-b2.vue'
import SimpleComponentFeedbackInputMethodB3 from './5-b3.vue'
import SimpleComponentFeedbackInputMethodC1 from './5-c1.vue'
import SimpleComponentFeedbackInputMethodC2 from './5-c2.vue'
import SimpleComponentFeedbackInputMethodC3 from './5-c3.vue'

export default {
  title: 'Components/Simple/5-Feedback-Input',
  component: SimpleComponentFeedbackInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodA },
    template: '<SimpleComponentFeedbackInputMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodB1 },
    template: '<SimpleComponentFeedbackInputMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodB2 },
    template: '<SimpleComponentFeedbackInputMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodB3 },
    template: '<SimpleComponentFeedbackInputMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodC1 },
    template: '<SimpleComponentFeedbackInputMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodC2 },
    template: '<SimpleComponentFeedbackInputMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentFeedbackInputMethodC3 },
    template: '<SimpleComponentFeedbackInputMethodC3 />',
  }),
}
