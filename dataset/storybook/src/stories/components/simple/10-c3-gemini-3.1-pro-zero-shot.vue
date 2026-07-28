<template>
  <div class="flex items-center gap-6 p-4 bg-white w-max font-sans">
    <!-- Search Input -->
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-gray-400 z-10"></i>
      <InputText 
        v-model="username" 
        placeholder="Benutzer1" 
        class="pl-10 w-48" 
      />
    </div>

    <!-- Age Input -->
    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      class="w-56"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus text-gray-500" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus text-gray-500" />
      </template>
    </InputNumber>

    <!-- Divider -->
    <Divider layout="vertical" type="dotted" class="!h-8 !m-0 !border-gray-300" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm text-gray-800">Informationen einblenden</span>
    </div>

    <!-- Divider -->
    <Divider layout="vertical" type="dotted" class="!h-8 !m-0 !border-gray-300" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="option1" />
        <label for="opt1" class="text-sm text-gray-700 cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="option2" />
        <label for="opt2" class="text-sm text-gray-700 cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="option3" disabled />
        <label for="opt3" class="text-sm text-gray-400 cursor-not-allowed">Option1</label>
      </div>
    </div>

    <!-- Submit Button -->
    <Button 
      label="Suche" 
      icon="pi pi-check" 
      iconPos="right" 
      severity="success" 
      class="!px-5 !py-2 !font-medium" 
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
const selectedOption = ref('option2');
</script>