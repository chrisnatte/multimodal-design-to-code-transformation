<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal :closable="false" :draggable="false" :style="{ width: '25rem' }" class="p-0">
      <template #container>
        <div class="p-5">
          <div class="flex items-center justify-between pb-4 border-b border-gray-200">
            <div class="flex items-center gap-3">
              <Avatar label="M" shape="circle" size="large" style="background-color: #e5e7eb; color: #374151" />
              <div class="flex flex-col">
                <span class="font-semibold text-gray-800">Dr. Mustermann</span>
                <span class="text-sm text-gray-500">Allgemeinmedizin</span>
              </div>
            </div>
            <Button icon="pi pi-times" text rounded severity="secondary" @click="visible = false" aria-label="Close" />
          </div>

          <div class="py-4">
            <Breadcrumb :model="breadcrumbItems" class="!bg-transparent !border-none !p-0">
              <template #item="{ item }">
                <span :class="item.active ? 'text-primary border border-primary rounded-full px-3 py-1 text-sm' : 'text-gray-400 text-sm'">
                  {{ item.label }}
                </span>
              </template>
              <template #separator>
                <i class="pi pi-angle-right text-gray-300 text-xs"></i>
              </template>
            </Breadcrumb>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="datum" class="text-gray-700">Datum</label>
              <DatePicker
                id="datum"
                v-model="datum"
                placeholder="Datum auswählen"
                showIcon
                iconDisplay="input"
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="uhrzeit" class="text-gray-700">Uhrzeit</label>
              <DatePicker
                id="uhrzeit"
                v-model="uhrzeit"
                timeOnly
                placeholder="Uhrzeit auswählen"
                showIcon
                iconDisplay="input"
                fluid
              >
                <template #inputicon="slotProps">
                  <i class="pi pi-clock" @click="slotProps.clickCallback" />
                </template>
              </DatePicker>
            </div>

            <Textarea v-model="anmerkung" rows="4" placeholder="Anmerkung eingeben..." class="w-full" />
          </div>

          <div class="flex justify-between items-center pt-5">
            <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" text @click="onBack" />
            <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" @click="onNext" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
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
const datum = ref(null);
const uhrzeit = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);

const onBack = () => {
  console.log('Zurück geklickt');
};

const onNext = () => {
  console.log('Weiter geklickt', { datum: datum.value, uhrzeit: uhrzeit.value, anmerkung: anmerkung.value });
};
</script>