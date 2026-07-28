<template>
  <div class="flex items-center gap-6">
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-gray-400 pointer-events-none" />
      <InputText v-model="benutzer" class="pl-9 w-[216px]" />
    </div>

    <div class="w-[292px]">
      <InputNumber v-model="alter" :showButtons="true" buttonLayout="horizontal" placeholder="Alter eingeben" class="w-full">
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
      </InputNumber>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="infoEinblenden" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option1" inputId="opt1" />
      <label for="opt1" class="cursor-pointer text-sm">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option2" inputId="opt2" />
      <label for="opt2" class="cursor-pointer text-sm">Option2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option3" :disabled="true" inputId="opt3" />
      <label for="opt3" class="cursor-pointer text-sm text-gray-400">Option3</label>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const benutzer = ref('Benutzer1');
const alter = ref(null);
const infoEinblenden = ref(true);
const radioValue = ref('Option2');
</script>