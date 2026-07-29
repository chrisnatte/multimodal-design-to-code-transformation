<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-400">
    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-gray-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" autocomplete="off" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-gray-700">Rolle</label>
          <Select
            id="role"
            v-model="selectedRole"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2 mt-2">
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="visible = false" />
      </template>
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
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
]);

const selectedRole = ref('administrator');
</script>