<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-4 font-sans">
    <div class="w-full max-w-[512px] bg-white rounded-xl border border-slate-200 flex flex-col overflow-hidden">
      
      <!-- Header -->
      <div class="flex justify-between items-center p-4">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-slate-200 text-slate-800 font-medium" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-slate-900">Max Mustermann</span>
              <span class="text-[10px] font-light text-slate-900">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="bg-emerald-100 text-emerald-800 font-bold text-xs px-2 py-1 rounded-md" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-slate-800 w-8 h-8 p-0" />
      </div>

      <!-- Tabs -->
      <div class="flex px-4 border-b border-slate-200">
        <div class="px-4 py-3 border-b-2 border-emerald-500 text-sm font-bold text-slate-900 cursor-pointer">
          Persönliche Daten
        </div>
        <div class="px-4 py-3 text-sm font-bold text-slate-900 cursor-pointer">
          Einstellungen
        </div>
      </div>

      <!-- Form Content -->
      <div class="p-4 flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Name</label>
          <InputText v-model="name" class="w-full border-slate-300" />
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">E-Mail</label>
          <InputText v-model="email" class="w-full border-slate-300" />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Rolle</label>
          <Dropdown v-model="selectedRole" :options="roles" class="w-full border-emerald-500" />
        </div>

        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
          <label for="isActive" class="text-sm text-slate-900 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 p-4 pt-2">
        <Button label="Abbrechen" class="bg-slate-100 text-slate-900 border-none hover:bg-slate-200 font-medium px-4 py-2" />
        <Button label="Speichern" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 font-medium px-4 py-2" />
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
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';

const name = ref('Max Mustmann');
const email = ref('max@example.com');
const selectedRole = ref('Manager');
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
const isActive = ref(true);
</script>