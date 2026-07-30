<template>
  <div class="min-h-screen bg-surface-100 p-8 flex justify-center font-sans text-surface-900">
    <div class="max-w-4xl w-full flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <i class="pi pi-times-circle text-4xl text-surface-500 cursor-pointer hover:text-surface-700"></i>
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
          <p class="text-surface-500 m-0 mt-1">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Date Selection Card -->
        <div class="bg-surface-200 rounded-2xl p-6 flex flex-col gap-4">
          <h2 class="text-lg font-semibold m-0">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full border-none bg-transparent" />
        </div>

        <!-- Time & Service Selection Card -->
        <div class="bg-surface-200 rounded-2xl p-6 flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <h2 class="text-lg font-semibold m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div v-for="time in timeOptions" :key="time" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :inputId="time" :value="time" />
                <label :for="time" class="text-surface-700 cursor-pointer">{{ time }}</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-600">Dienstleistung</label>
            <Select v-model="selectedService" :options="serviceOptions" class="w-full" />
          </div>
        </div>
      </div>

      <!-- User Data Card -->
      <div class="bg-surface-200 rounded-2xl p-6 flex flex-col gap-5">
        <h2 class="text-lg font-semibold m-0">Deine Daten</h2>
        
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-surface-600">Name</label>
          <InputText v-model="name" placeholder="Max Mustermann" class="w-full bg-surface-100" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-surface-600">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="w-full bg-surface-100" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="font-semibold text-sm">Erinnerung senden</span>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-4">
        <Button label="Abbrechen" severity="secondary" text class="px-6" />
        <Button label="Buchen" severity="primary" class="px-8" />
      </div>

    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showConfirmation" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-medium text-sm">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit</span>
          <span class="font-medium text-sm">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung</span>
          <span class="font-medium text-sm">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 w-full">
          <Button label="Abbrechen" severity="secondary" text @click="showConfirmation = false" />
          <Button label="Bestätigen" severity="primary" @click="showConfirmation = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

// State
const selectedDate = ref(new Date(2026, 6, 15)) // July 15, 2026
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const showConfirmation = ref(true)

// Options
const timeOptions = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]
const serviceOptions = [
  'Beratungsgespräch',
  'Untersuchung'
]
</script>