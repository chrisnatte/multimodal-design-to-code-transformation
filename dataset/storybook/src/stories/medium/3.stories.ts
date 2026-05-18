import MediumComponentFAQAccordionPasswordInput from './3.vue'
import MediumComponentFAQAccordionPasswordInputMethodA from './3-a.vue'

export default {
  title: 'Medium/3-FAQ-Accordion',
  component: MediumComponentFAQAccordionPasswordInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentFAQAccordionPasswordInputMethodA },
    template: '<MediumComponentFAQAccordionPasswordInputMethodA />',
  }),
}
