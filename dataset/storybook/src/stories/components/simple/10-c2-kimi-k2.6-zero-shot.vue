<template>
  <div class="flex items-center gap-4 px-4 py-2">
    <div class="relative">
      <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
      <InputText v-model="benutzer" class="pl-10 w-48" />
    </div>

    <InputNumber v-model="alter" placeholder="Alter eingeben" showButtons buttonLayout="horizontal" class="w-56">
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" value="opt1" inputId="opt1" />
        <label for="opt1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" value="opt2" inputId="opt2" />
        <label for="opt2" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" value="opt3" inputId="opt3" disabled />
        <label for="opt3" class="text-sm text-gray-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const benutzer = ref('Benutzer1');
const alter = ref(null);
const showInfo = ref(true);
const option = ref('opt2');
</script>