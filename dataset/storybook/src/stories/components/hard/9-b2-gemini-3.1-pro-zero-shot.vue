<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black py-[280px]">
    <div class="flex flex-col w-[384px] bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-slate-800" />
          <div class="flex flex-col">
            <span class="font-sans text-sm font-normal text-slate-900">Dr. Mustermann</span>
            <span class="font-sans text-[10px] font-light text-slate-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" variant="text" rounded aria-label="Close" />
      </div>

      <!-- Divider -->
      <Divider class="!m-0" />

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] gap-[7px] items-center">
        <!-- Breadcrumb -->
        <div class="w-full bg-white rounded-md">
          <Breadcrumb :model="items" class="!p-0 !bg-transparent">
            <template #item="{ item }">
              <span class="font-sans text-sm font-normal text-slate-700">{{ item.label }}</span>
            </template>
            <template #separator>
              <i class="pi pi-chevron-right text-xs text-slate-400"></i>
            </template>
          </Breadcrumb>
        </div>

        <!-- Form -->
        <div class="flex flex-col w-full gap-4 mt-2">
          <!-- DatePicker 1 -->
          <div class="flex flex-col gap-1">
            <label class="font-sans text-sm font-normal text-slate-700">Datum</label>
            <DatePicker v-model="date" placeholder="Datum auswählen" showIcon iconDisplay="input" fluid />
          </div>

          <!-- DatePicker 2 -->
          <div class="flex flex-col gap-1">
            <label class="font-sans text-sm font-normal text-slate-700">Uhrzeit</label>
            <DatePicker v-model="time" timeOnly placeholder="Uhrzeit auswählen" showIcon iconDisplay="input" fluid>
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>

          <!-- Textarea -->
          <div class="flex flex-col gap-1">
            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" fluid style="resize: none" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row items-center justify-between p-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="!bg-slate-100 !text-slate-800 !border-none" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" severity="success" class="!bg-emerald-500 !border-none" />
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

const items = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen' },
  { label: 'Bestätigen' }
]);

const date = ref(null);
const time = ref(null);
const note = ref('');
</script>