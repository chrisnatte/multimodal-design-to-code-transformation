<template>
  <div class="flex flex-col items-center justify-center bg-black w-[768px] h-[768px]">
    <div v-if="visible" class="flex flex-col w-96 bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-surface-900">Dr. Mustermann</span>
            <span class="text-xs font-light text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" variant="text" @click="visible = false" />
      </div>

      <Divider type="solid" class="!m-0" />

      <!-- Content -->
      <div class="flex flex-col gap-2 px-4 pb-4">
        <!-- Breadcrumb -->
        <div class="flex items-center p-3.5 rounded-md w-full">
          <Breadcrumb :model="breadcrumbItems" class="bg-transparent border-0 p-0 w-full">
            <template #item="{ item }">
              <span :class="['text-sm', item.focused ? 'font-semibold text-primary' : 'text-surface-600']">{{ item.label }}</span>
            </template>
            <template #separator>
              <i class="pi pi-chevron-right text-xs text-surface-400"></i>
            </template>
          </Breadcrumb>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-700">Datum</label>
            <DatePicker v-model="date" showIcon iconDisplay="input" placeholder="Datum auswählen" fluid />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm text-surface-700">Uhrzeit</label>
            <DatePicker v-model="time" showIcon iconDisplay="input" timeOnly placeholder="Uhrzeit auswählen" fluid>
              <template #inputicon>
                <i class="pi pi-clock" />
              </template>
            </DatePicker>
          </div>
          <Textarea v-model="note" rows="5" placeholder="Anmerkung eingeben..." fluid class="resize-none" />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-between px-4 pb-4">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" />
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

const visible = ref(true);
const date = ref(null);
const time = ref(null);
const note = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', focused: false },
  { label: 'Termin wählen', focused: true },
  { label: 'Bestätigen', focused: false }
]);
</script>