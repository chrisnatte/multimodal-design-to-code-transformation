<template>
  <div class="flex items-center justify-center p-[280px] bg-black bg-opacity-50 min-h-screen">
    <div class="w-[384px] bg-white rounded-xl flex flex-col border border-gray-200 shadow-lg">
      
      <!-- Header -->
      <div class="flex flex-row justify-between items-center p-4">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-gray-200 text-gray-800 text-xl font-normal w-[42px] h-[42px]" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900 leading-tight">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-gray-500 leading-tight">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" />
        </div>
      </div>

      <Divider class="m-0" />

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] items-center gap-[7px]">
        <!-- Breadcrumb / Steps mockup -->
        <div class="flex flex-row items-center gap-[7px] w-full bg-white p-3.5 rounded-md">
          <span class="text-sm text-gray-500 font-normal">Arzt wählen</span>
          <i class="pi pi-chevron-right text-gray-400 text-[14px]"></i>
          <div class="px-1 border border-green-500 rounded-md py-0.5">
            <span class="text-sm text-green-500 font-normal">Termin wählen</span>
          </div>
          <i class="pi pi-chevron-right text-gray-400 text-[14px]"></i>
          <span class="text-sm text-gray-500 font-normal">Bestätigen</span>
        </div>

        <!-- Form fields -->
        <div class="flex flex-col w-full gap-4 mt-2">
          
          <div class="flex flex-col gap-1 w-full">
            <label for="date-picker" class="text-sm font-normal text-gray-700">Datum</label>
            <Calendar id="date-picker" v-model="selectedDate" placeholder="Datum auswählen" dateFormat="dd.mm.yy" icon="pi pi-calendar" showIcon class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full">
            <label for="time-picker" class="text-sm font-normal text-gray-700">Uhrzeit</label>
            <Calendar id="time-picker" v-model="selectedTime" timeOnly placeholder="Uhrzeit auswählen" icon="pi pi-clock" showIcon class="w-full" />
          </div>

          <div class="flex flex-col gap-1 w-full mt-2">
            <Textarea v-model="note" placeholder="Anmerkung eingeben..." rows="4" class="w-full" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-between items-center p-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="bg-gray-100 text-gray-800 border-none" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="bg-green-500 hover:bg-green-600 border-none text-white" />
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';

const selectedDate = ref(null);
const selectedTime = ref(null);
const note = ref('');
</script>