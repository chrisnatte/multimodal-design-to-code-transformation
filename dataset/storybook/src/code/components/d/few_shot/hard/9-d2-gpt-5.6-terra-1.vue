<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    aria-label="Termin buchen"
    :style="{ width: '24rem' }"
    :breakpoints="{ '575px': 'calc(100vw - 2rem)' }"
    :pt="{
      root: 'overflow-hidden !rounded-xl',
      content: '!p-0',
      mask: '!bg-black/40',
    }"
  >
    <div class="flex flex-col">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="!bg-surface-100 !text-surface-700" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-700">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          variant="text"
          aria-label="Schließen"
          class="!h-7 !w-9"
          @click="visible = false"
        />
      </div>

      <Divider class="!m-0" />

      <div class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
        <Breadcrumb
          :model="steps"
          :pt="{
            root: '!border-0 !bg-transparent !p-[14px]',
            list: '!gap-[7px]',
            separator: '!mx-0',
          }"
        >
          <template #item="{ item, props }">
            <span
              v-bind="props.action"
              :class="[
                'whitespace-nowrap text-sm text-surface-500',
                item.current && 'rounded-md border border-primary px-1 text-primary',
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs text-surface-400" aria-hidden="true" />
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label for="appointment-date" class="text-sm text-surface-700">Datum</label>
            <div class="relative">
              <i class="pi pi-calendar pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-sm text-surface-400" aria-hidden="true" />
              <DatePicker
                v-model="appointmentDate"
                input-id="appointment-date"
                placeholder="Datum auswählen"
                fluid
                input-class="!pl-9"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="appointment-time" class="text-sm text-surface-700">Uhrzeit</label>
            <div class="relative">
              <i class="pi pi-clock pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-sm text-surface-400" aria-hidden="true" />
              <DatePicker
                v-model="appointmentTime"
                input-id="appointment-time"
                time-only
                placeholder="Uhrzeit auswählen"
                fluid
                input-class="!pl-9"
              />
            </div>
          </div>

          <Textarea
            v-model="note"
            aria-label="Anmerkung"
            placeholder="Anmerkung eingeben..."
            rows="4"
            fluid
            class="!h-[101px] !resize-none"
          />
        </div>
      </div>

      <div class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="goBack" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" @click="continueBooking" />
      </div>
    </div>
  </Dialog>
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

const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', current: true },
  { label: 'Bestätigen' },
])

function goBack() {
  visible.value = false
}

function continueBooking() {
  visible.value = false
}
</script>