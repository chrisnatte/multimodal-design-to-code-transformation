<template>
  <div class="min-h-screen bg-gray-500 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-sm overflow-hidden">
      <div class="p-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-700 w-10 h-10 text-lg" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-900">Dr. Mustermann</span>
            <span class="text-xs text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" text aria-label="Schließen" />
      </div>

      <Divider />

      <div class="px-4 pb-4 flex flex-col gap-2">
        <div class="flex items-center gap-2 text-sm py-2">
          <span class="text-gray-500">Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-emerald-600 border border-emerald-500 rounded px-2 py-0.5">Termin wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-gray-500">Bestätigen</span>
        </div>

        <div class="flex flex-col gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Datum</label>
            <DatePicker v-model="date" showIcon placeholder="Datum auswählen" class="w-full" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Uhrzeit</label>
            <DatePicker v-model="time" showIcon timeOnly placeholder="Uhrzeit auswählen" class="w-full" />
          </div>
          <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="5" class="w-full resize-none" />
        </div>
      </div>

      <div class="px-4 pb-4 flex items-center justify-between">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const date = ref(null)
const time = ref(null)
const note = ref('')
</script>