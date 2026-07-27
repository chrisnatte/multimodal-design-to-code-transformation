<template>
  <div class="flex h-[768px] w-[768px] flex-col items-center justify-center bg-black">
    <div class="flex w-96 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
      <div class="flex items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="xlarge" class="bg-[#e2e8f0] text-slate-700" />
          <div class="flex w-[115px] flex-col">
            <span class="text-sm font-normal text-slate-900">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-slate-700">Allgemeinmedizin</span>
          </div>
        </div>

        <div class="flex w-[35px] flex-col gap-[7px]">
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Dialog schließen"
            class="h-7 w-[35px]"
            @click="isDialogVisible = false"
          />
        </div>
      </div>

      <Divider class="my-0" />

      <div class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Breadcrumb :model="breadcrumbItems" class="w-full rounded-md bg-white px-3.5 py-3.5" />

        <div class="flex w-full flex-col gap-4">
          <div class="flex flex-col gap-[7px]">
            <label for="appointment-date" class="text-sm font-normal text-slate-900">Datum</label>
            <DatePicker
              id="appointment-date"
              v-model="appointmentDate"
              show-icon
              icon-display="input"
              date-format="dd.mm.yy"
              placeholder="Datum auswählen"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="appointment-time" class="text-sm font-normal text-slate-900">Uhrzeit</label>
            <DatePicker
              id="appointment-time"
              v-model="appointmentTime"
              time-only
              show-icon
              icon-display="input"
              placeholder="Uhrzeit auswählen"
              class="w-full"
            />
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="h-[101px] w-full resize-none"
            aria-label="Anmerkung"
          />
        </div>
      </div>

      <div class="flex items-center justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const isDialogVisible = ref(true)
const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const breadcrumbItems = [
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]
</script>