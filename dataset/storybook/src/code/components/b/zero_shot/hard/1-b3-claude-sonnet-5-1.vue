<template>
  <div class="flex justify-center items-center min-h-screen bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      :modal="false"
      :draggable="false"
      header="Profil bearbeiten"
      :closable="true"
      :style="{ width: '384px' }"
      class="rounded-xl"
    >
      <template #header>
        <span class="font-semibold text-lg">Profil bearbeiten</span>
      </template>

      <div class="flex flex-col gap-4 p-2">
        <div class="flex flex-col gap-2 w-full">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="role" class="text-sm">Rolle</label>
          <Select
            id="role"
            v-model="selectedRole"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            placeholder="Rolle wählen"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="isActive" binary inputId="isActive" />
          <label for="isActive" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" text severity="secondary" @click="dialogVisible = false" />
          <Button label="Speichern" severity="success" @click="onSave" />
        </div>
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

const dialogVisible = ref(true);
const name = ref('Max Mustmann');
const selectedRole = ref('administrator');
const isActive = ref(false);

const roles = ref([
  { label: 'Administrator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
]);

function onSave() {
  dialogVisible.value = false;
}
</script>