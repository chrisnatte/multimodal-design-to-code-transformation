<template>
  <div class="flex justify-center items-center bg-black py-[280px] w-[768px] h-[768px]">
    <div class="flex flex-col bg-white rounded-xl border border-[#e2e8f0] w-96">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-xs font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text rounded @click="onClose" />
        </div>
      </div>

      <Divider class="!m-0" />

      <!-- Content -->
      <div class="flex flex-col gap-2 px-[17.5px] pb-[17.5px] items-center">
        <Breadcrumb :model="breadcrumbItems" class="w-full" />

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <Calendar v-model="selectedDate" placeholder="Datum auswählen" showIcon iconDisplay="input" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <Calendar v-model="selectedTime" placeholder="Uhrzeit auswählen" timeOnly showIcon iconDisplay="input" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-between px-[17.5px] pb-[17.5px] gap-2">
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
import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import Textarea from 'primevue/textarea'

const selectedDate = ref(null)
const selectedTime = ref(null)
const note = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])

function onClose() {
  console.log('close dialog')
}

function onBack() {
  console.log('back clicked')
}

function onNext() {
  console.log('next clicked')
}
</script>