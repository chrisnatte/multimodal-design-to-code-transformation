<template>
  <div class="flex flex-col items-center justify-center bg-black py-[280px] w-[768px] h-[768px]">
    <div class="flex flex-col w-96 bg-white rounded-xl border border-surface-200">
      <div class="flex flex-row items-center justify-between p-[17.5px] w-full">
        <span class="font-semibold text-[17.5px]">Profil bearbeiten</span>
        <div class="flex flex-col gap-[7px]">
          <Button icon="pi pi-times" variant="text" severity="secondary" aria-label="Schließen" />
        </div>
      </div>
      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px] w-full">
        <div class="flex flex-col gap-2 w-full">
          <label for="name" class="text-sm">Name</label>
          <InputText id="name" v-model="name" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label for="role" class="text-sm">Rolle</label>
          <Select id="role" v-model="role" :options="roles" optionLabel="name" placeholder="Rolle wählen" class="w-full" />
        </div>
        <div class="flex items-center gap-2 w-full">
          <Checkbox v-model="isActive" binary inputId="active" />
          <label for="active" class="text-sm">Ist aktiv</label>
        </div>
      </div>
      <div class="flex flex-row justify-end gap-[7px] px-[17.5px] pb-[17.5px] w-full">
        <Button label="Abbrechen" variant="text" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const name = ref('Max Mustermann');
const role = ref({ name: 'Administrator' });
const roles = ref([
  { name: 'Administrator' },
  { name: 'Projektleiter' },
  { name: 'Gast' }
]);
const isActive = ref(false);
</script>