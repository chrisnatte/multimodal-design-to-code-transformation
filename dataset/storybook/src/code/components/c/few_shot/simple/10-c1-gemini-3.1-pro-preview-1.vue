<template>
  <div class="flex items-center gap-6 p-4">
    <!-- Search Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search text-gray-400" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-48" />
    </IconField>

    <!-- Number Input -->
    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      decrementButtonIcon="pi pi-minus"
      incrementButtonIcon="pi pi-plus"
      inputClass="w-32 text-center"
    />

    <!-- Divider -->
    <div class="h-8 border-l border-dashed border-gray-300"></div>

    <!-- Toggle Switch -->
    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInfo" inputId="info-switch" />
      <label for="info-switch" class="text-sm text-gray-800 cursor-pointer">Informationen einblenden</label>
    </div>

    <!-- Divider -->
    <div class="h-8 border-l border-dashed border-gray-300"></div>

    <!-- Radio Buttons -->
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="1" />
        <label for="opt1" class="text-sm text-gray-800 cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="2" />
        <label for="opt2" class="text-sm text-gray-800 cursor-pointer">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="3" disabled />
        <label for="opt3" class="text-sm text-gray-400">Option1</label>
      </div>
    </div>

    <!-- Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" class="ml-2" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const username = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('2');
</script>