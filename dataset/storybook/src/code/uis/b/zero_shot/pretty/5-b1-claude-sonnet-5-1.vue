<template>
  <div class="bg-white w-full min-h-screen p-8">
    <!-- Page Header -->
    <div class="flex items-center gap-4 mb-8">
      <Button
        icon="pi pi-times"
        severity="secondary"
        rounded
        class="w-[50px] h-[50px]"
        @click="onCancel"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
        <span class="text-base text-gray-600">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <!-- Datum wählen Card -->
      <div class="bg-gray-100 rounded-xl p-[17.5px] flex flex-col gap-4">
        <span class="text-lg font-medium">Datum wählen</span>
        <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
      </div>

      <!-- Zeitslot wählen Card -->
      <div class="bg-gray-100 rounded-xl p-[17.5px] flex flex-col gap-4">
        <span class="text-lg font-medium">Zeitslot wählen</span>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div v-for="slot in timeSlots" :key="slot.value" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :inputId="slot.value" :value="slot.value" />
              <label :for="slot.value">{{ slot.label }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <label for="service" class="text-sm">Dienstleistung</label>
            <Select
              id="service"
              v-model="selectedService"
              :options="services"
              optionLabel="label"
              optionValue="value"
              placeholder="Dienstleistung wählen"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Deine Daten Card -->
    <div class="bg-gray-100 rounded-xl p-[17.5px] flex flex-col gap-4 mb-4">
      <span class="text-lg font-medium">Deine Daten</span>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="email" class="text-sm">E-Mail</label>
          <InputText id="email" v-model="email" placeholder="E-Mail eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full" />
        </div>
        <div class="flex items-center gap-3 col-span-2">
          <ToggleSwitch v-model="reminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs font-light text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      modal
      :style="{ width: '350px' }"
      :closable="true"
    >
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <span>Datum:</span>
          <span class="font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Zeit</span>
          <span class="font-semibold">{{ selectedSlotLabel }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Dienstleistung</span>
          <span class="font-semibold">{{ selectedServiceLabel }}</span>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="onConfirmBooking" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2029, 5, 15))
const selectedSlot = ref('11:00-12:30')
const selectedService = ref('untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)
const showConfirmDialog = ref(false)

const timeSlots = [
  { label: '09:00 - 10:30', value: '09:00-10:30' },
  { label: '11:00 - 12:30', value: '11:00-12:30' },
  { label: '14:00 - 15:30', value: '14:00-15:30' },
  { label: '16:00 - 17:30', value: '16:00-17:30' },
]

const services = [
  { label: 'Beratungsgespräch', value: 'beratung' },
  { label: 'Untersuchung', value: 'untersuchung' },
]

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})

const selectedSlotLabel = computed(() => {
  const slot = timeSlots.find((s) => s.value === selectedSlot.value)
  return slot ? slot.label : ''
})

const selectedServiceLabel = computed(() => {
  const service = services.find((s) => s.value === selectedService.value)
  return service ? service.label : ''
})

function onCancel() {
  console.log('Booking cancelled')
}

function onConfirmBooking() {
  console.log('Booking confirmed', {
    date: formattedDate.value,
    slot: selectedSlotLabel.value,
    service: selectedServiceLabel.value,
    name: name.value,
    email: email.value,
    notes: notes.value,
    reminder: reminder.value,
  })
  showConfirmDialog.value = false
}
</script>