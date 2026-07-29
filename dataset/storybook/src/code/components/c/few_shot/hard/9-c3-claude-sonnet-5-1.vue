<template>
  <Dialog
    v-model:visible="visible"
    modal
    :style="{ width: '25rem' }"
    :pt="{
      header: '!pb-4',
      content: 'flex flex-col gap-4',
      footer: 'flex justify-between',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" size="large" />
        <div class="flex flex-col">
          <span class="font-medium text-black">Dr. Mustermann</span>
          <span class="text-sm text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <Breadcrumb :model="steps" :pt="{ root: '!border-0 !bg-transparent !p-0' }">
      <template #item="{ item }">
        <span
          class="rounded-md px-2 py-1 text-sm"
          :class="item.active ? 'border border-emerald-500 text-emerald-600' : 'text-gray-500'"
        >
          {{ item.label }}
        </span>
      </template>
      <template #separator>
        <i class="pi pi-angle-right text-gray-400" />
      </template>
    </Breadcrumb>

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
        icon="pi pi-clock"
        icon-display="input"
      />
    </div>

    <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" />

    <template #footer>
      <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
      <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="primary" />
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

  const visible = ref(true)
  const date = ref()
  const time = ref()
  const note = ref('')

  const steps = ref([
    { label: 'Arzt wählen', active: false },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen', active: false },
  ])
</script>