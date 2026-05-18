import MediumComponentSidebarMenuWithProfile from './8.vue'
import MediumComponentSidebarMenuWithProfileMethodA from './8-a.vue'

export default {
  title: 'Medium/8-Sidebar-Menu-With-Profile',
  component: MediumComponentSidebarMenuWithProfile,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentSidebarMenuWithProfileMethodA },
    template: '<MediumComponentSidebarMenuWithProfileMethodA />',
  }),
}
