<template>
  <div class="relative w-full min-h-screen bg-white p-8 font-sans text-slate-800 flex justify-center">
    <div class="w-full max-w-5xl flex flex-col gap-8">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-arrow-left" rounded text class="bg-slate-50 text-slate-800 w-12 h-12" />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold m-0">Termin buchen</h1>
          <p class="text-base text-slate-600 m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left Column: Date -->
          <div class="bg-slate-50 p-6 rounded-xl flex flex-col gap-4">
            <h2 class="text-lg font-medium m-0">Datum wählen</h2>
            <DatePicker v-model="selectedDate" inline class="w-full border-none shadow-sm" />
          </div>

          <!-- Right Column: Time & Service -->
          <div class="bg-slate-50 p-6 rounded-xl flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <h2 class="text-lg font-medium m-0">Zeitslot wählen</h2>
              <div class="flex flex-col gap-3">
                <div 
                  v-for="slot in timeSlots" 
                  :key="slot"
                  @click="selectedTimeSlot = slot"
                  class="flex items-center gap-3 cursor-pointer"
                >
                  <div 
                    class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors"
                    :class="selectedTimeSlot === slot ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 bg-white'"
                  >
                    <div v-if="selectedTimeSlot === slot" class="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                  <span class="text-sm">{{ slot }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-800">Dienstleistung</label>
              <Select v-model="selectedService" :options="services" class="w-full" />
            </div>
          </div>
        </div>

        <!-- Bottom Row: User Data -->
        <div class="bg-slate-50 p-6 rounded-xl flex flex-col gap-6">
          <h2 class="text-lg font-medium m-0">Deine Daten</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-800">Name</label>
              <InputText v-model="name" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-sm text-slate-800">E-Mail</label>
              <InputText v-model="email" type="email" class="w-full" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-800">Anmerkungen</label>
            <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full resize-none" />
          </div>

          <div class="flex items-center gap-4 mt-2">
            <ToggleSwitch v-model="sendReminder" class="!bg-emerald-500" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Erinnerung senden</span>
              <span class="text-xs text-slate-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex justify-end gap-4">
          <Button label="Abbrechen" severity="secondary" class="bg-slate-50 text-slate-800 border-slate-50 hover:bg-slate-100" />
          <Button label="Buchen" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" @click="showConfirmDialog = true" />
        </div>
      </div>
    </div>

    <!-- Confirmation Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Datum:</span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Zeit</span>
          <span class="text-sm font-semibold">{{ selectedTimeSlot }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-slate-600">Dienstleistung</span>
          <span class="text-sm font-semibold">{{ selectedService }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" class="bg-slate-50 text-slate-800 border-slate-50 hover:bg-slate-100" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white" @click="showConfirmDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date('2026-07-15'))
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]
const selectedTimeSlot = ref('11:00 - 12:30')

const services = ['Beratungsgespräch', 'Untersuchung']
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showConfirmDialog = ref(true)
</script>