<template>
  <Dialog
    header="Profil bearbeiten"
    visible
    modal
    :pt="{
      root: 'w-full max-w-md',
      content: 'flex flex-col !gap-4',
      footer: 'flex !justify-between',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span>Dr. Mustermann</span>
          <span class="font-xs font-light">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <Breadcrumb :model="items" class="self-center" />

    <div class="flex flex-1 flex-col gap-2">
      <label for="date-input" class="text-sm">Datum</label>
      <DatePicker
        v-model="date"
        placeholder="Datum auswählen"
        input-id="date-input"
        :show-icon="true"
        icon-display="input"
      />
    </div>

    <div class="flex w-full flex-col gap-2">
      <label for="time-input" class="text-sm">Uhrzeit</label>
      <DatePicker
        v-model="time"
        placeholder="Uhrzeit aus wählen"
        input-id="time-input"
        :time-only="true"
        :show-icon="true"
        icon="pi pi-clock"
        icon-display="input"
      />
    </div>

    <Textarea v-model="note" placeholder="Anmerkung eingeben" class="min-h-28" />

    <template #footer>
      <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
      <Button
        label="In den Warenkorb"
        icon="pi pi-angle-right"
        icon-pos="right"
        severity="primary"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Textarea from 'primevue/textarea'
  import DatePicker from 'primevue/datepicker'
  import Breadcrumb from 'primevue/breadcrumb'
  import type { MenuItem } from 'primevue/menuitem'

  const items = ref<MenuItem[]>([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', class: 'px-2 rounded-xl border border-[var(--p-primary-color)]' },
    { label: 'Bestätigen' },
  ])

  const date = ref()
  const time = ref()
  const note = ref()
</script>
