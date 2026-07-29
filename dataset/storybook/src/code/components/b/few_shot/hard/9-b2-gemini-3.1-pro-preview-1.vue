<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-8">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :pt="{
        root: 'w-full max-w-[384px] rounded-xl border border-slate-200 bg-white',
        header: 'flex flex-col p-0',
        content: 'flex flex-col gap-4 p-4',
        footer: 'flex items-center justify-between p-4 pt-0',
      }"
    >
      <template #header>
        <div class="flex w-full flex-col">
          <div class="flex w-full items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-xl text-black" />
              <div class="flex flex-col">
                <span class="text-sm font-normal text-black">Dr. Mustermann</span>
                <span class="text-[10px] font-light text-black">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" @click="visible = false" />
          </div>
          <Divider class="!my-0" />
        </div>
      </template>

      <div class="flex items-center gap-2 rounded-md bg-white py-3.5">
        <span class="text-sm text-black">Arzt wählen</span>
        <i class="pi pi-chevron-right text-sm text-black"></i>
        <span class="rounded-md border border-slate-200 px-1 py-0.5 text-sm text-black">Termin wählen</span>
        <i class="pi pi-chevron-right text-sm text-black"></i>
        <span class="text-sm text-black">Bestätigen</span>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm text-black">Datum</label>
          <DatePicker v-model="date" placeholder="Datum auswählen" fluid showIcon iconDisplay="input" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm text-black">Uhrzeit</label>
          <DatePicker v-model="time" timeOnly placeholder="Uhrzeit auswählen" fluid showIcon iconDisplay="input">
            <template #inputicon="slotProps">
              <i class="pi pi-clock" @click="slotProps.clickCallback" />
            </template>
          </DatePicker>
        </div>
        <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid />
      </div>

      <template #footer>
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="bg-slate-100 text-black border-none" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="primary" class="bg-emerald-500 text-white border-none" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const date = ref(null)
const time = ref(null)
const note = ref('')
</script>