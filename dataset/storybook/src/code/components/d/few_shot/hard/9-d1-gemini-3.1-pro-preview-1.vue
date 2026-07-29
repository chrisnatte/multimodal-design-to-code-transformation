<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :pt="{
      root: 'w-full max-w-[384px]',
      header: 'pb-4',
      content: 'flex flex-col gap-4 pt-2',
      footer: 'flex justify-between w-full pt-4'
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" class="bg-surface-100 text-surface-700 text-xl" />
        <div class="flex flex-col">
          <span class="text-sm font-normal text-surface-900">Dr. Mustermann</span>
          <span class="text-[10px] font-light text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex items-center gap-2 text-sm text-surface-500">
      <span>Arzt wählen</span>
      <i class="pi pi-chevron-right text-[10px]"></i>
      <span class="rounded-md border border-primary px-2 py-1 text-primary">Termin wählen</span>
      <i class="pi pi-chevron-right text-[10px]"></i>
      <span>Bestätigen</span>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-900">Datum</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-calendar" />
          <DatePicker v-model="date" placeholder="Datum auswählen" class="w-full" />
        </IconField>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-surface-900">Uhrzeit</label>
        <IconField iconPosition="left">
          <InputIcon class="pi pi-clock" />
          <DatePicker v-model="time" timeOnly placeholder="Uhrzeit auswählen" class="w-full" />
        </IconField>
      </div>

      <Textarea v-model="notes" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
    </div>

    <template #footer>
      <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="bg-surface-100 text-surface-700 border-none hover:bg-surface-200" />
      <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="primary" />
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const visible = ref(true)
const date = ref(null)
const time = ref(null)
const notes = ref('')
</script>