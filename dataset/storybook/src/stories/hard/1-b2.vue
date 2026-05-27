<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black py-72">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '32rem' }"
      class="rounded-xl"
    >
      <template #header>
        <div class="w-full flex items-center justify-between p-4">
          <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
          <Button
            icon="pi pi-times"
            severity="secondary"
            variant="text"
            aria-label="Schließen"
            @click="state.visible = false"
          />
        </div>
      </template>

      <div class="flex flex-col items-center gap-4 px-4 pb-4">
        <div class="w-full flex flex-col gap-2">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="state.name" />
        </div>

        <div class="w-full flex flex-col gap-2">
          <label for="role" class="text-sm">Rolle</label>
          <Select
            id="role"
            v-model="state.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div class="w-full flex items-center gap-2">
          <Checkbox id="active" v-model="state.active" binary />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="w-full flex justify-end gap-2 p-4">
          <Button label="Abbrechen" variant="text" severity="secondary" @click="state.visible = false" />
          <Button label="Speichern" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
});

const roles = [
  { label: 'Administator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
];
</script>