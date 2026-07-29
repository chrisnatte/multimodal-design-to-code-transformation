<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    :style="{ width: '384px' }"
    :pt="{
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm">Dr. Mustermann</span>
          <span class="text-xs text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>
    <div class="flex flex-col gap-4 px-4 py-4">
      <Breadcrumb
        :model="breadcrumbItems"
        :pt="{
          root: '!bg-white !border-surface-200',
        }"
      />
      <div class="flex flex-col gap-2">
        <label for="date-input" class="text-sm">Datum</label>
        <DatePicker v-model="date" input-id="date-input" placeholder="Datum auswählen" show-icon icon-display="input" fluid />
      </div>
      <div class="flex flex-col gap-2">
        <label for="time-input" class="text-sm">Uhrzeit</label>
        <DatePicker v-model="time" input-id="time-input" placeholder="Uhrzeit auswählen" time-only show-icon icon="pi pi-clock" icon-display="input" fluid />
      </div>
      <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" />
    </div>
    <template #footer>
      <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
      <Button label="Weiter" icon-pos="right" icon="pi pi-angle-right" severity="primary" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Breadcrumb from 'primevue/breadcrumb'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  const isVisible = ref(true)
  const date = ref<Date | null>(null)
  const time = ref<Date | null>(null)
  const note = ref('')

  const breadcrumbItems = [
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' },
  ]
</script>