import HardComponentAppointmentBookDialog from './9.vue'
import HardComponentAppointmentBookDialogMethodA from './9-a.vue'
import HardComponentAppointmentBookDialogMethodB1 from './9-b1.vue'
import HardComponentAppointmentBookDialogMethodB2 from './9-b2.vue'
import HardComponentAppointmentBookDialogMethodB3 from './9-b3.vue'

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

export const MethodB1 = {
  render: () => ({
    components: { HardComponentAppointmentBookDialogMethodB1 },
    template: '<HardComponentAppointmentBookDialogMethodB1 />',
  }),
}

export const MethodB2 = {
  render: () => ({
    components: { HardComponentAppointmentBookDialogMethodB2 },
    template: '<HardComponentAppointmentBookDialogMethodB2 />',
  }),
}

export const MethodB3 = {
  render: () => ({
    components: { HardComponentAppointmentBookDialogMethodB3 },
    template: '<HardComponentAppointmentBookDialogMethodB3 />',
  }),
}

