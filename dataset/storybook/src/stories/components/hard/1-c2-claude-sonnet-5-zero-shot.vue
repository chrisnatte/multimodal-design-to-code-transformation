<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog v-model:visible="visible" modal header="Profil bearbeiten" :style="{ width: '25rem' }" :closable="true">
      <div class="flex flex-col gap-2 mb-4">
        <label for="name" class="font-normal text-gray-700">Name</label>
        <InputText id="name" v-model="name" class="w-full" />
      </div>

      <div class="flex flex-col gap-2 mb-4">
        <label for="role" class="font-normal text-gray-700">Rolle</label>
        <Select id="role" v-model="selectedRole" :options="roles" optionLabel="label" optionValue="value" class="w-full" />
      </div>

      <div class="flex items-center gap-2 mb-6">
        <Checkbox v-model="isActive" binary inputId="isActive" />
        <label for="isActive" class="text-gray-700">Ist aktiv</label>
      </div>

      <div class="flex justify-end gap-4">
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="onSave" />
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
  { label: 'Administator', value: 'admin' },
  { label: 'Projektleiter', value: 'projectlead' },
  { label: 'Gast', value: 'guest' }
]);
const selectedRole = ref('admin');

const onSave = () => {
  visible.value = false;
};
</script>