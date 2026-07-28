<template>
  <div class="flex items-center gap-6">
    <div class="relative">
      <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      <InputText v-model="searchValue" class="pl-10 w-52" />
    </div>

    <InputNumber v-model="ageValue" showButtons buttonLayout="horizontal" placeholder="Alter eingeben" class="w-72">
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="infoVisible" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="r1" name="opts" value="opt1" />
      <label for="r1" class="text-sm cursor-pointer">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="r2" name="opts" value="opt2" />
      <label for="r2" class="text-sm cursor-pointer">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="r3" name="opts" value="opt3" disabled />
      <label for="r3" class="text-sm text-gray-400 cursor-default">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
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

const searchValue = ref('Benutzer1');
const ageValue = ref(null);
const infoVisible = ref(true);
const selectedOption = ref('opt2');
</script>