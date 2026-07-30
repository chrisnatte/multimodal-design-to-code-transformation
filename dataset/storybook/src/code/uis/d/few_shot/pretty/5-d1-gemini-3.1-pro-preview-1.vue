<template>
  <div class="min-h-screen bg-[#a3a3a3] flex justify-center py-12 font-sans relative">
    <div class="w-full max-w-[833px] flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="secondary"
          class="!bg-slate-100 w-12 h-12 !rounded-full"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold text-slate-900 m-0">Termin buchen</h1>
          <p class="text-slate-700 m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Datum wählen -->
        <div class="bg-slate-100 rounded-xl p-5 flex flex-col gap-4">
          <h2 class="text-lg font-medium text-slate-900 m-0">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full border-none" />
        </div>

        <!-- Zeitslot wählen -->
        <div class="bg-slate-100 rounded-xl p-5 flex flex-col gap-4">
          <h2 class="text-lg font-medium text-slate-900 m-0">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedTime" :inputId="slot" :value="slot" />
              <label :for="slot" class="text-slate-700 text-sm">{{ slot }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2 mt-4">
            <label class="text-sm text-slate-700">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Dienstleistung"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Deine Daten -->
      <div class="bg-slate-100 rounded-xl p-5 flex flex-col gap-4">
        <h2 class="text-lg font-medium text-slate-900 m-0">Deine Daten</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Name</label>
            <InputText v-model="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">E-Mail</label>
            <InputText v-model="email" placeholder="E-Mail eingeben" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" />
        </div>
        <div class="flex items-center gap-3 mt-2">
          <ToggleSwitch v-model="sendReminder" />
          <div class="flex flex-col">
            <span class="font-semibold text-sm text-slate-900">Erinnerung senden</span>
            <span class="text-xs text-slate-500"
              >Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span
            >
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-3 mt-2">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200"
        />
        <Button label="Buchen" @click="showDialog = true" />
      </div>
    </div>

    <!-- Dialog -->
    <Dialog
      v-model:visible="showDialog"
      header="Buchung bestätigen"
      modal
      :pt="{ root: 'w-[350px] rounded-xl' }"
    >
      <div class="flex flex-col gap-3 py-2">
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Datum:</span>
          <span class="font-semibold text-sm text-slate-900">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Zeit</span>
          <span class="font-semibold text-sm text-slate-900">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-slate-600 text-sm">Dienstleistung</span>
          <span class="font-semibold text-sm text-slate-900">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-2 w-full mt-4">
          <Button
            label="Abbrechen"
            severity="secondary"
            @click="showDialog = false"
            class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200"
          />
          <Button label="Bestätigen" @click="showDialog = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const date = ref(new Date(2026, 6, 15))
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedTime = ref('11:00 - 12:30')
const services = ['Beratungsgespräch', 'Untersuchung']
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showDialog = ref(true)
</script>