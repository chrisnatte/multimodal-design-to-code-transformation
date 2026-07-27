<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black py-[280px]">
    <div class="w-[384px] bg-white rounded-xl border border-[#e2e8f0] flex flex-col">
      
      <!-- Header -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="!bg-[#e2e8f0] !text-surface-900 !text-[21px]" />
          <div class="flex flex-col">
            <span class="font-sans text-[14px] text-surface-900">Dr. Mustermann</span>
            <span class="font-sans font-light text-[10px] text-surface-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text severity="secondary" class="!w-7 !h-7 !p-0" />
      </div>

      <Divider class="!m-0 !border-[#e2e8f0]" />

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] gap-[7px]">
        
        <!-- Breadcrumb -->
        <div class="flex flex-row items-center bg-white rounded-md p-3.5">
          <Breadcrumb :model="breadcrumbItems" class="!p-0 !bg-transparent !border-none w-full">
            <template #item="{ item }">
              <div :class="['text-[14px] font-sans', item.active ? 'border border-surface-200 rounded-md px-1' : 'text-surface-700']">
                {{ item.label }}
              </div>
            </template>
            <template #separator>
              <i class="pi pi-chevron-right text-[14px] text-surface-500 mx-1"></i>
            </template>
          </Breadcrumb>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex flex-col gap-1">
            <label class="font-sans text-[14px] text-surface-900">Datum</label>
            <DatePicker 
              v-model="date" 
              placeholder="Datum auswählen" 
              showIcon 
              iconDisplay="input" 
              class="w-full" 
            />
          </div>
          
          <div class="flex flex-col gap-1">
            <label class="font-sans text-[14px] text-surface-900">Uhrzeit</label>
            <DatePicker 
              v-model="time" 
              timeOnly 
              placeholder="Uhrzeit auswählen" 
              showIcon 
              iconDisplay="input" 
              class="w-full"
            >
              <template #inputicon>
                <i class="pi pi-clock"></i>
              </template>
            </DatePicker>
          </div>
          
          <div class="flex flex-col gap-1">
            <Textarea 
              v-model="note" 
              placeholder="Anmerkung eingeben..." 
              rows="4" 
              class="w-full resize-none" 
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row items-center justify-between p-[17.5px]">
        <Button 
          label="Zurück" 
          icon="pi pi-angle-left" 
          severity="secondary" 
          class="!bg-[#f1f5f9] !text-surface-700 !border-none !font-medium" 
        />
        <Button 
          label="Weiter" 
          icon="pi pi-angle-right" 
          iconPos="right" 
          class="!bg-[#10b981] !text-white !border-none !font-medium" 
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

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);

const date = ref(null);
const time = ref(null);
const note = ref('');
</script>