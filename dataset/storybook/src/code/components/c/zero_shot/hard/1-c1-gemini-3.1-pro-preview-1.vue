<template>
  <div class="min-h-screen flex items-center justify-center bg-[#9ca3af]">
    <div class="bg-white rounded-xl shadow-lg w-[400px] p-6 flex flex-col gap-6 font-sans">
      
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800 m-0">Profil bearbeiten</h2>
        <Button icon="pi pi-times" text rounded aria-label="Close" class="text-gray-500 hover:bg-gray-100 w-8 h-8 p-0" />
      </div>

      <!-- Form Body -->
      <div class="flex flex-col gap-4">
        
        <!-- Name Field -->
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full border-gray-300 rounded-md" />
        </div>

        <!-- Role Field -->
        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-gray-700">Rolle</label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            optionLabel="name" 
            class="w-full border-gray-300 rounded-md"
            placeholder="Select a role"
          />
        </div>

        <!-- Active Checkbox -->
        <div class="flex items-center gap-3 mt-1">
          <Checkbox v-model="isActive" inputId="active" :binary="true" class="border-gray-300" />
          <label for="active" class="text-sm text-gray-700 cursor-pointer">Ist aktiv</label>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex justify-end gap-3 mt-2">
        <Button label="Abbrechen" text class="text-gray-700 hover:bg-gray-100 font-medium px-4 py-2" />
        <Button label="Speichern" class="bg-[#10b981] border-[#10b981] hover:bg-[#059669] hover:border-[#059669] text-white font-medium px-4 py-2 rounded-md" />
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

const name = ref('Max Mustmann');

const selectedRole = ref({ name: 'Administrator', code: 'admin' });

const roles = ref([
  { name: 'Administator', code: 'admin' },
  { name: 'Projektleiter', code: 'pl' },
  { name: 'Gast', code: 'gast' }
]);

const isActive = ref(false);
</script>