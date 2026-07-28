<template>
  <div class="min-h-screen bg-[#9ca3af] flex items-center justify-center p-4 font-sans">
    <div class="bg-white rounded-xl shadow-lg w-full max-w-[400px] p-6 flex flex-col gap-5">
      
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-slate-800 m-0">Profil bearbeiten</h2>
        <i class="pi pi-times text-slate-500 cursor-pointer hover:text-slate-700"></i>
      </div>

      <!-- Form Fields -->
      <div class="flex flex-col gap-4">
        
        <!-- Name Input -->
        <div class="flex flex-col gap-1.5">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1.5">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Select 
            id="role" 
            v-model="selectedRole" 
            :options="roles" 
            optionLabel="name" 
            class="w-full"
            panelClass="!p-1"
          />
        </div>

        <!-- Active Checkbox -->
        <div class="flex items-center gap-2 mt-1">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
          <label for="isActive" class="text-sm text-slate-700 cursor-pointer">Ist aktiv</label>
        </div>

      </div>

      <!-- Footer Actions -->
      <div class="flex justify-end gap-2 mt-4">
        <Button label="Abbrechen" text class="!text-slate-700 hover:!bg-slate-100" />
        <Button label="Speichern" class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669]" />
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
  { name: 'Administrator', code: 'admin' },
  { name: 'Projektleiter', code: 'pl' },
  { name: 'Gast', code: 'guest' }
]);

const isActive = ref(false);
</script>