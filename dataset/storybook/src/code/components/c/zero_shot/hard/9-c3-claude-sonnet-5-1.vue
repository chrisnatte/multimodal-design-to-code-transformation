<template>
  <Dialog v-model:visible="visible" modal :closable="true" :draggable="false" :style="{ width: '25rem' }">
    <template #header>
      <div class="inline-flex items-center gap-3">
        <Avatar label="M" shape="circle" size="large" class="bg-surface-200 text-surface-700" />
        <div class="flex flex-col">
          <span class="font-semibold text-surface-900">Dr. Mustermann</span>
          <span class="text-sm text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <Divider class="!mt-0" />

    <div class="flex items-center gap-2 mb-6 text-sm">
      <span class="text-surface-500">Arzt wählen</span>
      <i class="pi pi-angle-right text-surface-400 text-xs"></i>
      <span class="border border-green-500 text-green-600 rounded-full px-3 py-1">Termin wählen</span>
      <i class="pi pi-angle-right text-surface-400 text-xs"></i>
      <span class="text-surface-500">Bestätigen</span>
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <label class="font-medium text-surface-900">Datum</label>
      <DatePicker
        v-model="date"
        showIcon
        iconDisplay="input"
        icon="pi pi-calendar"
        placeholder="Datum auswählen"
        class="w-full"
        fluid
      />
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <label class="font-medium text-surface-900">Uhrzeit</label>
      <DatePicker
        v-model="time"
        timeOnly
        showIcon
        iconDisplay="input"
        icon="pi pi-clock"
        placeholder="Uhrzeit auswählen"
        class="w-full"
        fluid
      />
    </div>

    <div class="flex flex-col gap-2 mb-2">
      <Textarea v-model="note" rows="4" placeholder="Anmerkung eingeben..." class="w-full" fluid />
    </div>

    <template #footer>
      <div class="flex justify-between w-full">
        <Button label="Zurück" icon="pi pi-chevron-left" severity="secondary" outlined />
        <Button label="Weiter" iconPos="right" icon="pi pi-chevron-right" severity="success" />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');
</script>