import MediumComponentDashboardNavigation from './4.vue'
import MediumComponentDashboardNavigationMethodA from './4-a.vue'

export default {
  title: 'Medium/4-Dashboard-Navigation',
  component: MediumComponentDashboardNavigation,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentDashboardNavigationMethodA },
    template: '<MediumComponentDashboardNavigationMethodA />',
  }),
}
