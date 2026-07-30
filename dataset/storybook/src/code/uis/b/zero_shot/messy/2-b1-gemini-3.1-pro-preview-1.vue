<template>
  <div class="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
    <!-- Main Card Container -->
    <div class="bg-white rounded-xl border border-[#E2E8F0] w-full max-w-[512px] flex flex-col overflow-hidden">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-4 border-b border-[#E2E8F0]">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-[#E2E8F0] text-gray-900 w-7 h-7 text-sm font-normal" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-gray-900">Max Mustermann</span>
              <span class="text-[10px] font-light text-gray-900">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="bg-[#D1FAE5] text-gray-900 text-[12.25px] font-bold px-2 py-1 rounded-md" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="w-7 h-7 text-gray-500 p-0" />
      </div>

      <!-- Body -->
      <div class="flex flex-col">
        <!-- Tabs -->
        <div class="flex px-4 border-b border-[#E2E8F0]">
          <div class="py-3 px-4 border-b-2 border-[#10B981] text-gray-900 font-bold text-sm cursor-pointer">
            Persönliche Daten
          </div>
          <div class="py-3 px-4 text-gray-900 font-bold text-sm cursor-pointer opacity-50">
            Einstellungen
          </div>
        </div>

        <!-- Form Content -->
        <div class="flex flex-col gap-6 p-4 pt-6">
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-normal text-gray-900">Name</label>
            <InputText v-model="name" class="w-full border-[#CBD5E1] rounded-md shadow-none" />
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-normal text-gray-900">E-Mail</label>
            <InputText v-model="email" class="w-full border-[#CBD5E1] rounded-md shadow-none" />
          </div>

          <!-- Role Field -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-normal text-gray-900">Rolle</label>
            <Select v-model="selectedRole" :options="roles" optionLabel="name" class="w-full border-[#10B981] rounded-md shadow-none" />
          </div>

          <!-- Checkbox Field -->
          <div class="flex items-center gap-2 mt-2">
            <Checkbox v-model="isActive" :binary="true" inputId="isActive" class="border-[#10B981]" />
            <label for="isActive" class="text-sm font-normal text-gray-900 cursor-pointer">Ist aktiv</label>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-3 px-4 py-4 border-t border-[#E2E8F0]">
        <Button label="Abbrechen" class="bg-[#F1F5F9] text-gray-900 border-none hover:bg-gray-200 font-medium text-sm px-4 py-2 rounded-md" />
        <Button label="Speichern" class="bg-[#10B981] text-white border-none hover:bg-[#0ea5e9] font-medium text-sm px-4 py-2 rounded-md" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';

const name = ref('Max Mustermann');
const email = ref('max@example.com');
const selectedRole = ref({ name: 'Manager', code: 'manager' });
const roles = ref([
  { name: 'Manager', code: 'manager' },
  { name: 'Mitarbeiter', code: 'mitarbeiter' },
  { name: 'Kunde', code: 'kunde' }
]);
const isActive = ref(true);
</script>