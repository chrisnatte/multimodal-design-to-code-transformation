<template>
  <div class="min-h-screen bg-gray-500 flex items-center justify-center p-4">
    <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '24rem' }" class="rounded-xl">
      <template #header>
        <div class="flex items-center justify-between w-full">
          <span class="text-lg font-semibold text-surface-900">Profil bearbeiten</span>
          <Button icon="pi pi-times" variant="text" severity="secondary" aria-label="Close" @click="visible = false" />
        </div>
      </template>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label for="name" class="text-sm text-surface-700">Name</label>
          <InputText id="name" v-model="name" fluid />
        </div>

        <div class="flex flex-col gap-1">
          <label for="role" class="text-sm text-surface-700">Rolle</label>
          <Select id="role" v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Rolle auswählen" fluid />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" binary inputId="active" />
          <label for="active" class="text-sm text-surface-700 cursor-pointer">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" variant="text" @click="visible = false" />
          <Button label="Speichern" severity="success" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const visible = ref(true);
const name = ref('Max Mustmann');
const selectedRole = ref({ name: 'Administrator' });
const roles = ref([
  { name: 'Administrator' },
  { name: 'Projektleiter' },
  { name: 'Gast' }
]);
const isActive = ref(false);
</script>