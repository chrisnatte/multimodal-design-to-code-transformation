<template>
  <div class="flex h-[768px] w-[768px] flex-col items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      :pt="{
        root: 'w-[384px] overflow-hidden',
        header: '!p-0',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" size="large" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Dr. Mustermann</span>
              <span class="text-[10px] font-light">Allgemeinmedizin</span>
            </div>
          </div>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Dialog schließen"
            @click="visible = false"
          />
        </div>
      </template>

      <Divider class="!m-0" />

      <div class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Breadcrumb :model="steps" class="w-full !rounded-md !bg-white !p-3.5" />

        <div class="flex w-full flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="appointment-date" class="text-sm">Datum</label>
            <DatePicker
              v-model="appointmentDate"
              input-id="appointment-date"
              placeholder="Datum auswählen"
              show-icon
              icon-display="input"
              class="w-full"
              input-class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="appointment-time" class="text-sm">Uhrzeit</label>
            <DatePicker
              v-model="appointmentTime"
              input-id="appointment-time"
              placeholder="Uhrzeit auswählen"
              time-only
              show-icon
              icon-display="input"
              class="w-full"
              input-class="w-full"
            />
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="goBack" />
          <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" @click="goNext" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref<Date | null>(null)
const appointmentTime = ref<Date | null>(null)
const note = ref('')

const steps = [
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' },
]

const goBack = () => {}
const goNext = () => {}
</script>