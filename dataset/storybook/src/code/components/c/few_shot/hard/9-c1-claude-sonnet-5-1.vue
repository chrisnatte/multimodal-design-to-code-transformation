<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :pt="{
      root: 'w-full max-w-sm',
      header: '!p-4',
      content: 'flex flex-col !gap-4 !px-4 !pb-4',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm font-medium">Dr. Mustermann</span>
          <span class="text-xs text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex items-center gap-2 text-sm text-gray-500">
      <span>Arzt wählen</span>
      <i class="pi pi-angle-right text-xs" />
      <span class="rounded-md border border-green-400 px-2 py-1 text-green-600">
        Termin wählen
      </span>
      <i class="pi pi-angle-right text-xs" />
      <span>Bestätigen</span>
    </div>

    <div class="flex flex-col gap-2">
      <label for="date-input" class="text-sm">Datum</label>
      <DatePicker
        v-model="date"
        input-id="date-input"
        placeholder="Datum auswählen"
        show-icon
        icon-display="input"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="time-input" class="text-sm">Uhrzeit</label>
      <DatePicker
        v-model="time"
        input-id="time-input"
        placeholder="Uhrzeit auswählen"
        time-only
        show-icon
        icon-display="input"
        icon="pi pi-clock"
      />
    </div>

    <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="3" />

    <template #footer>
      <Button label="Zurück" icon="pi pi-chevron-left" severity="secondary" />
      <Button label="Weiter" icon="pi pi-chevron-right" icon-pos="right" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  const isVisible = ref(true)
  const date = ref()
  const time = ref()
  const note = ref('')
</script>