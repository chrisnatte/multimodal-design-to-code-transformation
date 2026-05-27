import SimpleComponentRatingInput from './3.vue'
import SimpleComponentRatingInputMethodA from './3-a.vue'
import SimpleComponentRatingInputMethodB1 from './3-b1.vue'
import SimpleComponentRatingInputMethodB2 from './3-b2.vue'
import SimpleComponentRatingInputMethodB3 from './3-b3.vue'
import SimpleComponentRatingInputMethodC1 from './3-c1.vue'
import SimpleComponentRatingInputMethodC2 from './3-c2.vue'
import SimpleComponentRatingInputMethodC3 from './3-c3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodB1 },
    template: '<SimpleComponentRatingInputMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodB2 },
    template: '<SimpleComponentRatingInputMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodB3 },
    template: '<SimpleComponentRatingInputMethodB3 />',
  }),
}

export const MethodC1 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodC1 },
    template: '<SimpleComponentRatingInputMethodC1 />',
  }),
}

export const MethodC2 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodC2 },
    template: '<SimpleComponentRatingInputMethodC2 />',
  }),
}

export const MethodC3 = {
  render: () => ({
    components: { SimpleComponentRatingInputMethodC3 },
    template: '<SimpleComponentRatingInputMethodC3 />',
  }),
}
