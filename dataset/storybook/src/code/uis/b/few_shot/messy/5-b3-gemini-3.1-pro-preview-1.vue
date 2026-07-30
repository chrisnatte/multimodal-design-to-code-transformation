<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans text-slate-800">
    <!-- Header -->
    <div class="max-w-4xl w-full flex items-center gap-4 mb-8">
      <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <i class="pi pi-calendar text-xl text-slate-600"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-slate-600 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl w-full flex flex-col gap-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Column: Datum wählen -->
        <div class="bg-slate-100 p-6 rounded-xl flex flex-col gap-4">
          <h2 class="text-lg font-medium">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full border-none shadow-sm" />
        </div>

        <!-- Right Column: Zeitslot & Dienstleistung -->
        <div class="bg-slate-100 p-6 rounded-xl flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div 
                v-for="slot in timeSlots" 
                :key="slot"
                @click="timeSlot = slot"
                class="flex items-center gap-3 p-1.5 rounded-full border cursor-pointer transition-colors w-fit pr-5"
                :class="timeSlot === slot ? 'border-emerald-500 bg-white' : 'border-slate-300 bg-white hover:bg-slate-50'"
              >
                <div class="w-5 h-5 rounded-full border flex items-center justify-center"
                     :class="timeSlot === slot ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 bg-white'">
                  <div v-if="timeSlot === slot" class="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span class="text-sm">{{ slot }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm">Dienstleistung</label>
            <Select v-model="service" :options="services" class="w-full shadow-sm" />
          </div>
        </div>
      </div>

      <!-- Bottom Row: Deine Daten -->
      <div class="bg-slate-100 p-6 rounded-xl flex flex-col gap-6">
        <h2 class="text-lg font-medium">Deine Daten</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm">Name</label>
            <InputText v-model="name" class="shadow-sm" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm">E-Mail</label>
            <InputText v-model="email" type="email" class="shadow-sm" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Anmerkungen</label>
          <Textarea v-model="notes" rows="3" placeholder="Optionale Nachricht..." class="shadow-sm resize-none" />
        </div>

        <div class="flex items-center gap-4 mt-2">
          <ToggleSwitch v-model="reminder" :pt="{ slider: timeSlot ? 'bg-emerald-500' : '' }" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Erinnerung senden</span>
            <span class="text-xs text-slate-500 mt-1">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4 mt-2">
        <Button label="Abbrechen" severity="secondary" text class="font-medium" />
        <Button label="Buchen" severity="success" class="font-medium !bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :style="{ width: '24rem' }" :pt="{ root: 'rounded-xl shadow-xl' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm">15. Juni 2026</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Zeit:</span>
          <span class="font-semibold text-sm">{{ timeSlot }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Dienstleistung:</span>
          <span class="font-semibold text-sm">{{ service }}</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 w-full mt-2">
          <Button label="Abbrechen" severity="secondary" text @click="showConfirmDialog = false" />
          <Button label="Bestätigen" severity="success" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" @click="showConfirmDialog = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const date = ref(new Date('2026-06-15'))
const timeSlot = ref('11:00 - 12:30')
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]

const service = ref('Untersuchung')
const services = ['Untersuchung', 'Beratungsgespräch']

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)

const showConfirmDialog = ref(true)
</script>