<template>
  <div class="flex min-h-[768px] w-full flex-col items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="visible"
      modal
      append-to="self"
      :style="{ width: '384px' }"
      :pt="{
        header: 'px-4 py-4',
        content: '!p-0',
        footer: '!p-0',
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <Divider class="!m-0" />

      <div class="flex flex-col items-center gap-[7px] px-[17.5px] pb-[17.5px]">
        <Breadcrumb :model="breadcrumbItems" class="w-full !bg-transparent !px-[14px] !py-[14px]">
          <template #separator>
            <span class="pi pi-chevron-right text-xs" />
          </template>
        </Breadcrumb>

        <div class="flex w-full flex-col gap-4">
          <div class="flex flex-col gap-[7px]">
            <label for="appointment-date" class="text-sm">Datum</label>
            <DatePicker
              v-model="appointmentDate"
              input-id="appointment-date"
              placeholder="Datum auswählen"
              show-icon
              icon-display="input"
              fluid
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="appointment-time" class="text-sm">Uhrzeit</label>
            <DatePicker
              v-model="appointmentTime"
              input-id="appointment-time"
              placeholder="Uhrzeit auswählen"
              show-time
              time-only
              hour-format="24"
              show-icon
              icon="pi pi-clock"
              icon-display="input"
              fluid
            />
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            fluid
            class="h-[101px] resize-none"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            @click="goBack"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            icon-pos="right"
            @click="goForward"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const appointmentDate = ref<Date | null>(null)
const appointmentTime = ref<Date | null>(null)
const note = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' },
])

function goBack() {
  visible.value = false
}

function goForward() {
  visible.value = false
}
</script>