<template>
  <div class="min-h-screen bg-gray-400 p-8">
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Termin buchen</h1>
        <p class="text-gray-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="bg-gray-300/40 rounded-xl p-6">
        <h2 class="text-xl font-semibold mb-4">Datum wählen</h2>
        <Calendar v-model="selectedDate" inline class="w-full" />
      </div>

      <div class="bg-gray-300/40 rounded-xl p-6">
        <h2 class="text-xl font-semibold mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div class="flex items-center gap-2" v-for="slot in timeSlots" :key="slot">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>

        <label class="block mb-2 text-gray-700">Dienstleistung</label>
        <Dropdown
          v-model="selectedService"
          :options="services"
          class="w-full"
          placeholder="Wähle eine Dienstleistung"
        />
      </div>
    </div>

    <div class="bg-gray-300/40 rounded-xl p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Deine Daten</h2>
      <label class="block mb-2 text-gray-700">Name</label>
      <InputText v-model="name" class="w-full mb-4" />

      <label class="block mb-2 text-gray-700">Anmerkungen</label>
      <Textarea v-model="notes" rows="4" class="w-full mb-4" placeholder="Optionale Nachricht..." />

      <div class="flex items-start gap-3">
        <InputSwitch v-model="sendReminder" />
        <div>
          <div class="font-semibold text-gray-800">Erinnerung senden</div>
          <div class="text-sm text-gray-600">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showDialog = true" />
    </div>

    <Dialog
      v-model:visible="showDialog"
      modal
      header="Buchung bestätigen"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-between">
          <span class="text-gray-700">Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-700">Zeit</span>
          <span class="font-semibold">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-700">Dienstleistung</span>
          <span class="font-semibold">{{ selectedService }}</span>
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
import InputSwitch from 'primevue/inputswitch'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedSlot = ref('11:00 - 12:30')

const services = ['Beratungsgespräch', 'Untersuchung']
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)

const showDialog = ref(true)
</script>