<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-500 py-16">
    <div class="bg-white rounded-xl border border-slate-200 w-96 overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200" />
          <div class="flex flex-col">
            <span class="text-sm text-gray-800">Dr. Mustermann</span>
            <span class="text-xs text-gray-400">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" text rounded @click="onClose" />
      </div>

      <Divider class="!my-0" />

      <!-- Content -->
      <div class="flex flex-col gap-4 px-4 pt-4">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 rounded-md">
          <span class="text-sm text-gray-400">Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-sm text-emerald-500 border border-emerald-500 rounded-md px-2 py-0.5">Termin wählen</span>
          <i class="pi pi-chevron-right text-xs text-gray-400"></i>
          <span class="text-sm text-gray-400">Bestätigen</span>
        </div>

        <div class="flex flex-col gap-4">
          <!-- Datum -->
          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Datum</label>
            <DatePicker
              v-model="datum"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <!-- Uhrzeit -->
          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Uhrzeit</label>
            <DatePicker
              v-model="uhrzeit"
              placeholder="Uhrzeit auswählen"
              timeOnly
              showIcon
              iconDisplay="input"
              class="w-full"
              inputClass="w-full"
            >
              <template #inputicon="{ clickCallback }">
                <i class="pi pi-clock cursor-pointer" @click="clickCallback" />
              </template>
            </DatePicker>
          </div>

          <!-- Anmerkung -->
          <Textarea
            v-model="anmerkung"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full resize-none"
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between px-4 py-4">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="onBack" />
        <Button label="Weiter" iconPos="right" icon="pi pi-angle-right" @click="onNext" />
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

const onClose = () => {
  // close dialog logic
}

const onBack = () => {
  // navigate back logic
}

const onNext = () => {
  // navigate next logic
}
</script>