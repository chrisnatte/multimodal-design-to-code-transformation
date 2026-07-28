<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-[450px] overflow-hidden">
      <!-- Header -->
      <div class="flex items-center justify-between p-6 pb-5">
        <div class="flex items-center gap-4">
          <Avatar label="M" size="xlarge" shape="circle" class="bg-[#e0e7ff] text-[#1e3a8a] font-medium text-xl w-12 h-12" />
          <div class="flex flex-col">
            <h2 class="text-[1.1rem] font-medium text-gray-800 m-0 leading-tight">Dr. Mustermann</h2>
            <p class="text-sm text-gray-500 m-0 mt-0.5">Allgemeinmedizin</p>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-gray-400 hover:text-gray-600 w-8 h-8 p-0" />
      </div>

      <Divider class="m-0" />

      <!-- Content -->
      <div class="p-6 flex flex-col gap-6">
        <!-- Stepper -->
        <div class="flex items-center gap-3 text-[0.9rem] text-gray-500">
          <span>Arzt wählen</span>
          <i class="pi pi-angle-right text-gray-400 text-sm"></i>
          <span class="border border-[#10b981] text-[#10b981] px-3 py-1 rounded-full font-medium">Termin wählen</span>
          <i class="pi pi-angle-right text-gray-400 text-sm"></i>
          <span>Bestätigen</span>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Datum</label>
            <DatePicker 
              v-model="date" 
              showIcon 
              iconDisplay="input" 
              placeholder="Datum auswählen" 
              fluid 
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Uhrzeit</label>
            <DatePicker 
              v-model="time" 
              timeOnly 
              showIcon 
              iconDisplay="input" 
              placeholder="Uhrzeit auswählen" 
              fluid 
              class="w-full"
            >
              <template #inputicon>
                <i class="pi pi-clock text-gray-400" />
              </template>
            </DatePicker>
          </div>

          <div class="flex flex-col gap-2">
            <Textarea 
              v-model="notes" 
              rows="4" 
              placeholder="Anmerkung eingeben..." 
              class="w-full resize-none text-gray-700 placeholder:text-gray-400" 
              fluid
            />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="p-6 pt-2 flex items-center justify-between">
        <Button 
          label="Zurück" 
          icon="pi pi-angle-left" 
          class="bg-[#f1f5f9] text-[#475569] border-none hover:bg-[#e2e8f0] px-4 py-2 font-medium" 
        />
        <Button 
          label="Weiter" 
          icon="pi pi-angle-right" 
          iconPos="right" 
          class="bg-[#10b981] text-white border-none hover:bg-[#059669] px-4 py-2 font-medium" 
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

const date = ref(null);
const time = ref(null);
const notes = ref('');
</script>