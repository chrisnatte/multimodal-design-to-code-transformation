<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black/50 p-4">
    <div class="flex flex-col w-[512px] bg-white rounded-xl border border-surface-200">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between p-[17.5px] gap-4">
        <div class="flex flex-row items-center justify-between flex-grow gap-16">
          <div class="flex flex-row items-center gap-3">
            <Avatar label="M" shape="circle" class="bg-surface-100 text-surface-900 w-7 h-7 text-sm" />
            <div class="flex flex-col">
              <span class="text-sm font-normal text-surface-900">Max Mustermann</span>
              <span class="text-[10px] font-light text-surface-900">Manager</span>
            </div>
          </div>
          <Tag value="Aktiv" severity="success" class="bg-green-100 text-green-800 font-bold text-xs px-2 py-1" />
        </div>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" class="w-7 h-7 p-0" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col p-[17.5px] gap-[7px]">
        <div class="flex flex-col w-full">
          <!-- Tabs -->
          <div class="flex flex-row w-full border-b border-surface-200 bg-white">
            <div class="flex items-center justify-center px-4 py-3 border-b-2 border-black text-black font-bold text-sm cursor-pointer">
              Persönliche Daten
            </div>
            <div class="flex items-center justify-center px-4 py-3 text-surface-500 font-bold text-sm cursor-pointer hover:text-surface-700">
              Einstellungen
            </div>
          </div>

          <!-- Tab Panels -->
          <div class="flex flex-col w-full bg-white pt-3 pb-4 px-1">
            <div class="flex flex-col w-full gap-4">
              <!-- Name Input -->
              <div class="flex flex-col gap-1">
                <label class="text-sm font-normal text-surface-900">Name</label>
                <InputText v-model="name" placeholder="Name eingeben" class="w-full" />
              </div>

              <!-- Email Input -->
              <div class="flex flex-col gap-1">
                <label class="text-sm font-normal text-surface-900">E-Mail</label>
                <InputText v-model="email" placeholder="E-Mail eingeben" class="w-full" />
              </div>

              <!-- Role Select -->
              <div class="flex flex-col gap-1">
                <label class="text-sm font-normal text-surface-900">Rolle</label>
                <Select v-model="selectedRole" :options="roles" optionLabel="label" placeholder="Rolle auswählen" class="w-full" />
              </div>

              <!-- Active Checkbox -->
              <div class="flex items-center gap-2 mt-2">
                <Checkbox v-model="isActive" :binary="true" inputId="isActive" />
                <label for="isActive" class="text-sm font-normal text-surface-900 cursor-pointer">Ist aktiv</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end p-[17.5px] gap-[7px]">
        <Button label="Abbrechen" severity="secondary" class="bg-surface-100 text-surface-900 border-none hover:bg-surface-200" />
        <Button label="Speichern" class="bg-green-500 border-none hover:bg-green-600" />
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

const name = ref('Max Mustmann');
const email = ref('max@example.com');
const selectedRole = ref({ label: 'Manager', value: 'manager' });
const isActive = ref(true);

const roles = ref([
  { label: 'Manager', value: 'manager' },
  { label: 'Mitarbeiter', value: 'mitarbeiter' },
  { label: 'Kunde', value: 'kunde' }
]);
</script>