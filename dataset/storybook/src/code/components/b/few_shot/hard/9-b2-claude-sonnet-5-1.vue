<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :draggable="false"
    :style="{ width: '24rem' }"
    :pt="{
      header: 'p-4',
      content: 'flex flex-col gap-4 !p-0',
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" size="large" shape="circle" />
        <div class="flex flex-col">
          <span class="text-sm">Dr. Mustermann</span>
          <span class="text-xs font-light">Allgemeinmedizin</span>
        </div>
      </div>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <Breadcrumb
        :home="null"
        :model="breadcrumbItems"
        :pt="{
          root: '!bg-white !border-0 !p-0',
        }"
      />
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="datum">Datum</label>
          <DatePicker v-model="datum" input-id="datum" placeholder="Datum auswählen" show-icon icon-display="input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="uhrzeit">Uhrzeit</label>
          <DatePicker
            v-model="uhrzeit"
            input-id="uhrzeit"
            placeholder="Uhrzeit auswählen"
            time-only
            show-icon
            icon-display="input"
          >
            <template #inputicon="slotProps">
              <i class="pi pi-clock" @click="slotProps.clickCallback" />
            </template>
          </DatePicker>
        </div>
        <Textarea v-model="anmerkung" placeholder="Anmerkung eingeben..." rows="4" />
      </div>
    </div>
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
  const datum = ref()
  const uhrzeit = ref()
  const anmerkung = ref('')

  const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' },
  ])
</script>