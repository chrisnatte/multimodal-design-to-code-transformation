import HardComponentAdminPanelList from './10.vue'
import HardComponentAdminPanelListMethodA from './10-a.vue'

export default {
  title: 'Hard/10-Admin-Panel-List',
  component: HardComponentAdminPanelList,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentAdminPanelListMethodA },
    template: '<HardComponentAdminPanelListMethodA />',
  }),
}
