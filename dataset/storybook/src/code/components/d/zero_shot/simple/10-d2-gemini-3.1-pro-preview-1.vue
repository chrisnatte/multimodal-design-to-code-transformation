<template>
  <div class="p-6 bg-white flex flex-col">
    <div class="flex flex-row items-center gap-6">
      
      <!-- Search Input -->
      <div class="relative flex items-center">
        <i class="pi pi-search absolute left-3 text-surface-400 dark:text-surface-500"></i>
        <InputText v-model="textValue" class="pl-10 w-[216px]" />
      </div>

      <!-- Age InputNumber -->
      <InputNumber 
        v-model="numValue" 
        showButtons 
        buttonLayout="horizontal" 
        placeholder="Alter eingeben" 
        class="w-[292px]"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <!-- Divider -->
      <Divider layout="vertical" type="dashed" class="!h-6 !m-0" />

      <!-- Toggle Switch -->
      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="switchValue" inputId="info-switch" />
        <label for="info-switch" class="text-sm text-surface-700 dark:text-surface-0">Informationen einblenden</label>
      </div>

      <!-- Divider -->
      <Divider layout="vertical" type="dashed" class="!h-6 !m-0" />

      <!-- Radio Buttons -->
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" inputId="opt1_1" value="val1" />
        <label for="opt1_1" class="text-sm text-surface-700 dark:text-surface-0">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" inputId="opt1_2" value="val2" />
        <label for="opt1_2" class="text-sm text-surface-700 dark:text-surface-0">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" inputId="opt1_3" value="val3" disabled />
        <label for="opt1_3" class="text-sm text-surface-700 dark:text-surface-0">Option1</label>
      </div>

      <!-- Submit Button -->
      <Button label="Suche" icon="pi pi-check" iconPos="right" />

    </div>
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

const textValue = ref('Benutzer1');
const numValue = ref(null);
const switchValue = ref(true);
const radioValue = ref('val2');
</script>