<template>
  <div class="fixed inset-0 bg-black flex items-center justify-center font-sans">
    <div class="bg-white rounded-xl border border-[#E2E8F0] w-[512px] flex flex-col overflow-hidden">
      
      <!-- Header -->
      <div class="flex items-center justify-between px-4 h-16 border-b border-[#E2E8F0]">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <Avatar label="M" shape="circle" class="bg-[#E2E8F0] text-[#000000] w-7 h-7 text-sm" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-black">Max Mustermann</span>
              <span class="text-[10px] font-light text-black">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" class="bg-[#D1FAE5] text-[#000000] text-[12.25px] font-bold px-2 py-1 rounded-md" />
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-black w-8 h-8 p-0" />
      </div>

      <!-- Body -->
      <div class="flex flex-col px-4 pt-4 pb-6">
        
        <!-- Tabs -->
        <div class="flex border-b border-[#E2E8F0] mb-6">
          <div class="px-4 py-3 border-b-2 border-[#10B981] text-black font-bold text-sm cursor-pointer">
            Persönliche Daten
          </div>
          <div class="px-4 py-3 text-black font-bold text-sm cursor-pointer opacity-50">
            Einstellungen
          </div>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-6">
          
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm font-normal text-black">Name</label>
            <InputText id="name" v-model="name" class="w-full border-[#CBD5E1] rounded-md" />
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-normal text-black">E-Mail</label>
            <InputText id="email" v-model="email" type="email" class="w-full border-[#CBD5E1] rounded-md" />
          </div>

          <!-- Role Field -->
          <div class="flex flex-col gap-2">
            <label for="role" class="text-sm font-normal text-black">Rolle</label>
            <Select id="role" v-model="selectedRole" :options="roles" optionLabel="name" class="w-full border-[#10B981] rounded-md" />
          </div>

          <!-- Is Active Checkbox -->
          <div class="flex items-center gap-2 mt-2">
            <Checkbox v-model="isActive" inputId="isActive" :binary="true" class="text-[#10B981]" />
            <label for="isActive" class="text-sm font-normal text-black cursor-pointer">Ist aktiv</label>
          </div>

        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-3 px-4 py-3 border-t border-[#E2E8F0] bg-white">
        <Button label="Abbrechen" class="bg-[#F1F5F9] text-black border-none hover:bg-[#E2E8F0] font-medium text-sm px-4 py-2 rounded-md" />
        <Button label="Speichern" class="bg-[#10B981] text-white border-none hover:bg-[#059669] font-medium text-sm px-4 py-2 rounded-md" />
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
const isActive = ref(true);

const selectedRole = ref({ name: 'Manager', code: 'MGR' });
const roles = ref([
  { name: 'Manager', code: 'MGR' },
  { name: 'Mitarbeiter', code: 'EMP' },
  { name: 'Kunde', code: 'CUS' }
]);
</script>