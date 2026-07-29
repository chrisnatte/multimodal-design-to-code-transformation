<template>
  <div class="flex w-full items-center justify-center bg-black py-[280px]">
    <div class="w-96 rounded-xl border border-surface-200 bg-white">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>
      <Divider class="!my-0" />
      <div class="flex flex-col items-center gap-2 p-[17.5px]">
        <Breadcrumb :model="breadcrumbItems" class="w-full" />
        <div class="flex w-full flex-col gap-4">
          <DatePicker v-model="date" input-id="date-input" show-icon icon-display="input" placeholder="Datum auswählen" />
          <div class="flex flex-col gap-2">
            <label for="time-input" class="text-sm">Uhrzeit</label>
            <DatePicker v-model="time" input-id="time-input" time-only placeholder="Uhrzeit auswählen" />
          </div>
          <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" />
        </div>
      </div>
      <div class="flex items-center justify-between p-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon-pos="right" icon="pi pi-angle-right" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import Breadcrumb from 'primevue/breadcrumb'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'

  const date = ref<Date | null>(null)
  const time = ref<Date | null>(null)
  const note = ref('')

  const breadcrumbItems = [
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' },
  ]
</script>