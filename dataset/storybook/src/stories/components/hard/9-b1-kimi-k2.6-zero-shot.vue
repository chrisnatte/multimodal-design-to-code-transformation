<template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <div class="w-96 bg-white rounded-xl border border-slate-200 flex flex-col">
      <div class="flex items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text severity="secondary" />
      </div>

      <Divider class="w-full" />

      <div class="flex flex-col items-stretch justify-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Breadcrumb :model="breadcrumbItems" class="bg-white rounded-md p-[14px] w-full" />

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm text-gray-700">Datum</label>
            <DatePicker v-model="selectedDate" showIcon iconDisplay="input" placeholder="Datum auswählen" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm text-gray-700">Uhrzeit</label>
            <DatePicker v-model="selectedTime" timeOnly showIcon iconDisplay="input" placeholder="Uhrzeit auswählen" class="w-full" />
          </div>

          <Textarea v-model="note" placeholder="Anmerkung eingeben..." class="w-full" :style="{ height: '101px' }" />
        </div>
      </div>

      <div class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
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
import Breadcrumb from 'primevue/breadcrumb'
import Textarea from 'primevue/textarea'

const selectedDate = ref(null)
const selectedTime = ref(null)
const note = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])
</script>