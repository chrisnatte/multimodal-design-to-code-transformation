<template>
  <Dialog
    v-model:visible="visible"
    modal
    :pt="{
      root: 'w-full max-w-[384px]',
      header: 'pb-4 border-b border-surface-200',
      content: 'pt-6 pb-4',
      footer: 'pt-4'
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" class="bg-surface-200 text-surface-700 font-medium text-xl" />
        <div class="flex flex-col">
          <span class="text-sm font-medium text-surface-900">Dr. Mustermann</span>
          <span class="text-xs text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex flex-col gap-6">
      <!-- Custom Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-surface-500">
        <span>Arzt wählen</span>
        <i class="pi pi-chevron-right text-[10px]"></i>
        <span class="border border-primary text-primary rounded-md px-2 py-1">Termin wählen</span>
        <i class="pi pi-chevron-right text-[10px]"></i>
        <span>Bestätigen</span>
      </div>

      <!-- Form Fields -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-surface-700">Datum</label>
          <DatePicker
            v-model="date"
            showIcon
            iconDisplay="input"
            placeholder="Datum auswählen"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-surface-700">Uhrzeit</label>
          <DatePicker
            v-model="time"
            timeOnly
            showIcon
            iconDisplay="input"
            placeholder="Uhrzeit auswählen"
            class="w-full"
          >
            <template #inputicon>
              <i class="pi pi-clock"></i>
            </template>
          </DatePicker>
        </div>

        <div class="flex flex-col gap-1.5">
          <Textarea
            v-model="notes"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full resize-none"
          />
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-between w-full">
        <Button
          label="Zurück"
          icon="pi pi-chevron-left"
          severity="secondary"
          class="!bg-surface-100 !border-none !text-surface-700 hover:!bg-surface-200"
        />
        <Button
          label="Weiter"
          icon="pi pi-chevron-right"
          iconPos="right"
          severity="primary"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const date = ref(null)
const time = ref(null)
const notes = ref('')
</script>