import MediumComponentSidebarMenuWithProfile from './8.vue'
import MediumComponentSidebarMenuWithProfileMethodA from './8-a.vue'
import MediumComponentSidebarMenuWithProfileMethodB1 from './8-b1.vue'
import MediumComponentSidebarMenuWithProfileMethodB2 from './8-b2.vue'
import MediumComponentSidebarMenuWithProfileMethodB3 from './8-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentSidebarMenuWithProfileMethodB1 },
    template: '<MediumComponentSidebarMenuWithProfileMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentSidebarMenuWithProfileMethodB2 },
    template: '<MediumComponentSidebarMenuWithProfileMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentSidebarMenuWithProfileMethodB3 },
    template: '<MediumComponentSidebarMenuWithProfileMethodB3 />',
  }),
}

