<template>
  <div class="flex items-center gap-4 p-3">
    <InputText v-model="username" placeholder="Benutzer1" class="w-48">
      <template #default></template>
    </InputText>

    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-48" />
    </IconField>

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

    <Divider layout="vertical" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm text-gray-700">Informationen einblenden</span>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="1" name="options" />
      <span class="text-sm text-gray-500">Option1</span>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="2" name="options" />
      <span class="text-sm text-gray-700">Option1</span>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="3" name="options" />
      <span class="text-sm text-gray-500">Option1</span>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const username = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const option = ref('2');
</script>