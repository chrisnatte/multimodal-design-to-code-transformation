<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '25rem' }">
      <div class="flex flex-col gap-1 mb-4">
        <label for="name" class="font-normal text-surface-700">Name</label>
        <InputText id="name" v-model="name" class="w-full" autocomplete="off" />
      </div>
      <div class="flex flex-col gap-1 mb-6">
        <label for="role" class="font-normal text-surface-700">Rolle</label>
        <Select
          id="role"
          v-model="selectedRole"
          :options="roles"
          optionLabel="label"
          placeholder="Rolle auswählen"
          class="w-full"
          checkmark
          :highlightOnSelect="true"
        />
      </div>
      <div class="flex items-center gap-2 mb-6">
        <Checkbox v-model="isActive" binary inputId="isActive" />
        <label for="isActive" class="text-surface-700">Ist aktiv</label>
      </div>
      <div class="flex justify-end gap-4">
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const visible = ref(true);
const name = ref('Max Mustmann');
const isActive = ref(false);

const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'projectleader' },
  { label: 'Gast', value: 'guest' }
]);

const selectedRole = ref(roles.value[0]);
</script>