<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-4">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[512px] overflow-hidden border border-gray-200">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-600">
            M
          </div>
          <div>
            <div class="text-sm text-gray-900">Max Mustermann</div>
            <div class="text-[10px] text-gray-500 font-light">Manager</div>
          </div>
          <div class="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-md">
            Aktiv
          </div>
        </div>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-gray-500" />
      </div>

      <!-- Tabs -->
      <div class="flex border-b border-gray-200 px-4">
        <button class="px-4 py-3 text-sm font-bold text-green-600 border-b-2 border-green-600">
          Persönliche Daten
        </button>
        <button class="px-4 py-3 text-sm font-bold text-gray-500 hover:text-gray-700">
          Einstellungen
        </button>
      </div>

      <!-- Form Content -->
      <div class="p-4 space-y-4">
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="email" class="text-sm text-gray-700">E-Mail</label>
          <InputText id="email" v-model="email" class="w-full" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-gray-700">Rolle</label>
          <Dropdown id="role" v-model="selectedRole" :options="roles" optionLabel="name" class="w-full" />
        </div>

        <div class="flex items-center gap-2 pt-2">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
          <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-2 p-4 border-t border-gray-100">
        <Button label="Abbrechen" severity="secondary" text class="bg-gray-100 hover:bg-gray-200 text-gray-700" />
        <Button label="Speichern" class="bg-green-500 hover:bg-green-600 border-none" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
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