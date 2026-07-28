<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[420px] p-6 flex flex-col gap-6">
      
      <!-- Header -->
      <div class="flex items-start justify-between border-b border-gray-100 pb-4">
        <div class="flex items-center gap-4">
          <Avatar label="M" class="bg-[#eef2f6] text-[#475569] text-xl font-medium" size="large" shape="circle" />
          <div class="flex flex-col">
            <span class="text-[#334155] font-medium text-lg leading-tight">Dr. Mustermann</span>
            <span class="text-[#64748b] text-sm">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded class="text-gray-400 hover:text-gray-600 w-8 h-8 p-0" />
      </div>

      <!-- Steps -->
      <div class="flex items-center gap-2 text-sm text-[#64748b]">
        <span>Arzt wählen</span>
        <i class="pi pi-angle-right text-xs"></i>
        <span class="border border-[#10b981] text-[#10b981] rounded-full px-3 py-1">Termin wählen</span>
        <i class="pi pi-angle-right text-xs"></i>
        <span>Bestätigen</span>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-1.5">
          <label class="text-[#475569] text-sm">Datum</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-calendar text-gray-400" />
            <InputText v-model="date" placeholder="Datum auswählen" class="w-full border-gray-200" />
          </IconField>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-[#475569] text-sm">Uhrzeit</label>
          <IconField iconPosition="left">
            <InputIcon class="pi pi-clock text-gray-400" />
            <InputText v-model="time" placeholder="Uhrzeit auswählen" class="w-full border-gray-200" />
          </IconField>
        </div>

        <div class="flex flex-col gap-1.5">
          <Textarea v-model="notes" placeholder="Anmerkung eingeben..." rows="4" class="w-full border-gray-200 resize-none" />
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-2">
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
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const date = ref('');
const time = ref('');
const notes = ref('');
</script>