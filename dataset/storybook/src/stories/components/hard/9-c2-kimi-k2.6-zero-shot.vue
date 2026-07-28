<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '28rem' }" :closable="false">
    <template #header>
      <div class="flex items-center gap-3 w-full">
        <Avatar label="M" shape="circle" style="background-color: #f3f4f6; color: #4b5563" />
        <div class="flex flex-col">
          <span class="font-semibold text-sm text-gray-900">Dr. Mustermann</span>
          <span class="text-xs text-gray-500">Allgemeinmedizin</span>
        </div>
        <div class="flex-1" />
        <Button icon="pi pi-times" text rounded class="text-gray-500" aria-label="Schließen" @click="visible = false" />
      </div>
    </template>

    <div class="flex flex-col gap-4">
      <Breadcrumb :model="steps" class="!bg-transparent !border-0 !p-0">
        <template #item="{ item }">
          <span :class="['text-sm', item.active ? 'px-3 py-0.5 rounded-full border border-emerald-500 text-emerald-600' : 'text-gray-500']">{{ item.label }}</span>
        </template>
        <template #separator>
          <span class="text-gray-400 text-sm mx-1">></span>
        </template>
      </Breadcrumb>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-700">Datum</label>
        <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Datum auswählen" fluid />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-700">Uhrzeit</label>
        <DatePicker v-model="time" timeOnly showIcon iconDisplay="input" placeholder="Uhrzeit auswählen" fluid>
          <template #inputicon="slotProps">
            <i class="pi pi-clock" @click="slotProps.clickCallback" />
          </template>
        </DatePicker>
      </div>

      <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid />

      <div class="flex justify-between items-center pt-2">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="visible = false" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" @click="visible = false" />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');
const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
]);
</script>