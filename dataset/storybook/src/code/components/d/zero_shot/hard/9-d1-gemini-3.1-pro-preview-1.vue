<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black/50 p-4">
    <div class="flex flex-col w-[384px] bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-slate-700 text-xl" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-slate-900">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-slate-500">Allgemeinmedizin</span>
          </div>
        </div>
        <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" />
      </div>

      <Divider class="!m-0 !border-slate-200" />

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] gap-[7px]">
        <!-- Breadcrumb -->
        <div class="flex flex-row items-center gap-[7px] p-3.5 bg-white rounded-md">
          <span class="text-sm font-normal text-slate-500">Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs text-slate-400"></i>
          <div class="flex flex-row items-center px-1 py-0.5 border border-emerald-500 rounded-md">
            <span class="text-sm font-normal text-emerald-500">Termin wählen</span>
          </div>
          <i class="pi pi-chevron-right text-xs text-slate-400"></i>
          <span class="text-sm font-normal text-slate-500">Bestätigen</span>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-normal text-slate-700">Datum</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-calendar" />
              <InputText v-model="date" placeholder="Datum auswählen" class="w-full" />
            </IconField>
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-normal text-slate-700">Uhrzeit</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-clock" />
              <InputText v-model="time" placeholder="Uhrzeit auswählen" class="w-full" />
            </IconField>
          </div>

          <div class="flex flex-col gap-1">
            <Textarea v-model="notes" placeholder="Anmerkung eingeben..." rows="4" class="w-full resize-none" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row items-center justify-between p-[17.5px]">
        <Button label="Zurück" icon="pi pi-angle-left" severity="secondary" class="bg-slate-100 text-slate-700 border-none" />
        <Button label="Weiter" icon="pi pi-angle-right" iconPos="right" class="bg-emerald-500 text-white border-none hover:bg-emerald-600" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Textarea from 'primevue/textarea';

const date = ref('');
const time = ref('');
const notes = ref('');
</script>