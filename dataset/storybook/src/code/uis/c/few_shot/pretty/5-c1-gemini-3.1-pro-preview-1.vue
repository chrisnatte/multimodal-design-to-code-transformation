<template>
  <div class="min-h-screen bg-surface-200 p-8 font-sans text-surface-700 dark:bg-surface-900 dark:text-surface-0">
    <div class="mx-auto max-w-5xl">
      <!-- Header -->
      <div class="mb-8 flex items-center gap-4">
        <Button icon="pi pi-times-circle" text rounded class="!h-12 !w-12 !p-0 text-4xl !text-surface-500" />
        <div>
          <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0">Termin buchen</h1>
          <p class="text-surface-500 dark:text-surface-400">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- Date Card -->
        <div class="rounded-xl bg-surface-300 p-6 dark:bg-surface-800">
          <h2 class="mb-4 text-lg font-semibold text-surface-900 dark:text-surface-0">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full" />
        </div>

        <!-- Time & Service Card -->
        <div class="flex flex-col gap-6 rounded-xl bg-surface-300 p-6 dark:bg-surface-800">
          <div>
            <h2 class="mb-4 text-lg font-semibold text-surface-900 dark:text-surface-0">Zeitslot wählen</h2>
            <div class="flex flex-col gap-3">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="timeSlot" :inputId="slot" :value="slot" />
                <label :for="slot" class="text-surface-700 dark:text-surface-200">{{ slot }}</label>
              </div>
            </div>
          </div>
          <div>
            <h2 class="mb-2 text-sm text-surface-600 dark:text-surface-400">Dienstleistung</h2>
            <Select v-model="service" :options="services" optionLabel="label" optionValue="value" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Data Card -->
      <div class="mb-8 flex flex-col gap-4 rounded-xl bg-surface-300 p-6 dark:bg-surface-800">
        <h2 class="text-lg font-semibold text-surface-900 dark:text-surface-0">Deine Daten</h2>
        <div class="flex flex-col gap-1">
          <label class="text-sm text-surface-600 dark:text-surface-400">Name</label>
          <InputText v-model="name" class="w-full bg-surface-200 dark:bg-surface-900" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm text-surface-600 dark:text-surface-400">Anmerkungen</label>
          <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="3" class="w-full bg-surface-200 dark:bg-surface-900" />
        </div>
        <div class="mt-2 flex items-center gap-4">
          <ToggleSwitch v-model="reminder" inputId="reminder" />
          <div>
            <label for="reminder" class="block font-semibold text-surface-900 dark:text-surface-0">Erinnerung senden</label>
            <span class="text-sm text-surface-500 dark:text-surface-400">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-4">
        <Button label="Abbrechen" severity="secondary" class="!bg-surface-400 !border-none !text-surface-700" />
        <Button label="Buchen" severity="success" class="!bg-emerald-600 !border-none" />
      </div>
    </div>

    <!-- Dialog -->
    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '28rem' }" :closable="true">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between">
          <span class="text-surface-600 dark:text-surface-400">Datum:</span>
          <span class="font-medium text-surface-900 dark:text-surface-0">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-surface-600 dark:text-surface-400">Zeit</span>
          <span class="font-medium text-surface-900 dark:text-surface-0">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-surface-600 dark:text-surface-400">Dienstleistung</span>
          <span class="font-medium text-surface-900 dark:text-surface-0">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3 pt-4">
          <Button label="Abbrechen" severity="secondary" class="!bg-surface-100 !border-none !text-surface-700" @click="showDialog = false" />
          <Button label="Bestätigen" severity="success" class="!bg-emerald-500 !border-none" @click="showDialog = false" />
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

const date = ref(new Date(2026, 6, 15)) // July 15, 2026
const timeSlot = ref('11:00 - 12:30')
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]

const service = ref('Untersuchung')
const services = [
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
]

const name = ref('Max Mustermann')
const notes = ref('')
const reminder = ref(true)
const showDialog = ref(true)
</script>