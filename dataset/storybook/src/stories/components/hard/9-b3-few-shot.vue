<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <Dialog
      v-model:visible="form.dialogVisible"
      :modal="false"
      :closable="false"
      :draggable="false"
      :showHeader="false"
      :style="{ width: '42rem' }"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" size="large" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Dr. Mustermann</span>
              <span class="text-xs">Allgemeinmedizin</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Button icon="pi pi-times" text severity="secondary" />
          </div>
        </div>

        <Divider />

        <div class="flex flex-col items-center gap-2 p-4">
          <div class="flex items-center gap-2 p-3 w-full">
            <Breadcrumb :model="breadcrumbItems" />
          </div>

          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-1">
              <label class="text-sm">Datum</label>
              <DatePicker v-model="form.date" placeholder="Datum auswählen" showIcon fluid />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm">Uhrzeit</label>
              <DatePicker v-model="form.time" placeholder="Uhrzeit auswählen" timeOnly showIcon fluid />
            </div>

            <Textarea v-model="form.note" placeholder="Anmerkung eingeben..." rows="5" fluid />
          </div>
        </div>

        <div class="flex items-center justify-between gap-2 p-4">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
          <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Breadcrumb from 'primevue/breadcrumb'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const form = reactive({
  dialogVisible: true,
  date: null,
  time: null,
  note: ''
})

const breadcrumbItems = reactive([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])
</script>