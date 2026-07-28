<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-[420px] overflow-hidden">
      
      <!-- Header -->
      <div class="p-5 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <Avatar label="M" shape="circle" size="large" class="!bg-slate-100 !text-slate-600 !text-xl" />
          <div class="flex flex-col">
            <span class="font-semibold text-gray-800 text-lg leading-tight">Dr. Mustermann</span>
            <span class="text-sm text-gray-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" variant="text" rounded class="!text-gray-400 hover:!bg-gray-100" aria-label="Close" />
      </div>

      <Divider class="!m-0 !border-gray-100" />

      <!-- Content -->
      <div class="p-6 flex flex-col gap-6">
        
        <!-- Stepper / Breadcrumb -->
        <div class="flex items-center justify-center gap-3 text-sm text-gray-500">
          <span>Arzt wählen</span>
          <i class="pi pi-angle-right text-xs text-gray-400"></i>
          <span class="px-3 py-1 rounded-full border border-[#10b981] text-[#10b981]">Termin wählen</span>
          <i class="pi pi-angle-right text-xs text-gray-400"></i>
          <span>Bestätigen</span>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-5">
          
          <!-- Date Picker -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Datum</label>
            <DatePicker 
              v-model="selectedDate" 
              showIcon 
              iconDisplay="input" 
              placeholder="Datum auswählen" 
              fluid 
              class="w-full"
            />
          </div>

          <!-- Time Picker -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Uhrzeit</label>
            <DatePicker 
              v-model="selectedTime" 
              timeOnly 
              showIcon 
              iconDisplay="input" 
              placeholder="Uhrzeit auswählen" 
              fluid 
              class="w-full"
            >
              <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
              </template>
            </DatePicker>
          </div>

          <!-- Notes Textarea -->
          <Textarea 
            v-model="notes" 
            rows="4" 
            placeholder="Anmerkung eingeben..." 
            class="w-full resize-none" 
          />
          
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 pt-2 flex justify-between items-center">
        <Button 
          label="Zurück" 
          icon="pi pi-chevron-left" 
          class="!bg-slate-50 !text-slate-700 !border-none hover:!bg-slate-100 font-medium px-4 py-2" 
        />
        <Button 
          label="Weiter" 
          icon="pi pi-chevron-right" 
          iconPos="right" 
          severity="success" 
          class="!bg-[#10b981] !border-none hover:!bg-[#059669] font-medium px-4 py-2" 
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
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const selectedDate = ref(null);
const selectedTime = ref(null);
const notes = ref('');
</script>