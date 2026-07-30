<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[480px] overflow-hidden">
      
      <!-- Header -->
      <div class="flex items-center justify-between p-6 pb-4">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="bg-slate-100 text-slate-600 font-semibold text-lg" size="large" />
          <div class="flex flex-col">
            <span class="text-gray-800 font-medium">Max Mustermann</span>
            <span class="text-gray-500 text-sm">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Badge value="Aktiv" class="bg-emerald-100 text-emerald-700 border-none font-semibold px-2 py-1 rounded-md text-xs" />
          <Button icon="pi pi-times" text rounded class="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-8 h-8 p-0" />
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex px-6 border-b border-gray-200">
        <div class="py-3 px-1 border-b-2 border-emerald-500 text-emerald-600 font-medium text-sm mr-6 cursor-pointer">
          Persönliche Daten
        </div>
        <div class="py-3 px-1 text-gray-500 font-medium text-sm cursor-pointer hover:text-gray-700">
          Einstellungen
        </div>
      </div>

      <!-- Form Content -->
      <div class="p-6 flex flex-col gap-5">
        
        <!-- Name -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-700">Name</label>
          <InputText v-model="name" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <!-- E-Mail -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-700">E-Mail</label>
          <InputText v-model="email" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <!-- Rolle -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-700">Rolle</label>
          <!-- Styled to match the active/focused state shown in the mockup -->
          <Select 
            v-model="selectedRole" 
            :options="roles" 
            class="w-full border-emerald-500 shadow-sm rounded-md" 
            panelClass="border border-gray-200 shadow-md rounded-md mt-1"
          />
        </div>

        <!-- Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="!border-emerald-500" />
          <label for="isActive" class="text-sm text-gray-700 cursor-pointer">Ist aktiv</label>
        </div>

      </div>

      <!-- Footer -->
      <div class="px-6 pb-6 pt-2 flex justify-end gap-3">
        <Button label="Abbrechen" class="bg-gray-100 text-gray-700 border-none hover:bg-gray-200 font-medium px-4 py-2 rounded-md" />
        <Button label="Speichern" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 font-medium px-4 py-2 rounded-md" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
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