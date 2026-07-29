<template>
  <div class="flex items-center justify-center bg-black py-[280px] w-[768px] h-[768px]">
    <div class="flex flex-col w-96 bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <Button icon="pi pi-times" severity="secondary" text @click="onClose" />
        </div>
      </div>

      <Divider class="m-0" />

      <!-- Content -->
      <div class="flex flex-col items-center gap-2 px-[17.5px] pb-[17.5px]">
        <div class="flex items-center justify-center gap-2 w-full rounded-md bg-white p-3.5">
          <Breadcrumb :model="breadcrumbItems" class="border-none bg-transparent p-0" />
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker
              v-model="datum"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker
              v-model="uhrzeit"
              placeholder="Uhrzeit auswählen"
              timeOnly
              showIcon
              iconDisplay="input"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1 w-full">
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
      <div class="flex items-center justify-between px-[17.5px] pb-[17.5px] w-full">
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
          severity="primary"
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
import Breadcrumb from 'primevue/breadcrumb'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const datum = ref(null)
const uhrzeit = ref(null)
const anmerkung = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])

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