<template>
  <div class="h-[768px] w-[768px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :draggable="false"
      :close-button-props="{ severity: 'secondary', variant: 'text', ariaLabel: 'Schließen' }"
      :pt="{
        mask: { class: '!bg-black' },
        root: { class: '!w-96' },
        header: { class: '!px-4 !py-4' },
        content: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' },
        footer: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' }
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" aria-label="Dr. Mustermann" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col gap-[7px]">
        <Breadcrumb :model="breadcrumbItems" class="w-full !px-3.5 !py-3.5">
          <template #separator>
            <i class="pi pi-chevron-right text-sm" aria-hidden="true" />
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-[7px]">
            <label for="appointment-date" class="text-sm">Datum</label>
            <DatePicker
              v-model="appointmentDate"
              input-id="appointment-date"
              placeholder="Datum auswählen"
              show-icon
              icon-display="input"
              icon="pi pi-calendar"
              fluid
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="appointment-time" class="text-sm">Uhrzeit</label>
            <DatePicker
              v-model="appointmentTime"
              input-id="appointment-time"
              placeholder="Uhrzeit auswählen"
              time-only
              show-icon
              icon-display="input"
              icon="pi pi-clock"
              fluid
            />
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            fluid
            class="!h-[101px] resize-none"
            aria-label="Anmerkung"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between">
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
import Textarea from 'primevue/textarea'

const dialogVisible = ref(true)
const appointmentDate = ref<Date | null>(null)
const appointmentTime = ref<Date | null>(null)
const note = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])

function goBack() {
  dialogVisible.value = false
}

function goForward() {
  dialogVisible.value = false
}
</script>