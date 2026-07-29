<template>
  <div class="min-h-screen bg-black/50 flex items-center justify-center p-4 font-sans">
    <div class="w-full max-w-[384px] bg-white rounded-xl flex flex-col overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="!bg-slate-200 !text-slate-700 text-xl" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Dr. Mustermann</span>
            <span class="text-[10px] text-slate-500 font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!w-8 !h-8 !p-0 !text-slate-500" />
      </div>

      <Divider class="!m-0 !before:border-slate-200" />

      <!-- Content -->
      <div class="flex flex-col gap-4 p-4">
        <!-- Stepper -->
        <div class="flex items-center gap-2 text-sm">
          <span class="text-slate-500">Arzt wählen</span>
          <i class="pi pi-chevron-right text-slate-400 text-xs"></i>
          <span class="px-2 py-1 border border-emerald-500 text-emerald-500 rounded-md">Termin wählen</span>
          <i class="pi pi-chevron-right text-slate-400 text-xs"></i>
          <span class="text-slate-500">Bestätigen</span>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-slate-700">Datum</label>
            <IconField>
              <InputIcon class="pi pi-calendar text-slate-400" />
              <DatePicker v-model="date" placeholder="Datum auswählen" class="w-full" inputClass="!pl-10" />
            </IconField>
          </div>
          
          <div class="flex flex-col gap-1">
            <label class="text-sm text-slate-700">Uhrzeit</label>
            <IconField>
              <InputIcon class="pi pi-clock text-slate-400" />
              <DatePicker v-model="time" timeOnly placeholder="Uhrzeit auswählen" class="w-full" inputClass="!pl-10" />
            </IconField>
          </div>
          
          <div class="flex flex-col gap-1">
            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between p-4 pb-5">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 hover:!bg-slate-200" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const date = ref(null)
const time = ref(null)
const note = ref('')
</script>