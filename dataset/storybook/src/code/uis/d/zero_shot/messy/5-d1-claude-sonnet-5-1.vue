<template>
  <div class="min-h-screen bg-white p-10">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <div class="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center">
        <i class="pi pi-calendar text-slate-500 text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Termin buchen</h1>
        <p class="text-base text-slate-500">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Top Row: Datum & Zeitslot -->
    <div class="flex gap-6 mb-6">
      <!-- Datum wählen -->
      <div class="flex-1 bg-slate-100 rounded-xl p-4">
        <h2 class="text-lg font-medium text-slate-800 mb-4">Datum wählen</h2>
        <DatePicker v-model="selectedDate" inline class="w-full" />
      </div>

      <!-- Zeitslot wählen -->
      <div class="flex-1 bg-slate-100 rounded-xl p-4">
        <h2 class="text-lg font-medium text-slate-800 mb-4">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3 mb-6">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot" class="text-sm text-slate-700">{{ slot }}</label>
          </div>
        </div>

        <div class="bg-white rounded-md p-4 border border-slate-200">
          <label class="block text-sm text-slate-700 mb-2">Dienstleistung</label>
          <Select
            v-model="selectedService"
            :options="services"
            class="w-full"
            placeholder="Dienstleistung wählen"
          />
        </div>
      </div>
    </div>

    <!-- Deine Daten -->
    <div class="bg-slate-100 rounded-xl p-4 mb-6">
      <h2 class="text-lg font-medium text-slate-800 mb-4">Deine Daten</h2>
      <div class="flex gap-6 mb-4">
        <div class="flex-1">
          <label class="block text-sm text-slate-700 mb-2">Name</label>
          <InputText v-model="name" class="w-full" />
        </div>
        <div class="flex-1">
          <label class="block text-sm text-slate-700 mb-2">E-Mail</label>
          <InputText v-model="email" class="w-full" />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm text-slate-700 mb-2">Anmerkungen</label>
        <Textarea v-model="notes" rows="4" class="w-full" placeholder="Optionale Nachricht..." />
      </div>

      <div class="flex items-start gap-3">
        <ToggleSwitch v-model="reminder" />
        <div>
          <div class="text-sm font-semibold text-slate-800">Erinnerung senden</div>
          <div class="text-xs text-slate-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Buttons -->
    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Buchen" @click="showDialog = true" />
    </div>

    <!-- Confirmation Dialog -->
    <Dialog
      v-model:visible="showDialog"
      modal
      header="Buchung bestätigen"
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-3 mb-4">
        <div class="flex justify-between text-sm">
          <span class="text-slate-700">Datum:</span>
          <span class="font-semibold text-slate-800">15. Juni 2029</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-slate-700">Zeit</span>
          <span class="font-semibold text-slate-800">{{ selectedSlot }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-slate-700">Dienstleistung</span>
          <span class="font-semibold text-slate-800">{{ selectedService }}</span>
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="showDialog = false" />
        <Button label="Bestätigen" @click="onConfirm" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const selectedDate = ref(new Date(2026, 6, 15))
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const selectedSlot = ref('11:00 - 12:30')

const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)

const showDialog = ref(false)

function onCancel() {
  showDialog.value = false
}

function onConfirm() {
  showDialog.value = false
}
</script>