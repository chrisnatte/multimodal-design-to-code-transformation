<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :style="{ width: '24rem' }"
    :pt="{
      root: 'overflow-hidden',
      header: 'border-b border-surface-200 !px-4 !py-3',
      content: '!px-4 !pt-4 !pb-3',
      footer: 'border-t border-surface-200 !px-4 !py-3',
      mask: 'bg-black/40',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm font-medium text-surface-700">Dr. Mustermann</span>
          <span class="text-xs text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm text-surface-500">
        <span>Arzt wählen</span>
        <i class="pi pi-chevron-right text-xs"></i>
        <span class="rounded-full border border-emerald-500 px-2 py-0.5 text-emerald-600">Termin wählen</span>
        <i class="pi pi-chevron-right text-xs"></i>
        <span>Bestätigen</span>
      </div>

      <div class="flex flex-col gap-2">
        <label for="appointment-date" class="text-sm text-surface-700">Datum</label>
        <DatePicker
          v-model="appointmentDate"
          input-id="appointment-date"
          placeholder="Datum auswählen"
          show-icon
          icon-display="input"
          fluid
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="appointment-time" class="text-sm text-surface-700">Uhrzeit</label>
        <DatePicker
          v-model="appointmentTime"
          input-id="appointment-time"
          placeholder="Uhrzeit auswählen"
          time-only
          show-icon
          icon-display="input"
          fluid
        />
      </div>

      <Textarea
        v-model="note"
        placeholder="Anmerkung eingeben..."
        rows="4"
        fluid
        class="resize-none"
      />
    </div>

    <template #footer>
      <div class="flex items-center justify-between">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" size="small" @click="visible = false" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="success" size="small" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref<Date | null>(null)
const appointmentTime = ref<Date | null>(null)
const note = ref('')
</script>