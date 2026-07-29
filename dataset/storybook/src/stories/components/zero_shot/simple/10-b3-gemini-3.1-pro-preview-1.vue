<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-center gap-6">
      
      <!-- InputText with Left Icon -->
      <div class="relative flex items-center">
        <i class="pi pi-search absolute left-3 text-gray-400"></i>
        <InputText v-model="username" placeholder="Placeholder" class="pl-10" />
      </div>

      <!-- InputNumber Horizontal -->
      <InputNumber 
        v-model="age" 
        showButtons 
        buttonLayout="horizontal" 
        placeholder="Alter eingeben" 
        mode="currency" 
        currency="USD"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <!-- Vertical Divider -->
      <Divider layout="vertical" type="dashed" class="!h-6 !m-0" />

      <!-- ToggleSwitch Row -->
      <div class="flex flex-row items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <span class="text-sm font-normal font-sans text-gray-900">Informationen einblenden</span>
      </div>

      <!-- Vertical Divider -->
      <Divider layout="vertical" type="dashed" class="!h-6 !m-0" />

      <!-- RadioButtons -->
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt1" value="Option1" />
        <label for="opt1" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt2" value="Option2" />
        <label for="opt2" class="text-sm font-normal font-sans text-gray-900 cursor-pointer">Option2</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="opt3" value="Option3" disabled />
        <label for="opt3" class="text-sm font-normal font-sans text-gray-400 cursor-not-allowed">Option3</label>
      </div>

      <!-- Button -->
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

const username = ref('Benutzer1');
const age = ref(20);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>