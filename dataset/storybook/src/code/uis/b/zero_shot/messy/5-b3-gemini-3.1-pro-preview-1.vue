<template>
  <div class="min-h-screen bg-white p-8 flex flex-col items-center font-sans text-slate-800">
    <!-- Header -->
    <div class="w-full max-w-4xl flex items-center gap-4 mb-8">
      <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-base text-slate-600 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Left Col: Date -->
      <div class="bg-slate-100 p-6 rounded-xl flex flex-col gap-4">
        <h2 class="text-lg font-medium">Datum wählen</h2>
        <div class="bg-white rounded-md border border-slate-200 p-2">
          <DatePicker v-model="selectedDate" inline class="w-full border-none" />
        </div>
      </div>

      <!-- Right Col: Time & Service -->
      <div class="bg-slate-100 p-6 rounded-xl flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-medium">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div v-for="slot in timeSlots" :key="slot.value" 
                 @click="selectedTime = slot.value"
                 class="flex items-center gap-3 cursor-pointer">
              <div class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors"
                   :class="selectedTime === slot.value ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 bg-white'">
                <div v-if="selectedTime === slot.value" class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span class="text-sm">{{ slot.label }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Dienstleistung</label>
          <Select v-model="selectedService" :options="services" optionLabel="label" placeholder="Dienstleistung wählen" class="w-full" />
        </div>
      </div>

      <!-- Bottom Row: User Data -->
      <div class="bg-slate-100 p-6 rounded-xl col-span-1 md:col-span-2 flex flex-col gap-6">
        <h2 class="text-lg font-medium">Deine Daten</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm">Name</label>
            <InputText v-model="name" placeholder="Max Mustermann" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm">E-Mail</label>
            <InputText v-model="email" placeholder="max@example.com" class="w-full" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="w-full" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="reminder" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-slate-500 mt-1">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="w-full max-w-4xl flex justify-end gap-4">
      <Button label="Abbrechen" severity="secondary" variant="outlined" class="bg-slate-100 border-slate-100 text-slate-800 hover:bg-slate-200" />
      <Button label="Buchen" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Datum:</span>
          <span class="text-sm font-semibold">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Zeit:</span>
          <span class="text-sm font-semibold">{{ selectedTimeLabel }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Dienstleistung:</span>
          <span class="text-sm font-semibold">{{ selectedService?.label }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" variant="text" @click="showConfirmDialog = false" class="text-slate-600 hover:bg-slate-100" />
        <Button label="Bestätigen" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" @click="confirmBooking" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15)) // July 15, 2026
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref({ label: 'Untersuchung', value: 'untersuchung' })
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)
const showConfirmDialog = ref(false)

const timeSlots = ref([
  { label: '09:00 - 10:30', value: '09:00 - 10:30' },
  { label: '11:00 - 12:30', value: '11:00 - 12:30' },
  { label: '14:00 - 15:30', value: '14:00 - 15:30' },
  { label: '16:00 - 17:30', value: '16:00 - 17:30' }
])

const services = ref([
  { label: 'Untersuchung', value: 'untersuchung' },
  { label: 'Beratungsgespräch', value: 'beratung' }
])

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })
})

const selectedTimeLabel = computed(() => {
  const slot = timeSlots.value.find(s => s.value === selectedTime.value)
  return slot ? slot.label : ''
})

const confirmBooking = () => {
  showConfirmDialog.value = false
  // Handle booking confirmation logic here
}
</script>