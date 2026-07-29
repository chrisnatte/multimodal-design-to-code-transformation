import SimpleComponentOptionSelection from '../../../code/components/gt/simple/4.vue'
import SimpleComponentOptionSelectionMethodA from './4-a.vue'
import SimpleComponentOptionSelectionMethodB1 from './4-b1.vue'
import SimpleComponentOptionSelectionMethodB2 from './4-b2.vue'
import SimpleComponentOptionSelectionMethodB3 from './4-b3.vue'
import SimpleComponentOptionSelectionMethodC1 from './4-c1.vue'
import SimpleComponentOptionSelectionMethodC2 from './4-c2.vue'
import SimpleComponentOptionSelectionMethodC3 from './4-c3.vue'

export default {
  title: 'Components/Simple/4-Option-Selection',
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

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodC1 },
    template: '<SimpleComponentOptionSelectionMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodC2 },
    template: '<SimpleComponentOptionSelectionMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentOptionSelectionMethodC3 },
    template: '<SimpleComponentOptionSelectionMethodC3 />',
  }),
}
