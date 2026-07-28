<template>
  <div class="flex items-center gap-4 p-4">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="searchText" />
    </span>

    <InputNumber v-model="age" showButtons buttonLayout="horizontal" placeholder="Alter eingeben" class="w-48" />

    <Divider layout="vertical" class="h-10" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="infoVisible" inputId="info-toggle" />
      <label for="info-toggle">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="h-10" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" value="opt1" inputId="opt1" />
        <label for="opt1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" value="opt2" inputId="opt2" />
        <label for="opt2">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" value="opt3" inputId="opt3" disabled />
        <label for="opt3" class="text-gray-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const searchText = ref('Benutzer1');
const age = ref(null);
const infoVisible = ref(true);
const selectedOption = ref('opt2');
</script>