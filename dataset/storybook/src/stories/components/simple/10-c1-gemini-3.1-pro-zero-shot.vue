<template>
  <div class="flex items-center gap-6 p-4 bg-white font-sans">
    <!-- Search Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search text-gray-400" />
      <InputText v-model="searchQuery" placeholder="Benutzer1" class="w-48" />
    </IconField>

    <!-- Age Input -->
    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      decrementButtonIcon="pi pi-minus"
      incrementButtonIcon="pi pi-plus"
      class="w-56"
    />

    <!-- Divider -->
    <div class="border-l border-dashed border-gray-200 h-8"></div>

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-gray-800 text-sm">Informationen einblenden</span>
    </div>

    <!-- Divider -->
    <div class="border-l border-dashed border-gray-200 h-8"></div>

    <!-- Radio Buttons -->
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="opt1" />
        <label for="opt1" class="text-gray-800 text-sm cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="opt2" />
        <label for="opt2" class="text-gray-800 text-sm cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="opt3" disabled />
        <label for="opt3" class="text-gray-400 text-sm">Option1</label>
      </div>
    </div>

    <!-- Submit Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" class="ml-auto" />
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

const searchQuery = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('opt2');
</script>