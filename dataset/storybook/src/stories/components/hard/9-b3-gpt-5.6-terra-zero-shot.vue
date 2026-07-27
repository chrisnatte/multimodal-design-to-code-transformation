<template>
  <div class="flex h-[768px] w-[768px] items-center justify-center bg-black">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :closable="false"
      :draggable="false"
      appendTo="self"
      class="w-[384px]"
      :contentClass="'!p-0'"
      :style="{ width: '384px' }"
    >
      <template #header>
        <div class="flex w-full items-center justify-between gap-3 p-4">
          <div class="flex items-center gap-3">
            <Avatar label="M" size="large" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm font-normal">Dr. Mustermann</span>
              <span class="text-[10px] font-light">Allgemeinmedizin</span>
            </div>
          </div>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Dialog schließen"
            class="!h-7 !w-[35px]"
            @click="dialogVisible = false"
          />
        </div>
      </template>

      <Divider class="!m-0" />

      <div class="flex flex-col gap-2 px-[17.5px] pb-[17.5px]">
        <Breadcrumb :model="breadcrumbItems" class="!w-full !rounded-md !border-0 !bg-white !px-3.5 !py-3.5">
          <template #separator>
            <i class="pi pi-chevron-right text-xs" />
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="appointment-date" class="text-sm font-normal">Datum</label>
            <DatePicker
              id="appointment-date"
              v-model="appointmentDate"
              placeholder="Datum auswählen"
              showIcon
              iconDisplay="input"
              fluid
              inputClass="!h-[33px] !text-sm"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="appointment-time" class="text-sm font-normal">Uhrzeit</label>
            <DatePicker
              id="appointment-time"
              v-model="appointmentTime"
              timeOnly
              hourFormat="24"
              placeholder="Uhrzeit auswählen"
              showIcon
              iconDisplay="input"
              fluid
              inputClass="!h-[33px] !text-sm"
            />
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            fluid
            class="!h-[101px] !resize-none !text-sm"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-between gap-2 px-[17.5px] pb-[17.5px]">
          <Button
            label="Zurück"
            icon="pi pi-angle-left"
            severity="secondary"
            class="!h-[33px]"
          />
          <Button
            label="Weiter"
            icon="pi pi-angle-right"
            iconPos="right"
            class="!h-[33px]"
          />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Textarea from 'primevue/textarea'

const dialogVisible = ref(true)
const appointmentDate = ref(null)
const appointmentTime = ref(null)
const note = ref('')

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
])
</script>