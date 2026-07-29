<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :closable="false"
    :style="{ width: '24rem' }"
    :pt="{
      header: '!hidden',
      content: '!p-0 flex flex-col gap-0',
    }"
  >
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm">Dr. Mustermann</span>
          <span class="text-xs font-light text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
      <Button icon="pi pi-times" severity="secondary" text @click="visible = false" />
    </div>
    <Divider class="!m-0" />
    <div class="flex flex-col gap-4 p-4">
      <Breadcrumb :model="breadcrumbItems" :pt="{ root: '!bg-transparent !border-0 !p-0' }" />
      <div class="flex flex-col gap-2">
        <label for="datum" class="text-sm">Datum</label>
        <DatePicker
          v-model="datum"
          input-id="datum"
          placeholder="Datum auswählen"
          show-icon
          icon-display="input"
          fluid
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="uhrzeit" class="text-sm">Uhrzeit</label>
        <DatePicker
          v-model="uhrzeit"
          input-id="uhrzeit"
          placeholder="Uhrzeit auswählen"
          time-only
          show-icon
          icon="pi pi-clock"
          icon-display="input"
          fluid
        />
      </div>
      <Textarea v-model="anmerkung" placeholder="Anmerkung eingeben..." rows="4" />
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
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import Breadcrumb from 'primevue/breadcrumb'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'

  const visible = ref(true)
  const datum = ref()
  const uhrzeit = ref()
  const anmerkung = ref('')

  const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' },
  ])
</script>