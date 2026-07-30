<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
        <p class="text-gray-500 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-6 shadow">
        <h2 class="text-lg font-semibold mb-4">Datum wählen</h2>
        <Calendar v-model="selectedDate" inline class="w-full" />
      </div>

      <div class="bg-white rounded-lg p-6 shadow">
        <h2 class="text-lg font-semibold mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-medium text-gray-700">Dienstleistung</label>
          <Dropdown
            v-model="selectedService"
            :options="services"
            optionLabel="name"
            optionValue="name"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg p-6 shadow mt-6">
      <h2 class="text-lg font-semibold mb-4">Deine Daten</h2>

      <div class="flex flex-col gap-2 mb-4">
        <label class="font-medium text-gray-700">Name</label>
        <InputText v-model="name" class="w-full" />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label class="font-medium text-gray-700">Anmerkungen</label>
        <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
      </div>

      <div class="flex items-start gap-3">
        <InputSwitch v-model="reminder" />
        <div>
          <p class="font-medium text-gray-800">Erinnerung senden</p>
          <p class="text-sm text-gray-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3 mt-6">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showConfirm = true" />
    </div>

    <Dialog
      v-model:visible="showConfirm"
      header="Buchung bestätigen"
      modal
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-3 mb-4">
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
        <Button label="Abbrechen" severity="secondary" outlined @click="showConfirm = false" />
        <Button label="Bestätigen" severity="success" @click="showConfirm = false" />
      </div>
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
import InputSwitch from 'primevue/inputswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedSlot = ref('11:00 - 12:30')

const services = [
  { name: 'Beratungsgespräch' },
  { name: 'Untersuchung' },
]
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const notes = ref('')
const reminder = ref(true)

const showConfirm = ref(true)
</script>