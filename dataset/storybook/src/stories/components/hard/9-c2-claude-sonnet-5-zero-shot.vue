<template>
  <div class="flex items-center justify-center min-h-screen bg-neutral-500">
    <Dialog v-model:visible="visible" modal :draggable="false" :closable="false" :style="{ width: '25rem' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" size="large" style="background-color: #e0e0e0; color: #424242" />
            <div class="flex flex-col">
              <span class="font-semibold text-surface-900">Dr. Mustermann</span>
              <span class="text-sm text-surface-500">Allgemeinmedizin</span>
            </div>
          </div>
        </div>
      </template>
      <template #closeicon>
        <i class="pi pi-times"></i>
      </template>

      <div class="flex flex-col gap-4">
        <Breadcrumb :home="home" :model="items" class="!p-0 !bg-transparent !border-none" />

        <div class="flex flex-col gap-2">
          <label class="text-surface-700 font-medium">Datum</label>
          <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Datum auswählen" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-surface-700 font-medium">Uhrzeit</label>
          <DatePicker v-model="time" timeOnly showIcon iconDisplay="input" placeholder="Uhrzeit auswählen" fluid>
            <template #inputicon="slotProps">
              <i class="pi pi-clock" @click="slotProps.clickCallback" />
            </template>
          </DatePicker>
        </div>

        <Textarea v-model="note" rows="4" placeholder="Anmerkung eingeben..." class="w-full" style="resize: none" />
      </div>

      <template #footer>
        <div class="flex justify-between w-full">
          <Button label="Zurück" icon="pi pi-chevron-left" severity="secondary" @click="onBack" />
          <Button label="Weiter" icon="pi pi-chevron-right" iconPos="right" severity="success" @click="onNext" />
        </div>
      </template>
    </Dialog>
  </div>
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

const home = ref({ label: 'Arzt wählen' });
const items = ref([
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);

const onBack = () => {
  visible.value = false;
};

const onNext = () => {
  visible.value = false;
};
</script>