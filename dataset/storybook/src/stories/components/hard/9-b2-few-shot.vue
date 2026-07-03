<template>
  <div class="flex flex-col items-center justify-center py-72 bg-black min-h-screen">
    <Dialog :visible="ui.visible" modal :closable="false" :draggable="false" :style="{ width: '42rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full p-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" size="large" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Dr. Mustermann</span>
              <span class="text-xs">Allgemeinmedizin</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Close" @click="ui.visible = false" />
          </div>
        </div>
      </template>

      <Divider />

      <div class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2 p-3.5">
          <Breadcrumb :model="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="form.date" placeholder="Datum auswählen" showIcon iconDisplay="input" />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="form.time" placeholder="Uhrzeit auswählen" timeOnly showIcon iconDisplay="input" />
          </div>

          <Textarea v-model="form.note" placeholder="Anmerkung eingeben..." rows="5" />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between w-full p-4">
          <Button label="Zurück" icon="pi pi-angle-left" iconPos="left" severity="secondary" />
          <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
        </div>
      </template>
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

const ui = reactive({
  visible: true
})

const form = reactive({
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