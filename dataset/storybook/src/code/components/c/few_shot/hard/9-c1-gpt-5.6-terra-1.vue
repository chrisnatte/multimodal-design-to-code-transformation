<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-[384px] overflow-hidden rounded-xl',
      header: '!hidden',
      content: '!p-0',
      mask: 'bg-black/40',
    }"
  >
    <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4">
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" class="!h-11 !w-11 !bg-slate-100 !text-slate-700" />
        <div class="flex flex-col">
          <span class="text-sm font-medium text-slate-700">Dr. Mustermann</span>
          <span class="text-[10px] text-slate-500">Allgemeinmedizin</span>
        </div>
      </div>
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        aria-label="Schließen"
        class="!h-7 !w-7"
        @click="visible = false"
      />
    </div>

    <div class="flex flex-col gap-4 px-4 py-5">
      <div class="flex items-center gap-2 whitespace-nowrap text-sm text-slate-500">
        <Button label="Arzt wählen" severity="secondary" text class="!p-0 !text-sm !font-normal" />
        <i class="pi pi-angle-right text-xs"></i>
        <Button
          label="Termin wählen"
          severity="primary"
          outlined
          rounded
          class="!h-5 !px-2 !py-0 !text-sm !font-normal"
        />
        <i class="pi pi-angle-right text-xs"></i>
        <Button label="Bestätigen" severity="secondary" text class="!p-0 !text-sm !font-normal" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="date" class="text-sm text-slate-700">Datum</label>
        <DatePicker
          v-model="date"
          input-id="date"
          placeholder="Datum auswählen"
          show-icon
          icon-display="input"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="time" class="text-sm text-slate-700">Uhrzeit</label>
        <DatePicker
          v-model="time"
          input-id="time"
          placeholder="Uhrzeit auswählen"
          time-only
          show-icon
          icon-display="input"
          class="w-full"
        />
      </div>

      <Textarea
        v-model="note"
        placeholder="Anmerkung eingeben..."
        rows="4"
        class="w-full resize-none"
        aria-label="Anmerkung"
      />

      <div class="flex items-center justify-between pt-0.5">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" icon-pos="right" severity="primary" />
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import Textarea from 'primevue/textarea'

const visible = ref(true)
const date = ref<Date | null>(null)
const time = ref<Date | null>(null)
const note = ref('')
</script>