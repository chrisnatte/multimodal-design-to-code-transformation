<template>
  <div class="p-6 bg-white flex flex-col w-fit">
    <div class="flex flex-row items-center gap-6">
      <!-- Search Input -->
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchQuery" placeholder="Benutzer1" class="w-[216px]" />
      </IconField>

      <!-- Age Input -->
      <InputNumber
        v-model="age"
        showButtons
        buttonLayout="horizontal"
        placeholder="Alter eingeben"
        decrementButtonIcon="pi pi-minus"
        incrementButtonIcon="pi pi-plus"
        class="w-[292px]"
      />

      <!-- Divider -->
      <Divider layout="vertical" type="dashed" class="!m-0 h-6" />

      <!-- Toggle Switch -->
      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" inputId="info-toggle" />
        <label for="info-toggle" class="text-sm font-normal text-surface-700 cursor-pointer">
          Informationen einblenden
        </label>
      </div>

      <!-- Divider -->
      <Divider layout="vertical" type="dashed" class="!m-0 h-6" />

      <!-- Radio Buttons -->
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="option1" />
        <label for="opt1" class="text-sm font-normal text-surface-700 cursor-pointer">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="option2" />
        <label for="opt2" class="text-sm font-normal text-surface-700 cursor-pointer">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="option3" disabled />
        <label for="opt3" class="text-sm font-normal text-surface-400">Option1</label>
      </div>

      <!-- Submit Button -->
      <Button label="Suche" icon="pi pi-check" iconPos="right" class="w-[86px]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const searchQuery = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('option2');
</script>