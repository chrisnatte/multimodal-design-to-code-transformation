<template>
  <div class="flex justify-center items-center min-h-screen bg-black py-[280px]">
    <Dialog v-model:visible="visible" modal :closable="true" :draggable="false" class="w-96" :style="{ width: '384px' }">
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-sm">Dr. Mustermann</span>
            <span class="text-xs font-light">Allgemeinmedizin</span>
          </div>
        </div>
      </template>

      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px] items-center">
        <Breadcrumb :home="home" :model="items" class="w-full" />

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Datum auswählen" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="time" timeOnly showIcon icon="pi pi-clock" placeholder="Uhrzeit auswählen" class="w-full" />
          </div>

          <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full" />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between w-full px-[17.5px] pb-[17.5px]">
          <Button label="Zurück" severity="secondary" icon="pi pi-angle-left" @click="visible = false" />
          <Button label="Weiter" severity="primary" iconPos="right" icon="pi pi-angle-right" @click="visible = false" />
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
</script>