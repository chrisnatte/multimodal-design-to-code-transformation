import SimpleComponentRatingInput from './3.vue'
import SimpleComponentRatingInputMethodA from './3-a.vue'

export default {
  title: 'Simple/3-Rating-Input',
  component: SimpleComponentRatingInput,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodA },
    template: '<SimpleComponentRatingInputMethodA />',
  }),
}
