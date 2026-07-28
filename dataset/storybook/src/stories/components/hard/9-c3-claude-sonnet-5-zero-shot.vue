<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal :closable="true" :draggable="false" :style="{ width: '25rem' }">
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" class="bg-gray-200 text-gray-700" />
          <div class="flex flex-col">
            <span class="font-semibold text-surface-900">Dr. Mustermann</span>
            <span class="text-sm text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <Divider class="!mt-0 !mb-4" />

      <div class="flex items-center gap-2 mb-6 text-sm">
        <span class="text-surface-500">Arzt wählen</span>
        <i class="pi pi-angle-right text-surface-400 text-xs"></i>
        <span class="px-3 py-1 border border-green-500 rounded-full text-green-600">Termin wählen</span>
        <i class="pi pi-angle-right text-surface-400 text-xs"></i>
        <span class="text-surface-500">Bestätigen</span>
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label class="font-medium text-surface-900">Datum</label>
        <DatePicker
          v-model="date"
          showIcon
          iconDisplay="input"
          placeholder="Datum auswählen"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label class="font-medium text-surface-900">Uhrzeit</label>
        <DatePicker
          v-model="time"
          timeOnly
          showIcon
          icon="pi pi-clock"
          iconDisplay="input"
          placeholder="Uhrzeit auswählen"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <Textarea v-model="note" rows="4" placeholder="Anmerkung eingeben..." class="w-full" />
      </div>

      <template #footer>
        <div class="flex justify-between w-full">
          <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" outlined />
          <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" />
        </div>
      </template>
    </Dialog>
  </div>
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