<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center py-72">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '42rem' }"
      class="rounded-xl"
    >
      <template #container>
        <div class="bg-white rounded-xl flex flex-col">
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" size="large" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Dr. Mustermann</span>
                <span class="text-[10px] font-light">Allgemeinmedizin</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <Button icon="pi pi-times" text severity="secondary" />
            </div>
          </div>

          <Divider />

          <div class="flex flex-col items-center gap-2 px-4 pb-4">
            <div class="w-full p-3.5 rounded-md">
              <Breadcrumb :model="state.breadcrumbItems" />
            </div>

            <div class="w-full flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <label class="text-sm">Datum</label>
                <DatePicker v-model="state.date" placeholder="Datum auswählen" fluid showIcon iconDisplay="input" />
              </div>

              <div class="flex flex-col gap-1">
                <label class="text-sm">Uhrzeit</label>
                <DatePicker v-model="state.time" placeholder="Uhrzeit auswählen" fluid timeOnly showIcon iconDisplay="input" />
              </div>

              <Textarea v-model="state.note" rows="5" placeholder="Anmerkung eingeben..." fluid />
            </div>
          </div>

          <div class="flex items-center justify-between gap-2 px-4 pb-4">
            <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
            <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
          </div>
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

const state = reactive({
  visible: true,
  date: null,
  time: null,
  note: '',
  breadcrumbItems: [
    { label: 'Arzt wählen' },
    { label: 'Termin wählen' },
    { label: 'Bestätigen' }
  ]
})
</script>