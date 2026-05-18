import SimpleComponentStatusRow from './2.vue'
import SimpleComponentStatusRowMethodA from './2-a.vue'

export default {
  title: 'Simple/2-Status-Row',
  component: SimpleComponentStatusRow,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentStatusRowMethodA },
    template: '<SimpleComponentStatusRowMethodA />',
  }),
}
