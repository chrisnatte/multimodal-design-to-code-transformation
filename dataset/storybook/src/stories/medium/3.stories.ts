import MediumComponentFAQAccordionPasswordInput from './3.vue'
import MediumComponentFAQAccordionPasswordInputMethodA from './3-a.vue'
import MediumComponentFAQAccordionPasswordInputMethodB1 from './3-b1.vue'
import MediumComponentFAQAccordionPasswordInputMethodB2 from './3-b2.vue'
import MediumComponentFAQAccordionPasswordInputMethodB3 from './3-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentFAQAccordionPasswordInputMethodB1 },
    template: '<MediumComponentFAQAccordionPasswordInputMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentFAQAccordionPasswordInputMethodB2 },
    template: '<MediumComponentFAQAccordionPasswordInputMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentFAQAccordionPasswordInputMethodB3 },
    template: '<MediumComponentFAQAccordionPasswordInputMethodB3 />',
  }),
}

