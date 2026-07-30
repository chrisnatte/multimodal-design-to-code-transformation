<template>
  <div class="min-h-screen bg-white p-8 relative">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="w-12 h-12" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800 m-0">Termin buchen</h1>
        <p class="text-base text-slate-500 m-0">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <!-- Top grid: Datum / Zeitslot -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- Datum wählen -->
      <div class="bg-slate-100 rounded-xl p-4">
        <h2 class="text-lg font-medium mb-4">Datum wählen</h2>
        <Calendar v-model="selectedDate" inline class="w-full" />
      </div>

      <!-- Zeitslot wählen -->
      <div class="bg-slate-100 rounded-xl p-4 flex flex-col gap-4">
        <h2 class="text-lg font-medium mb-2">Zeitslot wählen</h2>
        <div class="flex flex-col gap-3">
          <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
            <RadioButton v-model="selectedSlot" :inputId="slot" :value="slot" />
            <label :for="slot" class="text-sm">{{ slot }}</label>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm">Dienstleistung</label>
          <Dropdown
            v-model="selectedService"
            :options="services"
            placeholder="Dienstleistung wählen"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- Deine Daten -->
    <div class="bg-slate-100 rounded-xl p-4 mb-4">
      <h2 class="text-lg font-medium mb-4">Deine Daten</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm">Name</label>
          <InputText v-model="name" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm">E-Mail</label>
          <InputText v-model="email" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label class="text-sm">Anmerkungen</label>
        <Textarea v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
      </div>
      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="sendReminder" />
        <div>
          <div class="text-sm font-semibold">Erinnerung senden</div>
          <div class="text-xs text-slate-500">
            Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
          </div>
        </div>
      </div>
    </div>

    <!-- Footer buttons -->
    <div class="flex justify-end gap-3">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Buchen" severity="success" @click="showConfirmDialog = true" />
    </div>

    <!-- Confirm Dialog -->
    <Dialog
      v-model:visible="showConfirmDialog"
      header="Buchung bestätigen"
      :modal="true"
      :style="{ width: '350px' }"
    >
      <div class="flex flex-col gap-3">
        <div class="flex justify-between text-sm">
          <span>Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Zeit</span>
          <span class="font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Dienstleistung</span>
          <span class="font-semibold">Untersuchung</span>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" severity="secondary" outlined @click="showConfirmDialog = false" />
        <Button label="Bestätigen" severity="success" @click="showConfirmDialog = false" />
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
const timeSlots = ref(['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30'])
const selectedSlot = ref('11:00 - 12:30')

const services = ref(['Beratungsgespräch', 'Untersuchung'])
const selectedService = ref('Untersuchung')

const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)

const showConfirmDialog = ref(true)
</script>