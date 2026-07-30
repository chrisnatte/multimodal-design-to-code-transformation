<template>
  <div class="min-h-screen bg-gray-200 p-8">
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
        <p class="text-gray-500 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="bg-gray-100 rounded-lg p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Datum wählen</h2>
        <Calendar v-model="selectedDate" inline class="w-full" />
      </div>

      <div class="bg-gray-100 rounded-lg p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot1" name="slot" value="09:00 - 10:30" />
            <label for="slot1">09:00 - 10:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot2" name="slot" value="11:00 - 12:30" />
            <label for="slot2">11:00 - 12:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot3" name="slot" value="14:00 - 15:30" />
            <label for="slot3">14:00 - 15:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot4" name="slot" value="16:00 - 17:30" />
            <label for="slot4">16:00 - 17:30</label>
          </div>
        </div>

        <div>
          <label class="block text-gray-700 mb-2">Dienstleistung</label>
          <Dropdown
            v-model="selectedService"
            :options="services"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-100 rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Deine Daten</h2>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Name</label>
        <InputText v-model="name" class="w-full" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Anmerkungen</label>
        <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
      </div>
      <div class="flex items-start gap-3">
        <ToggleSwitch v-model="sendReminder" />
        <div>
          <p class="text-gray-800 font-medium">Erinnerung senden</p>
          <p class="text-gray-500 text-sm">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</p>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showDialog = true" />
    </div>

    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '400px' }">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between">
          <span class="text-gray-600">Datum:</span>
          <span class="font-semibold text-gray-800">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Zeit</span>
          <span class="font-semibold text-gray-800">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Dienstleistung</span>
          <span class="font-semibold text-gray-800">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" outlined @click="showDialog = false" />
        <Button label="Bestätigen" severity="success" @click="showDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedSlot = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const services = ref([
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' },
  { label: 'Untersuchung', value: 'Untersuchung' }
])
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const showDialog = ref(true)
</script>