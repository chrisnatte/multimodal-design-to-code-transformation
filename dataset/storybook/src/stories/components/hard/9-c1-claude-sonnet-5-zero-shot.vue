<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-400">
    <div class="bg-white rounded-lg shadow-lg w-[400px] p-0">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold text-gray-800">Dr. Mustermann</span>
            <span class="text-xs text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" @click="onClose" />
      </div>

      <!-- Steps -->
      <div class="flex items-center gap-2 px-4 py-3 text-sm">
        <span class="text-gray-500">Arzt wählen</span>
        <i class="pi pi-angle-right text-gray-400 text-xs"></i>
        <span class="border border-green-500 text-green-600 rounded-full px-3 py-1">Termin wählen</span>
        <i class="pi pi-angle-right text-gray-400 text-xs"></i>
        <span class="text-gray-500">Bestätigen</span>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-4 px-4 py-2">
        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Datum</label>
          <DatePicker
            v-model="datum"
            placeholder="Datum auswählen"
            showIcon
            iconDisplay="input"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Uhrzeit</label>
          <DatePicker
            v-model="uhrzeit"
            placeholder="Uhrzeit auswählen"
            timeOnly
            showIcon
            icon="pi pi-clock"
            iconDisplay="input"
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

      <!-- Footer -->
      <div class="flex items-center justify-between px-4 py-4">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" outlined class="bg-gray-100 border-0 text-gray-700" @click="onBack" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" @click="onNext" />
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

const onClose = () => {
  console.log('close clicked')
}

const onBack = () => {
  console.log('back clicked')
}

const onNext = () => {
  console.log('next clicked')
}
</script>