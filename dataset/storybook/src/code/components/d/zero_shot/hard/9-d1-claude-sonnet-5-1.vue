<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-400 py-16">
    <div class="w-96 bg-white rounded-xl border border-slate-200 overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">Dr. Mustermann</span>
            <span class="text-xs text-gray-400 font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          rounded
          @click="onClose"
        />
      </div>

      <Divider class="!my-0" />

      <!-- Content -->
      <div class="flex flex-col gap-4 p-4">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 rounded-md p-3 bg-white">
          <span class="text-sm text-gray-400">Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-sm text-emerald-500 border border-emerald-500 rounded-md px-2 py-0.5">Termin wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-sm text-gray-400">Bestätigen</span>
        </div>

        <!-- Form fields -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-800">Datum</label>
            <DatePicker
              v-model="datum"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-800">Uhrzeit</label>
            <DatePicker
              v-model="uhrzeit"
              placeholder="Uhrzeit auswählen"
              timeOnly
              showIcon
              iconDisplay="input"
              class="w-full"
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback"></i>
              </template>
            </DatePicker>
          </div>

          <div class="flex flex-col gap-1">
            <Textarea
              v-model="anmerkung"
              placeholder="Anmerkung eingeben..."
              rows="4"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between p-4">
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          @click="onBack"
        />
        <Button
          label="Weiter"
          iconPos="right"
          icon="pi pi-angle-right"
          @click="onNext"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const datum = ref(null)
const uhrzeit = ref(null)
const anmerkung = ref('')

function onClose() {
  console.log('close dialog')
}

function onBack() {
  console.log('go back')
}

function onNext() {
  console.log('go next')
}
</script>