<template>
  <div class="min-h-screen bg-gray-200 p-8">
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
        <p class="text-gray-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-lg p-6 shadow">
        <h2 class="text-xl font-semibold mb-4">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline />
      </div>

      <div class="bg-white rounded-lg p-6 shadow">
        <h2 class="text-xl font-semibold mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot1" value="09:00 - 10:30" />
            <label for="slot1">09:00 - 10:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot2" value="11:00 - 12:30" />
            <label for="slot2">11:00 - 12:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot3" value="14:00 - 15:30" />
            <label for="slot3">14:00 - 15:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" inputId="slot4" value="16:00 - 17:30" />
            <label for="slot4">16:00 - 17:30</label>
          </div>
        </div>

        <label class="block mb-2 text-gray-700">Dienstleistung</label>
        <Select v-model="selectedService" :options="services" placeholder="Wählen" class="w-full" />
      </div>
    </div>

    <div class="bg-white rounded-lg p-6 shadow mb-6">
      <h2 class="text-xl font-semibold mb-4">Deine Daten</h2>
      <label class="block mb-2 text-gray-700">Name</label>
      <InputText v-model="name" class="w-full mb-4" />

      <label class="block mb-2 text-gray-700">Anmerkungen</label>
      <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full mb-4" />

      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="reminder" />
        <div>
          <div class="font-semibold text-gray-800">Erinnerung senden</div>
          <div class="text-sm text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showDialog = true" />
    </div>

    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '400px' }">
      <div class="flex flex-col gap-3 mb-6">
        <div class="flex justify-between">
          <span class="text-gray-600">Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Zeit</span>
          <span class="font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Dienstleistung</span>
          <span class="font-semibold">Untersuchung</span>
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" outlined @click="showDialog = false" />
        <Button label="Bestätigen" severity="success" @click="showDialog = false" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedSlot = ref('11:00 - 12:30')
const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const reminder = ref(true)
const showDialog = ref(true)
</script>