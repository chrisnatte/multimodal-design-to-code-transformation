<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400 p-4">
    <Card class="w-full max-w-md shadow-xl rounded-2xl overflow-hidden bg-white">
      <template #header>
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-600" />
            <div>
              <div class="text-base font-semibold text-gray-900">Dr. Mustermann</div>
              <div class="text-xs text-gray-500">Allgemeinmedizin</div>
            </div>
          </div>
          <Button icon="pi pi-times" text rounded class="text-gray-400" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-center gap-2 text-sm">
            <span class="text-gray-500">Arzt wählen</span>
            <i class="pi pi-chevron-right text-gray-400 text-xs"></i>
            <span class="px-3 py-0.5 rounded-full border border-emerald-500 text-emerald-600 font-medium">Termin wählen</span>
            <i class="pi pi-chevron-right text-gray-400 text-xs"></i>
            <span class="text-gray-500">Bestätigen</span>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">Datum</label>
              <IconField iconPosition="left">
                <InputIcon class="pi pi-calendar text-gray-400" />
                <DatePicker v-model="date" placeholder="Datum auswählen" class="w-full" />
              </IconField>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">Uhrzeit</label>
              <IconField iconPosition="left">
                <InputIcon class="pi pi-clock text-gray-400" />
                <DatePicker v-model="time" placeholder="Uhrzeit auswählen" timeOnly class="w-full" />
              </IconField>
            </div>

            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between items-center">
          <Button label="Zurück" icon="pi pi-chevron-left" severity="secondary" class="text-sm" />
          <Button label="Weiter" icon="pi pi-chevron-right" iconPos="right" severity="success" class="text-sm" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const date = ref(null)
const time = ref(null)
const note = ref('')
</script>