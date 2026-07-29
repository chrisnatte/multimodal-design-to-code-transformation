<template>
  <Dialog v-model:visible="isDialogVisible" modal :pt="{ root: 'w-full max-w-md', content: '!p-0' }">
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm">Dr. Mustermann</span>
          <span class="text-xs text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <Breadcrumb :model="breadcrumbItems" />
      <div class="flex flex-col gap-2">
        <label for="date-input" class="text-sm">Datum</label>
        <DatePicker v-model="date" input-id="date-input" placeholder="Datum auswählen">
          <template #inputicon>
            <i class="pi pi-calendar" />
          </template>
        </DatePicker>
      </div>
      <div class="flex flex-col gap-2">
        <label for="time-input" class="text-sm">Uhrzeit</label>
        <DatePicker
          v-model="time"
          input-id="time-input"
          placeholder="Uhrzeit auswählen"
          time-only
        >
          <template #inputicon>
            <i class="pi pi-clock" />
          </template>
        </DatePicker>
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

  const isDialogVisible = ref(true)
  const date = ref()
  const time = ref()
  const note = ref('')

  const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' },
  ])
</script>