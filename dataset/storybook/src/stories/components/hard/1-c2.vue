<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-4">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '24rem' }"
      contentClass="pt-0"
    >
      <template #header>
        <div class="w-full flex items-center justify-between">
          <span class="text-2xl font-semibold text-slate-700">Profil bearbeiten</span>
          <Button
            icon="pi pi-times"
            variant="text"
            severity="secondary"
            rounded
            aria-label="Schließen"
            @click="state.visible = false"
          />
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-lg text-slate-700">Name</label>
          <InputText id="name" v-model="state.name" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="rolle" class="text-lg text-slate-700">Rolle</label>
          <Select
            id="rolle"
            v-model="state.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            placeholder="Rolle wählen"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="state.active" inputId="active" binary />
          <label for="active" class="text-lg text-slate-700">Ist aktiv</label>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <Button
            label="Abbrechen"
            variant="text"
            severity="secondary"
            @click="state.visible = false"
          />
          <Button
            label="Speichern"
            severity="success"
            @click="state.visible = false"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
});

const roles = [
  { label: 'Administrator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
];
</script>