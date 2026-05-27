import SimpleComponentTodoList from './9.vue'
import SimpleComponentTodoListMethodA from './9-a.vue'
import SimpleComponentTodoListMethodB1 from './9-b1.vue'
import SimpleComponentTodoListMethodB2 from './9-b2.vue'
import SimpleComponentTodoListMethodB3 from './9-b3.vue'

export default {
  title: 'Simple/9-Todo-List',
  component: SimpleComponentTodoList,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentTodoListMethodA },
    template: '<SimpleComponentTodoListMethodA />',
  }),
}

export const MethodB1 = {
  render: () => ({
    components: { SimpleComponentTodoListMethodB1 },
    template: '<SimpleComponentTodoListMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { SimpleComponentTodoListMethodB2 },
    template: '<SimpleComponentTodoListMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { SimpleComponentTodoListMethodB3 },
    template: '<SimpleComponentTodoListMethodB3 />',
  }),
}

