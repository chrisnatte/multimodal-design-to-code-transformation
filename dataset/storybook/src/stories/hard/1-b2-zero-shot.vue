<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center justify-center py-72">
    <Dialog v-model:visible="state.visible" modal :closable="false" :draggable="false" :style="{ width: '32rem' }">
      <template #header>
        <div class="w-full flex items-center justify-between p-4">
          <span class="text-base font-semibold">Profil bearbeiten</span>
          <Button icon="pi pi-times" severity="secondary" variant="text" aria-label="Schließen" @click="state.visible = false" />
        </div>
      </template>

      <div class="flex flex-col items-center gap-4 px-4 pb-4 w-full">
        <div class="flex flex-col gap-2 w-full">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="state.name" />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="rolle" class="text-sm">Rolle</label>
          <Select
            id="rolle"
            v-model="state.role"
            :options="roleOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Rolle auswählen"
          />
        </div>

        <div class="flex items-center gap-2 w-full">
          <Checkbox id="active" v-model="state.active" binary />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="w-full flex justify-end gap-2 px-4 pb-4">
          <Button label="Abbrechen" variant="text" severity="secondary" @click="state.visible = false" />
          <Button label="Speichern" @click="state.visible = false" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
});

const roleOptions = [
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
];
</script>