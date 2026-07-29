<template>
  <div class="flex min-h-screen items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :pt="{
        root: 'w-[384px] rounded-xl bg-white border border-slate-200',
        header: 'flex items-center justify-between p-4',
        content: 'flex flex-col p-0',
        footer: 'flex items-center justify-between p-[17.5px] pt-0'
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-[21px]" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          aria-label="Close"
          @click="visible = false"
        />
      </template>

      <Divider class="!m-0 !border-slate-200" />

      <div class="flex flex-col gap-[7px] p-[17.5px]">
        <div class="flex items-center gap-[7px] rounded-md bg-white p-3.5">
          <span class="text-sm font-normal">Arzt wählen</span>
          <i class="pi pi-chevron-right text-sm"></i>
          <div class="rounded-md border border-white px-1">
            <span class="text-sm font-normal">Termin wählen</span>
          </div>
          <i class="pi pi-chevron-right text-sm"></i>
          <span class="text-sm font-normal">Bestätigen</span>
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-normal">Datum</label>
            <DatePicker
              v-model="date"
              placeholder="Datum auswählen"
              show-icon
              icon-display="input"
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-normal">Uhrzeit</label>
            <DatePicker
              v-model="time"
              time-only
              placeholder="Uhrzeit auswählen"
              show-icon
              icon-display="input"
              class="w-full"
            >
              <template #inputicon>
                <i class="pi pi-clock" />
              </template>
            </DatePicker>
          </div>

          <Textarea
            v-model="notes"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full"
          />
        </div>
      </div>

      <template #footer>
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          class="bg-slate-100"
        />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          icon-pos="right"
          severity="primary"
          class="bg-[#10b981]"
        />
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
const date = ref()
const time = ref()
const notes = ref('')
</script>