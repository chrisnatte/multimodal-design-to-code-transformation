import HardComponentNotificationsList from './7.vue'
import HardComponentNotificationsListMethodA from './7-a.vue'

export default {
  title: 'Hard/7-Notifications-List',
  component: HardComponentNotificationsList,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentNotificationsListMethodA },
    template: '<HardComponentNotificationsListMethodA />',
  }),
}
