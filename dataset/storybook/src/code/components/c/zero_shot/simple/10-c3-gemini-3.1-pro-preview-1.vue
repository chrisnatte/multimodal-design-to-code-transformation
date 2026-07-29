<template>
  <div class="flex flex-row items-center gap-6 p-4 bg-white rounded-lg border border-gray-200 w-max">
    
    <!-- Search Input -->
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-gray-400"></i>
      <InputText v-model="searchQuery" placeholder="Benutzer1" class="pl-10 w-48" />
    </div>

    <!-- Age Input -->
    <InputNumber 
      v-model="age" 
      placeholder="Alter eingeben" 
      showButtons 
      buttonLayout="horizontal" 
      class="w-48"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- Divider -->
    <Divider layout="vertical" class="!mx-0 !h-8" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-gray-700 text-sm font-medium">Informationen einblenden</span>
    </div>

    <!-- Divider -->
    <Divider layout="vertical" class="!mx-0 !h-8" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" value="1" />
        <label for="opt1" class="text-gray-700 text-sm cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" value="2" />
        <label for="opt2" class="text-gray-700 text-sm cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" value="3" disabled />
        <label for="opt3" class="text-gray-400 text-sm">Option1</label>
      </div>
    </div>

    <!-- Submit Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" class="ml-2" />

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

const searchQuery = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('2');
</script>