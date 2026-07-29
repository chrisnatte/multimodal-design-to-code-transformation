<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-[384px] overflow-hidden rounded-xl',
      header: '!p-0',
      content: '!p-0',
      footer: '!p-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          aria-label="Schließen"
          @click="visible = false"
        />
      </div>
    </template>

    <Divider class="!my-0" />

    <div class="flex flex-col gap-4 px-[17px] pb-[17px]">
      <Breadcrumb :model="steps" class="!border-0 !bg-transparent !p-[14px]">
        <template #item="{ item }">
          <span
            class="whitespace-nowrap text-sm"
            :class="
              item.label === 'Termin wählen'
                ? 'rounded-md border border-primary px-1 text-primary'
                : 'text-surface-500'
            "
          >
            {{ item.label }}
          </span>
        </template>
        <template #separator>
          <i class="pi pi-chevron-right text-xs text-surface-400" />
        </template>
      </Breadcrumb>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="date" class="text-sm">Datum</label>
          <DatePicker
            v-model="date"
            input-id="date"
            placeholder="Datum auswählen"
            show-icon
            fluid
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="time" class="text-sm">Uhrzeit</label>
          <DatePicker
            v-model="time"
            input-id="time"
            placeholder="Uhrzeit auswählen"
            time-only
            show-icon
            fluid
          />
        </div>

        <Textarea
          v-model="note"
          placeholder="Anmerkung eingeben..."
          rows="4"
          class="w-full resize-none"
        />
      </div>
    </div>

    <template #footer>
      <div class="flex items-center justify-between px-[17px] pb-[17px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="primary" />
      </div>
    </template>
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
const date = ref<Date | null>(null)
const time = ref<Date | null>(null)
const note = ref('')

const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' },
])
</script>