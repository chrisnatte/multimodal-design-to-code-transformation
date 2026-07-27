<template>
  <div class="flex flex-row items-center gap-6">
    <div class="relative w-54">
      <i class="pi pi-search absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      <InputText v-model="inputTextValue" placeholder="Placeholder" class="w-full py-2 pl-9 pr-2.5" />
    </div>

    <InputNumber v-model="inputNumberValue" placeholder="Alter eingeben" showButtons buttonLayout="horizontal" class="w-[292px]">
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex flex-row items-center gap-4">
      <ToggleSwitch v-model="toggleChecked" inputId="toggle1" />
      <label for="toggle1" class="text-sm">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="option1" value="Option1" />
      <label for="option1">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="option2" value="Option2" />
      <label for="option2">Option2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="option3" value="Option3" disabled />
      <label for="option3">Option3</label>
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

const inputTextValue = ref('Benutzer1');
const inputNumberValue = ref(null);
const toggleChecked = ref(true);
const radioValue = ref('Option2');
</script>