import MediumComponentSettingsTabs from './2.vue'
import MediumComponentSettingsTabsMethodA from './2-a.vue'

export default {
  title: 'Medium/2-Settings-Tabs',
  component: MediumComponentSettingsTabs,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { MediumComponentSettingsTabsMethodA },
    template: '<MediumComponentSettingsTabsMethodA />',
  }),
}
