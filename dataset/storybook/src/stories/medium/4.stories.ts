import MediumComponentDashboardNavigation from './4.vue'
import MediumComponentDashboardNavigationMethodA from './4-a.vue'
import MediumComponentDashboardNavigationMethodB1 from './4-b1.vue'
import MediumComponentDashboardNavigationMethodB2 from './4-b2.vue'
import MediumComponentDashboardNavigationMethodB3 from './4-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentDashboardNavigationMethodB1 },
    template: '<MediumComponentDashboardNavigationMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentDashboardNavigationMethodB2 },
    template: '<MediumComponentDashboardNavigationMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentDashboardNavigationMethodB3 },
    template: '<MediumComponentDashboardNavigationMethodB3 />',
  }),
}

