<template>
  <div class="flex items-center gap-6 p-6 bg-white w-fit">
    <!-- Search Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <!-- Age Input -->
    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
    />

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" class="!h-8 !m-0" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" inputId="infoSwitch" />
      <label for="infoSwitch" class="text-sm text-gray-700 cursor-pointer">Informationen einblenden</label>
    </div>

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" class="!h-8 !m-0" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt1" value="1" />
      <label for="opt1" class="text-sm text-gray-700 cursor-pointer">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt2" value="2" />
      <label for="opt2" class="text-sm text-gray-700 cursor-pointer">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt3" value="3" disabled />
      <label for="opt3" class="text-sm text-gray-400">Option1</label>
    </div>

    <!-- Submit Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
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

const username = ref('');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('2');
</script>