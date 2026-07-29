<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-400">
    <div class="bg-white rounded-lg shadow-md w-[384px] p-0">
      <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-800">Dr. Mustermann</span>
            <span class="text-xs text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="text-gray-500" />
      </div>

      <div class="flex items-center gap-2 px-5 py-3 text-sm">
        <span class="text-gray-400">Arzt wählen</span>
        <i class="pi pi-angle-right text-gray-400 text-xs"></i>
        <span class="border border-green-500 text-green-600 rounded-full px-2 py-1 text-xs">Termin wählen</span>
        <i class="pi pi-angle-right text-gray-400 text-xs"></i>
        <span class="text-gray-400">Bestätigen</span>
      </div>

      <div class="px-5 pt-2 pb-4 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-700">Datum</label>
          <DatePicker
            v-model="datum"
            placeholder="Datum auswählen"
            showIcon
            iconDisplay="input"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-700">Uhrzeit</label>
          <DatePicker
            v-model="uhrzeit"
            placeholder="Uhrzeit auswählen"
            timeOnly
            showIcon
            iconDisplay="input"
            icon="pi pi-clock"
            class="w-full"
          />
        </div>

        <Textarea
          v-model="anmerkung"
          placeholder="Anmerkung eingeben..."
          rows="4"
          class="w-full"
        />
      </div>

      <div class="flex items-center justify-between px-5 py-4 border-t border-gray-200">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" text class="bg-gray-100 text-gray-700" />
        <Button label="Weiter" iconPos="right" icon="pi pi-angle-right" class="bg-green-600 border-green-600 hover:bg-green-700" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const datum = ref(null)
const uhrzeit = ref(null)
const anmerkung = ref('')
</script>