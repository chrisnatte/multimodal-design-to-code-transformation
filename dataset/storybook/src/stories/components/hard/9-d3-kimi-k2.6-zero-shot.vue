<template>
  <div class="min-h-screen bg-neutral-400 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl border border-gray-200 shadow-xl flex flex-col w-96">
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" size="large" class="bg-slate-200 text-slate-700" />
          <div class="flex flex-col">
            <span class="text-sm font-medium text-slate-800">Dr. Mustermann</span>
            <span class="text-xs text-slate-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text severity="secondary" />
      </div>

      <Divider />

      <!-- Content -->
      <div class="flex flex-col px-4 pb-4">
        <Breadcrumb :model="breadcrumbItems" class="p-0 bg-transparent border-none shadow-none mb-4">
          <template #item="{ item }">
            <span
              :class="[
                'text-sm',
                item.active
                  ? 'text-emerald-600 border border-emerald-500 rounded-md px-2 py-0.5'
                  : 'text-slate-500'
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs text-slate-400 mx-2"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <label for="date" class="text-sm text-slate-700">Datum</label>
            <DatePicker
              v-model="date"
              inputId="date"
              showIcon
              iconDisplay="input"
              icon="pi pi-calendar"
              placeholder="Datum auswählen"
              fluid
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="time" class="text-sm text-slate-700">Uhrzeit</label>
            <DatePicker
              v-model="time"
              inputId="time"
              showIcon
              iconDisplay="input"
              icon="pi pi-clock"
              timeOnly
              placeholder="Uhrzeit auswählen"
              fluid
            />
          </div>

          <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid class="resize-none" />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between px-4 pb-4">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          iconPos="right"
          severity="primary"
          class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600 !text-white"
        />
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

const breadcrumbItems = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
]);
</script>