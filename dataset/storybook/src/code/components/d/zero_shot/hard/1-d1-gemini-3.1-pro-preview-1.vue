<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black/50 p-[280px]">
    <div class="flex flex-col w-[384px] bg-white rounded-xl border border-slate-200">
      <!-- Header -->
      <div class="flex flex-row items-center justify-between p-[17.5px]">
        <span class="font-semibold text-[17.5px] text-slate-800">Profil bearbeiten</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Close" />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
        <!-- Name Input -->
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>

        <!-- Role Select -->
        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Select id="role" v-model="selectedRole" :options="roles" optionLabel="label" placeholder="Rolle auswählen" class="w-full" />
        </div>

        <!-- Is Active Checkbox -->
        <div class="flex items-center gap-2 mt-2">
          <Checkbox v-model="isActive" inputId="isActive" :binary="true" />
          <label for="isActive" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-row justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const name = ref('Max Mustmann');
const selectedRole = ref({ label: 'Administrator', value: 'admin' });
const isActive = ref(false);

const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'project_manager' },
  { label: 'Gast', value: 'guest' }
]);
</script>