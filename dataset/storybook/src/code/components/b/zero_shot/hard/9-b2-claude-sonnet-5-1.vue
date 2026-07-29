<template>
  <div class="flex items-center justify-center bg-black py-[280px]">
    <div class="w-96 bg-white rounded-xl border border-surface-200 flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" @click="onClose" />
        </div>
      </div>

      <Divider class="!my-0" />

      <!-- Content -->
      <div class="flex flex-col gap-4 p-[17.5px] items-center">
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="w-full" />

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label for="datum" class="text-sm">Datum</label>
            <DatePicker id="datum" v-model="date" placeholder="Datum auswählen" showIcon iconDisplay="input" fluid />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label for="uhrzeit" class="text-sm">Uhrzeit</label>
            <DatePicker id="uhrzeit" v-model="time" placeholder="Uhrzeit auswählen" timeOnly showIcon fluid>
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>

          <div class="flex flex-col gap-1 w-full">
            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-between items-center p-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" @click="onBack" />
        <Button label="Weiter" iconPos="right" icon="pi pi-angle-right" @click="onNext" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const date = ref(null);
const time = ref(null);
const note = ref('');

const breadcrumbHome = ref(null);
const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);

const onClose = () => {};
const onBack = () => {};
const onNext = () => {};
</script>