<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <div class="flex flex-col bg-white rounded-xl w-full max-w-2xl">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-xs">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col items-center gap-2 px-4 py-4">
        <div class="flex items-center gap-2 p-3.5 w-full rounded-md">
          <Breadcrumb :model="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="form.date" placeholder="Datum auswählen" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="form.time" timeOnly placeholder="Uhrzeit auswählen" class="w-full" />
          </div>

          <Textarea v-model="form.note" placeholder="Anmerkung eingeben..." rows="5" class="w-full" />
        </div>
      </div>

      <div class="flex items-center justify-between gap-2 px-4 pb-4">
        <Button label="Zurück" icon="pi pi-angle-left" iconPos="left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Breadcrumb from 'primevue/breadcrumb'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const form = reactive({
  date: null,
  time: null,
  note: ''
})

const breadcrumbItems = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])
</script>