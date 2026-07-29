<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :draggable="false"
    :style="{ width: '25rem' }"
    :pt="{
      content: 'flex flex-col gap-4',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" size="large" />
        <div class="flex flex-col">
          <span class="font-semibold">Dr. Mustermann</span>
          <span class="text-sm text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <Breadcrumb :model="breadcrumbItems" :pt="{ root: '!bg-transparent !border-0 !p-0' }">
      <template #item="{ item }">
        <Tag v-if="item.active" :value="item.label" severity="success" rounded class="!bg-transparent border border-green-500 text-green-600" />
        <span v-else class="text-gray-500">{{ item.label }}</span>
      </template>
    </Breadcrumb>

    <div class="flex flex-col gap-2">
      <label for="date-input" class="text-sm">Datum</label>
      <DatePicker v-model="date" input-id="date-input" placeholder="Datum auswählen" show-icon icon-display="input" fluid />
    </div>

    <div class="flex flex-col gap-2">
      <label for="time-input" class="text-sm">Uhrzeit</label>
      <DatePicker v-model="time" input-id="time-input" placeholder="Uhrzeit auswählen" time-only show-icon icon-display="input" fluid />
    </div>

    <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" />

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
  import Breadcrumb from 'primevue/breadcrumb'
  import Tag from 'primevue/tag'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  const visible = ref(true)
  const date = ref()
  const time = ref()
  const note = ref('')

  const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' },
  ])
</script>