<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Profil bearbeiten"
    :style="{ width: '400px' }"
    :pt="{
      root: 'bg-white rounded-xl shadow-lg',
      header: 'pb-0 pt-6 px-6',
      title: 'text-xl font-semibold text-gray-800',
      content: 'p-6 flex flex-col gap-4',
      footer: 'pt-0 pb-6 px-6 flex justify-end gap-2',
    }"
  >
    <div class="flex flex-col gap-1.5">
      <label for="name" class="text-sm text-gray-700">Name</label>
      <InputText id="name" v-model="name" class="w-full" />
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="role" class="text-sm text-gray-700">Rolle</label>
      <Select
        id="role"
        v-model="selectedRole"
        :options="roles"
        optionLabel="label"
        class="w-full"
        :pt="{
          root: 'border-green-500',
          list: 'p-1',
          option: ({ context }) => ({
            class: [
              'rounded-md px-3 py-2 text-sm',
              context.selected ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50',
            ],
          }),
        }"
      />
    </div>

    <div class="flex items-center gap-2 mt-2">
      <Checkbox v-model="isActive" inputId="isActive" binary />
      <label for="isActive" class="text-sm text-gray-700">Ist aktiv</label>
    </div>

    <template #footer>
      <Button label="Abbrechen" variant="text" severity="secondary" @click="visible = false" />
      <Button label="Speichern" severity="success" @click="visible = false" />
    </template>
  </Dialog>
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

const selectedRole = ref({ label: 'Administrator', value: 'admin' });
const roles = ref([
  { label: 'Administrator', value: 'admin' },
  { label: 'Projektleiter', value: 'project_manager' },
  { label: 'Gast', value: 'guest' },
]);
</script>