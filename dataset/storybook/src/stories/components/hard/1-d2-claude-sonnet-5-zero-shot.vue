<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <Button label="Show" @click="visible = true" />

    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :style="{ width: '24rem' }"
      :closable="true"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm">Rolle</label>
          <Select
            id="role"
            v-model="role"
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
        <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
        <Button label="Speichern" severity="success" @click="onSave" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const visible = ref(true);
const name = ref('Max Mustmann');
const role = ref('Administrator');
const isActive = ref(false);

const roles = ref([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]);

const onSave = () => {
  visible.value = false;
};
</script>