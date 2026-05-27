import SimpleComponentOptionSelection from './4.vue'
import SimpleComponentOptionSelectionMethodA from './4-a.vue'
import SimpleComponentOptionSelectionMethodB1 from './4-b1.vue'
import SimpleComponentOptionSelectionMethodB2 from './4-b2.vue'
import SimpleComponentOptionSelectionMethodB3 from './4-b3.vue'

export default {
  title: 'Simple/4-Option-Selection',
  component: SimpleComponentOptionSelection,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodA },
    template: '<SimpleComponentOptionSelectionMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodB1 },
    template: '<SimpleComponentOptionSelectionMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodB2 },
    template: '<SimpleComponentOptionSelectionMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodB3 },
    template: '<SimpleComponentOptionSelectionMethodB3 />',
  }),
}

