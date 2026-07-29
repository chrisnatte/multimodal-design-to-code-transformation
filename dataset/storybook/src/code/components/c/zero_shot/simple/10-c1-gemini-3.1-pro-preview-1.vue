<template>
  <div class="flex items-center gap-6 p-4 bg-white">
    <!-- User Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-48" />
    </IconField>

    <!-- Age Input -->
    <InputNumber 
      v-model="age" 
      showButtons 
      buttonLayout="horizontal" 
      placeholder="Alter eingeben" 
      decrementButtonIcon="pi pi-minus" 
      incrementButtonIcon="pi pi-plus"
      class="w-48"
    />

    <!-- Divider -->
    <div class="h-8 border-l border-dashed border-gray-300"></div>

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" />
      <label class="text-gray-700 text-sm">Informationen einblenden</label>
    </div>

    <!-- Divider -->
    <div class="h-8 border-l border-dashed border-gray-300"></div>

    <!-- Radio Buttons -->
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="val1" />
        <label for="opt1" class="text-gray-700 text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="val2" />
        <label for="opt2" class="text-gray-700 text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="val3" disabled />
        <label for="opt3" class="text-gray-400 text-sm">Option1</label>
      </div>
    </div>

    <!-- Search Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const username = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('val2');
</script>