<template>
  <div class="flex flex-row items-center gap-6">
    <InputText
      v-model="searchText"
      placeholder="Benutzer1"
      class="w-[216px]"
    >
      <template #prefix>
        <i class="pi pi-search mr-2"></i>
      </template>
    </InputText>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      class="w-[292px]"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-6 mx-0" />

    <div class="flex flex-row items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6 mx-0" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
      <label for="option1" class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
      <label for="option2" class="text-sm font-normal font-sans text-surface-700 dark:text-surface-0">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" value="Option3" disabled />
      <label for="option3" class="text-sm font-normal font-sans text-surface-400 dark:text-surface-500">Option1</label>
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

const searchText = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>