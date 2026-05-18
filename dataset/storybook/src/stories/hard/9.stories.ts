import HardComponentAppointmentBookDialog from './9.vue'
import HardComponentAppointmentBookDialogMethodA from './9-a.vue'

export default {
  title: 'Hard/9-Appointment-Book-Dialog',
  component: HardComponentAppointmentBookDialog,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { HardComponentAppointmentBookDialogMethodA },
    template: '<HardComponentAppointmentBookDialogMethodA />',
  }),
}
