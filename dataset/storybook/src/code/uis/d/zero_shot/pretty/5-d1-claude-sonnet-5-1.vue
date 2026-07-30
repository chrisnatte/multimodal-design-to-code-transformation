<template>
  <div class="min-h-screen bg-white p-8">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <Button
        icon="pi pi-times-circle"
        rounded
        severity="secondary"
        text
        class="w-12 h-12"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800 m-0">Termin buchen</h1>
        <span class="text-base text-gray-600">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
      <!-- Datum wählen -->
      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="text-lg font-medium mb-4">Datum wählen</h3>
        <DatePicker v-model="selectedDate" inline showWeek class="w-full" />
      </div>

      <!-- Zeitslot wählen -->
      <div class="bg-gray-100 rounded-xl p-4">
        <h3 class="text-lg font-medium mb-4">Zeitslot wählen</h3>
        <div class="flex flex-col gap-2 mb-6">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot" class="text-sm">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            placeholder="Dienstleistung wählen"
            class="w-full"
          />
        </div>
      </div>

      <!-- Deine Daten -->
      <div class="bg-gray-100 rounded-xl p-4 md:col-span-2">
        <h3 class="text-lg font-medium mb-4">Deine Daten</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm">Name</label>
            <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm">E-Mail</label>
            <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-4">
          <label class="text-sm">Anmerkungen</label>
          <Textarea
            v-model="notes"
            placeholder="Optionale Nachricht..."
            rows="4"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminderEnabled" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Row -->
    <div class="flex justify-end gap-3 mt-6 max-w-5xl">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      :modal="true"
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <span class="text-sm">Datum:</span>
          <span class="text-sm font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Zeit</span>
          <span class="text-sm font-semibold">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ selectedService }}</span>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          @click="showConfirmDialog = false"
        />
        <Button
          label="Bestätigen"
          severity="primary"
          @click="onConfirmBooking"
        />
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
const selectedSlot = ref('11:00 - 12:30')
const timeSlots = ref([
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
])

const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminderEnabled = ref(true)

const showConfirmDialog = ref(true)

const formattedDate = computed(() => {
  const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ]
  const d = selectedDate.value
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`
})

function onCancel() {
  showConfirmDialog.value = false
}

function onConfirmBooking() {
  showConfirmDialog.value = false
}
</script>