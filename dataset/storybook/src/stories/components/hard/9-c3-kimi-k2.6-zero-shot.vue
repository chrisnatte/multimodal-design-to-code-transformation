<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '28rem' }" class="rounded-xl">
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" class="bg-gray-200 text-gray-700" />
        <div class="flex flex-col">
          <span class="font-semibold text-gray-900">Dr. Mustermann</span>
          <span class="text-sm text-gray-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex flex-col gap-6 pt-2">
      <div class="flex justify-center">
        <Breadcrumb :model="steps" class="bg-transparent border-none p-0">
          <template #item="{ item }">
            <span :class="['text-sm px-3 py-1 rounded-full', item.active ? 'border border-green-500 text-green-600' : 'text-gray-500']">
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-gray-400 text-xs mx-2"></i>
          </template>
        </Breadcrumb>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Datum</label>
          <DatePicker v-model="date" showIcon icon="pi pi-calendar" iconDisplay="input" placeholder="Datum auswählen" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Uhrzeit</label>
          <DatePicker v-model="time" timeOnly showIcon icon="pi pi-clock" iconDisplay="input" placeholder="Uhrzeit auswählen" class="w-full" />
        </div>

        <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
      </div>

      <div class="flex justify-between items-center pt-2">
        <Button label="Zurück" icon="pi pi-chevron-left" iconPos="left" variant="outlined" severity="secondary" @click="onBack" />
        <Button label="Weiter" icon="pi pi-chevron-right" iconPos="right" severity="success" @click="onNext" />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');

const steps = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);

const onBack = () => {
  // Handle back navigation
};

const onNext = () => {
  // Handle next navigation
};
</script>