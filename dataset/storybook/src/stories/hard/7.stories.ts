import HardComponentNotificationsList from './7.vue'
import HardComponentNotificationsListMethodA from './7-a.vue'
import HardComponentNotificationsListMethodB1 from './7-b1.vue'
import HardComponentNotificationsListMethodB2 from './7-b2.vue'
import HardComponentNotificationsListMethodB3 from './7-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { HardComponentNotificationsListMethodB1 },
    template: '<HardComponentNotificationsListMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentNotificationsListMethodB2 },
    template: '<HardComponentNotificationsListMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentNotificationsListMethodB3 },
    template: '<HardComponentNotificationsListMethodB3 />',
  }),
}

