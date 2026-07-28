<template>
  <div class="flex flex-row items-center gap-6 p-4 bg-white">
    
    <!-- Username Input -->
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-surface-400"></i>
      <InputText 
        v-model="username" 
        placeholder="Benutzer1" 
        class="pl-10 w-[216px]" 
      />
    </div>

    <!-- Age Input Number -->
    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      class="w-[292px]"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- First Divider -->
    <Divider layout="vertical" type="dashed" class="!h-6 !my-0 !border-surface-300" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="infoVisible" inputId="infoToggle" />
      <label for="infoToggle" class="text-sm cursor-pointer whitespace-nowrap text-surface-700">Informationen einblenden</label>
    </div>

    <!-- Second Divider -->
    <Divider layout="vertical" type="dashed" class="!h-6 !my-0 !border-surface-300" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" value="opt1" />
        <label for="opt1" class="text-sm cursor-pointer text-surface-700">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" value="opt2" />
        <label for="opt2" class="text-sm cursor-pointer text-surface-700">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" value="opt3" disabled />
        <label for="opt3" class="text-sm text-surface-400">Option1</label>
      </div>
    </div>

    <!-- Search Button -->
    <Button 
      label="Suche" 
      icon="pi pi-check" 
      iconPos="right" 
      class="w-[86px]"
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

// Form State
const username = ref('Benutzer1');
const age = ref(null);
const infoVisible = ref(true);
const selectedOption = ref('opt2');
</script>