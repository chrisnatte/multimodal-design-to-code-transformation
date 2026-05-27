<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center py-72">
    <div class="bg-white rounded-xl flex flex-col w-full max-w-2xl">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col items-center gap-2 px-4 pb-4">
        <div class="w-full flex items-center gap-2 p-3 rounded-md">
          <span class="text-sm">Arzt wählen</span>
          <i class="pi pi-chevron-right text-sm"></i>
          <span class="text-sm px-1 rounded-md">Termin wählen</span>
          <i class="pi pi-chevron-right text-sm"></i>
          <span class="text-sm">Bestätigen</span>
        </div>

        <div class="w-full flex flex-col gap-4">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="state.date" placeholder="Datum auswählen" showIcon iconDisplay="input" fluid />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="state.time" timeOnly placeholder="Uhrzeit auswählen" showIcon iconDisplay="input" fluid />
          </div>

          <Textarea v-model="state.note" rows="5" placeholder="Anmerkung eingeben..." fluid />
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
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const state = reactive({
  date: null,
  time: null,
  note: ''
})
</script>