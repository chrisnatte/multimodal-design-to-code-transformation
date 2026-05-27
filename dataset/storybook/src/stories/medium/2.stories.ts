import MediumComponentSettingsTabs from './2.vue'
import MediumComponentSettingsTabsMethodA from './2-a.vue'
import MediumComponentSettingsTabsMethodB1 from './2-b1.vue'
import MediumComponentSettingsTabsMethodB2 from './2-b2.vue'
import MediumComponentSettingsTabsMethodB3 from './2-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { MediumComponentSettingsTabsMethodB1 },
    template: '<MediumComponentSettingsTabsMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { MediumComponentSettingsTabsMethodB2 },
    template: '<MediumComponentSettingsTabsMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { MediumComponentSettingsTabsMethodB3 },
    template: '<MediumComponentSettingsTabsMethodB3 />',
  }),
}

