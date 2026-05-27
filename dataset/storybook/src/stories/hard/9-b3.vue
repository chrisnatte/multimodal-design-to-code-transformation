<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black py-72">
    <div class="bg-white rounded-xl flex flex-col w-full max-w-2xl">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" text severity="secondary" aria-label="Close" />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col items-center gap-2 px-4 pb-4">
        <div class="w-full p-3.5">
          <Breadcrumb :model="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker
              v-model="state.date"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              fluid
            />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker
              v-model="state.time"
              placeholder="Uhrzeit auswählen"
              showIcon
              iconDisplay="input"
              timeOnly
              fluid
            />
          </div>

          <Textarea
            v-model="state.note"
            placeholder="Anmerkung eingeben..."
            rows="5"
            fluid
          />
        </div>
      </div>

      <div class="flex justify-between gap-2 px-4 pb-4">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
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

const state = reactive({
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