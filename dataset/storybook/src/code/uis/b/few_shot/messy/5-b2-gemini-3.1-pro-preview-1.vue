<template>
  <div class="min-h-screen bg-white p-8 flex flex-col items-center font-sans text-surface-900">
    <div class="w-full max-w-4xl flex flex-col gap-8">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-arrow-left" rounded text severity="secondary" class="bg-surface-100 !w-12 !h-12" />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
          <p class="text-surface-600 m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Left Column: Date -->
        <div class="bg-surface-100 p-6 rounded-xl flex flex-col gap-4">
          <h2 class="text-lg font-medium m-0">Datum wählen</h2>
          <DatePicker v-model="selectedDate" inline class="w-full" />
        </div>

        <!-- Right Column: Time & Service -->
        <div class="bg-surface-100 p-6 rounded-xl flex flex-col gap-8">
          
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium m-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3 items-start">
              <label v-for="slot in timeSlots" :key="slot" 
                     class="flex items-center gap-3 py-2 px-4 rounded-full border cursor-pointer transition-colors"
                     :class="selectedTime === slot ? 'border-primary bg-primary/10 text-primary' : 'border-surface-300 bg-white'">
                <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
                <span class="text-sm">{{ slot }}</span>
              </label>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">Dienstleistung</label>
            <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Dienstleistung wählen" class="w-full" />
          </div>

        </div>
      </div>

      <!-- Your Data -->
      <div class="bg-surface-100 p-6 rounded-xl flex flex-col gap-6">
        <h2 class="text-lg font-medium m-0">Deine Daten</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">Name</label>
            <InputText v-model="name" placeholder="Max Mustermann" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-surface-700">E-Mail</label>
            <InputText v-model="email" placeholder="max@example.com" class="w-full" />
          </div>
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-700">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="w-full resize-none" />
        </div>
        
        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4">
        <Button label="Abbrechen" severity="secondary" text class="bg-surface-100 px-6" />
        <Button label="Buchen" severity="primary" class="px-8" @click="showConfirmDialog = true" />
      </div>

    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '24rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Zeit:</span>
          <span class="font-semibold text-sm">{{ selectedTime }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-surface-600 text-sm">Dienstleistung:</span>
          <span class="font-semibold text-sm">{{ selectedService?.label }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmDialog = false" />
      </template>
    </Dialog>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'
import RadioButton from 'primevue/radiobutton'

const selectedDate = ref(new Date(2026, 5, 15)) // 15. Juni 2026
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedTime = ref('11:00 - 12:30')

const services = [
  { label: 'Untersuchung', value: 'untersuchung' },
  { label: 'Beratungsgespräch', value: 'beratung' }
]
const selectedService = ref(services[0])

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showConfirmDialog = ref(true)

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
})
</script>