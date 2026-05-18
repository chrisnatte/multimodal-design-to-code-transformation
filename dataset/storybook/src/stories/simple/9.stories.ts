import SimpleComponentTodoList from './9.vue'
import SimpleComponentTodoListMethodA from './9-a.vue'

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
