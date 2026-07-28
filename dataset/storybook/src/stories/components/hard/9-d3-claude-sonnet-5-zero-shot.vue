<template>
  <div class="w-full h-full flex items-center justify-center bg-black py-[280px]">
    <div class="bg-white rounded-xl border border-surface-200 w-96">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-surface-200" />
          <div class="flex flex-col">
            <span class="text-sm text-surface-900">Dr. Mustermann</span>
            <span class="text-[10px] text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text severity="secondary" @click="onClose" />
      </div>

      <Divider class="!m-0" />

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] py-[17.5px]">
        <Breadcrumb :home="null" :model="breadcrumbItems" class="!border !border-surface-0 !bg-white !p-3.5">
          <template #item="{ item }">
            <span
              :class="[
                'text-sm px-1 rounded-md',
                item.active ? 'border border-primary-500 text-primary-500' : 'text-surface-500'
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-surface-400 text-xs"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-900">Datum</label>
            <DatePicker
              v-model="datum"
              showIcon
              iconDisplay="input"
              icon="pi pi-calendar"
              placeholder="Datum auswählen"
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-900">Uhrzeit</label>
            <DatePicker
              v-model="uhrzeit"
              timeOnly
              showIcon
              iconDisplay="input"
              icon="pi pi-clock"
              placeholder="Uhrzeit auswählen"
              class="w-full"
              inputClass="w-full"
            />
          </div>

          <Textarea
            v-model="anmerkung"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="w-full"
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
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

const datum = ref(null);
const uhrzeit = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);

const onClose = () => {
  // close dialog logic
};

const onBack = () => {
  // navigate back logic
};

const onNext = () => {
  // navigate next logic
};
</script>