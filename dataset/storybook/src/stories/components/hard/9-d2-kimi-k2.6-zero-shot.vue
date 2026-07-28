<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl border border-slate-200 shadow-lg w-96 flex flex-col">
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-900">Dr. Mustermann</span>
            <span class="text-xs text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" aria-label="Schließen" />
      </div>

      <Divider />

      <div class="flex flex-col gap-4 p-5">
        <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span>Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs"></i>
          <span class="border border-gray-300 rounded-md px-2 py-0.5 text-gray-700">Termin wählen</span>
          <i class="pi pi-chevron-right text-xs"></i>
          <span>Bestätigen</span>
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Datum</label>
          <DatePicker v-model="date" showIcon iconDisplay="input" icon="pi pi-calendar" placeholder="Datum auswählen" class="w-full" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm text-gray-700">Uhrzeit</label>
          <DatePicker v-model="time" showIcon iconDisplay="input" timeOnly icon="pi pi-clock" placeholder="Uhrzeit auswählen" class="w-full" />
        </div>

        <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
      </div>

      <div class="flex items-center justify-between px-5 pb-5">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const date = ref(null);
const time = ref(null);
const note = ref('');
</script>