<template>
  <div class="w-full min-h-screen bg-black flex flex-col items-center justify-center py-[280px]">
    <div class="w-96 bg-white rounded-[12px] border border-[#E2E8F0] flex flex-col">
      <div class="flex flex-row items-center justify-between w-full p-4">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm font-normal">Dr. Mustermann</span>
            <span class="text-[10px] font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text />
        </div>
      </div>

      <Divider layout="horizontal" type="solid" class="w-full" />

      <div class="flex flex-col items-stretch justify-center gap-[7px] w-full px-[17.5px] pb-[17.5px]">
        <div class="flex items-center w-full rounded-md bg-white p-3.5">
          <Breadcrumb :model="breadcrumbItems" />
        </div>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Datum auswählen" fluid />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="time" showIcon icon="pi pi-clock" iconDisplay="input" placeholder="Uhrzeit auswählen" fluid />
          </div>

          <Textarea v-model="anmerkung" placeholder="Anmerkung eingeben..." rows="4" fluid />
        </div>
      </div>

      <div class="flex flex-row items-center justify-between w-full px-[17.5px] pb-[17.5px] gap-[7px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';
import Textarea from 'primevue/textarea';

const date = ref(null);
const time = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);
</script>