<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <i class="pi pi-times-circle text-slate-500 text-2xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Termin buchen</h1>
        <p class="text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Datum wählen -->
      <div class="bg-slate-100 rounded-xl p-4">
        <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline class="w-full" />
      </div>

      <!-- Zeitslot wählen -->
      <div class="bg-slate-100 rounded-xl p-4 flex flex-col gap-4">
        <h2 class="text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot" class="text-sm">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Dienstleistung</label>
          <Select v-model="selectedService" :options="services" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Deine Daten -->
    <div class="bg-slate-100 rounded-xl p-4 mb-6">
      <h2 class="text-lg font-medium mb-4">Deine Daten</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm">Name</label>
          <InputText v-model="name" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm">E-Mail</label>
          <InputText v-model="email" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm">Anmerkungen</label>
        <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
      </div>
      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="sendReminder" />
        <div>
          <p class="text-sm font-semibold">Erinnerung senden</p>
          <p class="text-xs text-slate-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer buttons -->
    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" outlined @click="onCancel" />
      <Button label="Buchen" severity="success" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirmation dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      modal
      :closable="true"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-3 mb-4">
        <div class="flex justify-between">
          <span class="text-sm">Datum:</span>
          <span class="text-sm font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm">Zeit</span>
          <span class="text-sm font-semibold">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ selectedService }}</span>
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" outlined @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="success" @click="onConfirmBooking" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const selectedSlot = ref('11:00 - 12:30')

const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showConfirmDialog = ref(false)

const formattedDate = computed(() => {
  return '15. Juni 2029'
})

function onCancel() {
  // reset or navigate away
}

function onConfirmBooking() {
  showConfirmDialog.value = false
}
</script>