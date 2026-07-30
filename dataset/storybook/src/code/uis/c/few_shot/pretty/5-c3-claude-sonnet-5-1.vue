<template>
  <div class="p-8">
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" severity="secondary" text rounded size="large" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800">Termin buchen</h1>
        <p class="text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="border rounded-lg p-4">
        <h2 class="font-semibold text-slate-700 mb-3">Datum wählen</h2>
        <DatePicker v-model="date" inline />
      </div>

      <div class="border rounded-lg p-4">
        <h2 class="font-semibold text-slate-700 mb-3">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div v-for="slot in timeslots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot">{{ slot }}</label>
          </div>
        </div>
        <label class="block mb-2 text-slate-700">Dienstleistung</label>
        <Select v-model="service" :options="services" placeholder="Dienstleistung auswählen" class="w-full" />
      </div>
    </div>

    <div class="border rounded-lg p-4 mb-6">
      <h2 class="font-semibold text-slate-700 mb-3">Deine Daten</h2>
      <label class="block mb-2 text-slate-700">Name</label>
      <InputText v-model="name" class="w-full mb-4" />
      <label class="block mb-2 text-slate-700">Anmerkungen</label>
      <Textarea v-model="notes" placeholder="Optionale Nachricht..." rows="4" class="w-full mb-4" />
      <div class="flex items-start gap-3">
        <ToggleSwitch v-model="sendReminder" />
        <div>
          <div class="font-medium text-slate-700">Erinnerung senden</div>
          <div class="text-slate-500 text-sm">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="success" @click="showConfirmDialog = true" />
    </div>

    <Dialog v-model:visible="showConfirmDialog" header="Buchung bestätigen" modal :style="{ width: '25rem' }">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between">
          <span class="text-slate-600">Datum:</span>
          <span class="font-semibold text-slate-800">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-600">Zeit</span>
          <span class="font-semibold text-slate-800">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-600">Dienstleistung</span>
          <span class="font-semibold text-slate-800">{{ service }}</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="success" @click="showConfirmDialog = false" />
      </template>
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

const date = ref(new Date(2026, 6, 15))
const timeslots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const selectedSlot = ref('11:00 - 12:30')
const services = ['Beratungsgespräch', 'Untersuchung']
const service = ref('Untersuchung')
const name = ref('Max Mustermann')
const notes = ref('')
const sendReminder = ref(true)
const showConfirmDialog = ref(true)
</script>