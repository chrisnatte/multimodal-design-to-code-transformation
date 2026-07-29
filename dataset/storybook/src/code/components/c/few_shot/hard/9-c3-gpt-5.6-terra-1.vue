<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :style="{ width: '24rem' }"
    content-class="!px-4 !pt-4"
    :pt="{
      header: 'border-b border-surface-200 !px-4 !py-3',
      footer: 'border-t border-surface-200 !px-4 !py-4',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm font-medium">Dr. Mustermann</span>
          <span class="text-xs text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <Breadcrumb :model="steps" class="!border-0 !bg-transparent !p-0">
      <template #item="{ item }">
        <span
          :class="[
            'whitespace-nowrap text-sm',
            item.active
              ? 'rounded-lg border border-emerald-500 px-2 py-0.5 text-surface-600'
              : 'text-surface-500',
          ]"
        >
          {{ item.label }}
        </span>
      </template>
    </Breadcrumb>

    <div class="mt-5 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="appointment-date" class="text-sm">Datum</label>
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
        <label for="appointment-time" class="text-sm">Uhrzeit</label>
        <div class="relative">
          <i
            class="pi pi-clock pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-sm text-surface-400"
          />
          <InputText
            id="appointment-time"
            v-model="appointmentTime"
            placeholder="Uhrzeit auswählen"
            class="w-full !pl-9"
          />
        </div>
      </div>

      <Textarea
        v-model="note"
        placeholder="Anmerkung eingeben..."
        rows="4"
        class="w-full resize-none"
      />
    </div>

    <template #footer>
      <div class="flex items-center justify-between">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" size="small" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="success" size="small" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref<Date | null>(null)
const appointmentTime = ref('')
const note = ref('')

const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' },
])
</script>