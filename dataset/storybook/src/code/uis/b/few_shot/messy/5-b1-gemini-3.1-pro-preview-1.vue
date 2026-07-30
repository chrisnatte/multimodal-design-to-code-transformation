<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-8 p-8 font-sans">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-arrow-left" rounded text class="!h-12 !w-12 bg-surface-100" />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold text-surface-900">Termin buchen</h1>
        <p class="text-surface-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- Left Column: Date -->
      <div class="flex flex-col gap-4 rounded-xl bg-surface-50 p-6">
        <h2 class="text-lg font-medium text-surface-900">Datum wählen</h2>
        <DatePicker v-model="date" inline class="w-full" />
      </div>

      <!-- Right Column: Time & Service -->
      <div class="flex flex-col gap-8 rounded-xl bg-surface-50 p-6">
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-medium text-surface-900">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div
              v-for="slot in timeSlots"
              :key="slot"
              class="flex w-fit items-center gap-2 rounded-full border px-3 py-1.5"
              :class="timeSlot === slot ? 'border-primary' : 'border-surface-200 bg-white'"
            >
              <RadioButton v-model="timeSlot" :input-id="slot" :value="slot" />
              <label :for="slot" class="cursor-pointer text-sm text-surface-700">{{ slot }}</label>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-700">Dienstleistung</label>
          <Select v-model="service" :options="services" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Bottom Section: User Data -->
    <div class="flex flex-col gap-6 rounded-xl bg-surface-50 p-6">
      <h2 class="text-lg font-medium text-surface-900">Deine Daten</h2>
      
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-surface-700">Name</label>
          <InputText id="name" v-model="name" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm text-surface-700">E-Mail</label>
          <InputText id="email" v-model="email" type="email" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label for="notes" class="text-sm text-surface-700">Anmerkungen</label>
        <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." />
      </div>

      <div class="mt-2 flex items-center gap-4">
        <ToggleSwitch v-model="reminder" input-id="reminder" />
        <div class="flex flex-col">
          <label for="reminder" class="cursor-pointer text-sm font-semibold text-surface-900">Erinnerung senden</label>
          <span class="text-xs text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-end gap-4">
      <Button label="Abbrechen" severity="secondary" class="bg-surface-100 border-none text-surface-900" />
      <Button label="Buchen" severity="primary" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirm Dialog -->
    <Dialog v-model:visible="showConfirmDialog" header="Buchung bestätigen" modal :style="{ width: '24rem' }">
      <div class="flex flex-col gap-4 py-4">
        <div class="flex items-center justify-between">
          <span class="text-surface-600">Datum:</span>
          <span class="font-semibold text-surface-900">15. Juni 2029</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-surface-600">Zeit:</span>
          <span class="font-semibold text-surface-900">{{ timeSlot }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-surface-600">Dienstleistung:</span>
          <span class="font-semibold text-surface-900">{{ service }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" text @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showConfirmDialog = false" />
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

const date = ref(new Date('2026-06-15'))
const timeSlots = [
  '09:00 - 10:30',
  '11:00 - 12:30',
  '14:00 - 15:30',
  '16:00 - 17:30'
]
const timeSlot = ref('11:00 - 12:30')

const services = ['Untersuchung', 'Beratungsgespräch']
const service = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)

const showConfirmDialog = ref(true)
</script>