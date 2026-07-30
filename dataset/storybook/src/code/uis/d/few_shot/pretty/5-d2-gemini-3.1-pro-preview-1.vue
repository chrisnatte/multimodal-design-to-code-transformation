<template>
  <div class="min-h-screen bg-white p-8 flex justify-center font-sans text-surface-900">
    <div class="w-full max-w-[833px] flex flex-col gap-8">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-surface-100 !w-12 !h-12" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold m-0 leading-tight">Termin buchen</h1>
          <p class="text-base text-surface-600 m-0">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Col: DatePicker -->
        <div class="bg-surface-100 p-5 rounded-xl flex flex-col gap-4">
          <h2 class="text-[17.5px] font-medium m-0">Datum wählen</h2>
          <DatePicker v-model="date" inline class="w-full !border-none !bg-transparent" />
        </div>

        <!-- Right Col: Time & Service -->
        <div class="bg-surface-100 p-5 rounded-xl flex flex-col gap-4">
          <h2 class="text-[17.5px] font-medium m-0">Zeitslot wählen</h2>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="t1" value="09:00 - 10:30" />
              <label for="t1" class="text-sm">09:00 - 10:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="t2" value="11:00 - 12:30" />
              <label for="t2" class="text-sm">11:00 - 12:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="t3" value="14:00 - 15:30" />
              <label for="t3" class="text-sm">14:00 - 15:30</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="timeSlot" inputId="t4" value="16:00 - 17:30" />
              <label for="t4" class="text-sm">16:00 - 17:30</label>
            </div>
          </div>

          <div class="flex flex-col gap-2 mt-2">
            <label class="text-sm">Dienstleistung</label>
            <Select v-model="service" :options="services" optionLabel="label" placeholder="Untersuchung" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Bottom Section: User Data -->
      <div class="bg-surface-100 p-5 rounded-xl flex flex-col gap-6">
        <h2 class="text-[17.5px] font-medium m-0">Deine Daten</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="E-Mail eingeben" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." class="resize-none" />
        </div>
        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="reminder" inputId="reminder" />
          <div class="flex flex-col">
            <label for="reminder" class="text-sm font-semibold">Erinnerung senden</label>
            <span class="text-[10px] text-surface-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
          </div>
        </div>
      </div>

      <!-- Footer Buttons -->
      <div class="flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" class="!bg-surface-100 !border-none !text-surface-900" />
        <Button label="Buchen" @click="showConfirmDialog = true" />
      </div>
    </div>

    <!-- Dialog -->
    <Dialog v-model:visible="showConfirmDialog" modal header="Buchung bestätigen" :pt="{ root: 'w-[350px]' }">
      <div class="flex flex-col gap-4 py-2">
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Datum:</span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Zeit</span>
          <span class="text-sm font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-surface-700">Dienstleistung</span>
          <span class="text-sm font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showConfirmDialog = false" class="!bg-surface-100 !border-none !text-surface-900" />
        <Button label="Bestätigen" @click="showConfirmDialog = false" />
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
const timeSlot = ref('11:00 - 12:30')
const service = ref({ label: 'Untersuchung', value: 'Untersuchung' })
const services = ref([
  { label: 'Untersuchung', value: 'Untersuchung' },
  { label: 'Beratungsgespräch', value: 'Beratungsgespräch' }
])
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const reminder = ref(true)
const showConfirmDialog = ref(true)
</script>