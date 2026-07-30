<template>
  <div class="min-h-screen bg-gray-300 p-8">
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="!w-12 !h-12" />
      <div>
        <h1 class="text-3xl font-bold text-gray-700 m-0">Termin buchen</h1>
        <p class="text-gray-500 mt-1">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card>
        <template #title>
          <span class="text-xl">Datum wählen</span>
        </template>
        <template #content>
          <DatePicker v-model="selectedDate" inline :numberOfMonths="1" showWeek class="w-full" />
        </template>
      </Card>

      <Card>
        <template #title>
          <span class="text-xl">Zeitslot wählen</span>
        </template>
        <template #content>
          <div class="flex flex-col gap-3 mb-6">
            <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
              <RadioButton v-model="selectedSlot" :value="slot" :inputId="slot" />
              <label :for="slot">{{ slot }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-medium text-gray-700">Dienstleistung</label>
            <Select
              v-model="selectedService"
              :options="services"
              placeholder="Wählen"
              class="w-full"
            />
          </div>
        </template>
      </Card>
    </div>

    <Card class="mb-6">
      <template #title>
        <span class="text-xl">Deine Daten</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 mb-4">
          <label class="font-medium text-gray-700">Name</label>
          <InputText v-model="name" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label class="font-medium text-gray-700">Anmerkungen</label>
          <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="sendReminder" />
          <div>
            <div class="font-medium text-gray-700">Erinnerung senden</div>
            <div class="text-sm text-gray-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </div>
          </div>
        </div>
      </template>
    </Card>

    <div class="flex justify-end gap-2">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showDialog = true" />
    </div>

    <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }">
      <div class="flex justify-between mb-3">
        <span class="text-gray-600">Datum:</span>
        <span class="font-semibold">15. Juni 2029</span>
      </div>
      <div class="flex justify-between mb-3">
        <span class="text-gray-600">Zeit</span>
        <span class="font-semibold">11:00 - 12:30</span>
      </div>
      <div class="flex justify-between mb-6">
        <span class="text-gray-600">Dienstleistung</span>
        <span class="font-semibold">Untersuchung</span>
      </div>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" outlined @click="showDialog = false" />
        <Button label="Bestätigen" severity="success" @click="showDialog = false" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedSlot = ref('11:00 - 12:30')
const services = ['Beratungsgespräch', 'Untersuchung']
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const showDialog = ref(false)
</script>