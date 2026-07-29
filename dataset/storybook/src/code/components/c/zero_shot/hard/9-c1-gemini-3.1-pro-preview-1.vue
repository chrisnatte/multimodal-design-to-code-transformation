<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[400px] p-6 flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-gray-100 pb-5">
        <div class="flex items-center gap-3">
          <Avatar label="M" class="bg-[#eef2ff] text-[#3730a3] text-xl font-medium" shape="circle" size="large" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium text-base">Dr. Mustermann</span>
            <span class="text-gray-500 text-sm">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded class="text-gray-400 hover:text-gray-600 w-8 h-8 p-0" />
      </div>

      <!-- Breadcrumb / Steps -->
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <span>Arzt wählen</span>
        <i class="pi pi-angle-right text-xs text-gray-400"></i>
        <span class="border border-[#10b981] text-[#10b981] rounded-full px-3 py-1">Termin wählen</span>
        <i class="pi pi-angle-right text-xs text-gray-400"></i>
        <span>Bestätigen</span>
      </div>

      <!-- Form Fields -->
      <div class="flex flex-col gap-4">
        
        <!-- Datum -->
        <div class="flex flex-col gap-1.5">
          <label class="text-gray-700 text-sm font-medium">Datum</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-calendar text-gray-400" />
            <InputText v-model="date" placeholder="Datum auswählen" class="w-full border-gray-200 rounded-md" />
          </IconField>
        </div>

        <!-- Uhrzeit -->
        <div class="flex flex-col gap-1.5">
          <label class="text-gray-700 text-sm font-medium">Uhrzeit</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-clock text-gray-400" />
            <InputText v-model="time" placeholder="Uhrzeit auswählen" class="w-full border-gray-200 rounded-md" />
          </IconField>
        </div>

        <!-- Anmerkung -->
        <div class="flex flex-col gap-1.5">
          <Textarea v-model="notes" placeholder="Anmerkung eingeben..." rows="4" class="w-full border-gray-200 rounded-md resize-none" />
        </div>

      </div>

      <!-- Footer Buttons -->
      <div class="flex items-center justify-between pt-2">
        <Button label="Zurück" icon="pi pi-chevron-left" class="bg-[#f1f5f9] text-[#475569] border-none hover:bg-[#e2e8f0] px-4 py-2 text-sm font-medium rounded-md" />
        <Button label="Weiter" icon="pi pi-chevron-right" iconPos="right" class="bg-[#10b981] text-white border-none hover:bg-[#059669] px-4 py-2 text-sm font-medium rounded-md" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const date = ref('');
const time = ref('');
const notes = ref('');
</script>