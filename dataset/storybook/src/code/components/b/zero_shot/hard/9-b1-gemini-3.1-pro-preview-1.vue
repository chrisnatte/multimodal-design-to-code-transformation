<template>
  <div class="flex flex-col items-center justify-center bg-black py-[280px] w-[768px] h-[768px]">
    <div class="flex flex-col bg-white rounded-xl border border-[#e2e8f0] w-[384px]">
      <div class="flex flex-row justify-between items-center p-4 w-full">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-[#e2e8f0] text-[21px] font-normal" />
          <div class="flex flex-col">
            <span class="text-[14px] font-normal text-black">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-black">Allgemeinmedizin</span>
          </div>
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded />
        </div>
      </div>
      
      <Divider class="m-0 border-[#e2e8f0]" />
      
      <div class="flex flex-col items-center gap-[7px] p-[17.5px] w-full">
        <div class="flex flex-row items-center gap-[7px] p-3.5 bg-white rounded-md w-full">
          <span class="text-[14px] font-normal text-black">Arzt wählen</span>
          <i class="pi pi-chevron-right text-[14px]"></i>
          <div class="flex flex-row items-center gap-[7px] px-1 rounded-md border border-white">
            <span class="text-[14px] font-normal text-black">Termin wählen</span>
          </div>
          <i class="pi pi-chevron-right text-[14px]"></i>
          <span class="text-[14px] font-normal text-black">Bestätigen</span>
        </div>
        
        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col w-full">
            <label class="text-[14px] font-normal text-black mb-1">Datum</label>
            <DatePicker v-model="date" placeholder="Datum auswählen" showIcon iconDisplay="input" class="w-full" />
          </div>
          
          <div class="flex flex-col w-full">
            <label class="text-[14px] font-normal text-black mb-1">Uhrzeit</label>
            <DatePicker v-model="time" timeOnly placeholder="Uhrzeit auswählen" showIcon iconDisplay="input" class="w-full" />
          </div>
          
          <div class="flex flex-col w-full">
            <Textarea v-model="notes" placeholder="Anmerkung eingeben..." rows="4" class="w-full" />
          </div>
        </div>
      </div>
      
      <div class="flex flex-row justify-between p-[17.5px] w-full">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="bg-[#f1f5f9]" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="bg-[#10b981] border-none" />
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