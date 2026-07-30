<template>
  <div class="min-h-screen bg-[#9CA3AF] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[512px] flex flex-col overflow-hidden border border-gray-200">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-[#E2E8F0] text-[#475569] font-medium text-sm w-7 h-7" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-gray-900">Max Mustermann</span>
            <span class="text-[10px] font-light text-gray-500 leading-tight">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Tag value="Aktiv" class="bg-[#D1FAE5] text-[#047857] font-bold text-[12px] px-2 py-0.5 rounded-md border-none" />
          <Button icon="pi pi-times" text rounded aria-label="Close" class="text-gray-500 hover:bg-gray-100 w-7 h-7 p-0" />
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex px-5 border-b border-gray-200">
        <div class="py-3 pr-6 border-b-2 border-[#10B981] text-sm font-bold text-gray-900 cursor-pointer">
          Persönliche Daten
        </div>
        <div class="py-3 px-6 text-sm font-bold text-gray-900 cursor-pointer hover:text-gray-700">
          Einstellungen
        </div>
      </div>

      <!-- Form Body -->
      <div class="p-5 flex flex-col gap-5">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-800">Name</label>
          <InputText v-model="name" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-800">E-Mail</label>
          <InputText v-model="email" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-800">Rolle</label>
          <Select v-model="selectedRole" :options="roles" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        
        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="border-gray-300" />
          <label for="isActive" class="text-sm text-gray-800 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-5 py-4 flex justify-end gap-3">
        <Button label="Abbrechen" class="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-gray-800 border-none font-medium px-4 py-2 rounded-md text-sm" />
        <Button label="Speichern" class="bg-[#10B981] hover:bg-[#059669] text-white border-none font-medium px-4 py-2 rounded-md text-sm" />
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const selectedRole = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>