import SimpleComponentOptionSelection from './4.vue'
import SimpleComponentOptionSelectionMethodA from './4-a.vue'

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
