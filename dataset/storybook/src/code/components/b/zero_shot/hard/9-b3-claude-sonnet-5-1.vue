<template>
  <div class="flex justify-center items-center bg-black py-[280px] w-full h-full">
    <Dialog v-model:visible="visible" modal :closable="true" :draggable="false" :style="{ width: '384px' }">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <Avatar label="M" size="large" shape="circle" />
            <div class="flex flex-col">
              <span class="text-sm">Dr. Mustermann</span>
              <span class="text-[10px] font-light">Allgemeinmedizin</span>
            </div>
          </div>
        </div>
      </template>

      <div class="flex flex-col gap-4 px-[17.5px] py-[17.5px] items-center">
        <Breadcrumb :model="breadcrumbItems" class="w-full" />

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="datum" showIcon iconDisplay="input" placeholder="Datum auswählen" class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="uhrzeit" timeOnly showIcon icon="pi pi-clock" placeholder="Uhrzeit auswählen" class="w-full" />
          </div>

          <Textarea v-model="anmerkung" placeholder="Anmerkung eingeben..." rows="4" class="w-full" />
        </div>
      </div>

      <template #footer>
        <div class="flex justify-between items-center w-full px-[17.5px]">
          <Button label="Zurück" severity="secondary" icon="pi pi-angle-left" @click="onBack" />
          <Button label="Weiter" severity="success" iconPos="right" icon="pi pi-angle-right" @click="onNext" />
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

const datum = ref(null);
const uhrzeit = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);

const onBack = () => {
  visible.value = false;
};

const onNext = () => {
  // handle next step
};
</script>