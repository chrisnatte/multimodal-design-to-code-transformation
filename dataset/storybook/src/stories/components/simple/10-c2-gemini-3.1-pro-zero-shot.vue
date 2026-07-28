<template>
  <div class="flex items-center gap-6 p-4 bg-white w-full overflow-x-auto">
    
    <!-- Search Input -->
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-surface-400 dark:text-surface-500"></i>
      <InputText 
        v-model="username" 
        placeholder="Benutzer1" 
        class="pl-10 w-56" 
      />
    </div>

    <!-- Number Input with Horizontal Buttons -->
    <InputNumber 
      v-model="age" 
      placeholder="Alter eingeben" 
      showButtons 
      buttonLayout="horizontal" 
      class="w-56"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- Vertical Divider -->
    <Divider layout="vertical" class="!mx-0 !h-8" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" inputId="info-toggle" />
      <label for="info-toggle" class="text-surface-700 dark:text-surface-0 cursor-pointer select-none">
        Informationen einblenden
      </label>
    </div>

    <!-- Vertical Divider -->
    <Divider layout="vertical" class="!mx-0 !h-8" />

    <!-- Radio Button Group -->
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="1" />
        <label for="opt1" class="text-surface-700 dark:text-surface-0 cursor-pointer select-none">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="2" />
        <label for="opt2" class="text-surface-700 dark:text-surface-0 cursor-pointer select-none">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="3" disabled />
        <label for="opt3" class="text-surface-400 dark:text-surface-500 select-none">Option1</label>
      </div>
    </div>

    <!-- Submit Button -->
    <Button 
      label="Suche" 
      icon="pi pi-check" 
      iconPos="right" 
      severity="success" 
      class="ml-auto"
    />

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

const username = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('2');
</script>