<template>
  <div class="min-h-screen bg-black/50 flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl w-full max-w-[384px] border border-slate-200 shadow-lg flex flex-col">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-slate-700 text-xl font-normal" />
          <div class="flex flex-col">
            <span class="text-sm text-slate-900">Dr. Mustermann</span>
            <span class="text-[10px] text-slate-500 font-light">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="w-7 h-7 p-0 text-slate-500 hover:bg-slate-100" aria-label="Close" />
      </div>

      <Divider class="!m-0 !border-slate-200" />

      <!-- Content -->
      <div class="p-4 flex flex-col gap-4">
        
        <!-- Custom Breadcrumb -->
        <div class="flex items-center justify-center gap-2 text-sm py-2">
          <span class="text-slate-500">Arzt wählen</span>
          <i class="pi pi-angle-right text-slate-400 text-xs"></i>
          <span class="border border-emerald-500 text-emerald-600 rounded-full px-3 py-1">Termin wählen</span>
          <i class="pi pi-angle-right text-slate-400 text-xs"></i>
          <span class="text-slate-500">Bestätigen</span>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-sm text-slate-700">Datum</label>
            <DatePicker 
              v-model="date" 
              placeholder="Datum auswählen" 
              showIcon 
              iconDisplay="input" 
              class="w-full"
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <label class="text-sm text-slate-700">Uhrzeit</label>
            <DatePicker 
              v-model="time" 
              timeOnly 
              placeholder="Uhrzeit auswählen" 
              showIcon 
              iconDisplay="input" 
              class="w-full"
            >
              <template #inputicon>
                <i class="pi pi-clock" />
              </template>
            </DatePicker>
          </div>

          <Textarea 
            v-model="notes" 
            placeholder="Anmerkung eingeben..." 
            rows="4" 
            class="w-full resize-none mt-1" 
          />
        </div>
      </div>

      <!-- Footer -->
      <div class="p-4 flex items-center justify-between pt-2">
        <Button 
          label="Zurück" 
          icon="pi pi-angle-left" 
          class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-4 py-2 font-medium" 
        />
        <Button 
          label="Weiter" 
          icon="pi pi-angle-right" 
          iconPos="right" 
          class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-4 py-2 font-medium" 
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