<template>
  <div class="flex items-center gap-4 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :min="0"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="option1" inputId="opt1" />
      <label for="opt1" class="text-sm">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="option2" inputId="opt2" />
      <label for="opt2" class="text-sm">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" value="option3" inputId="opt3" />
      <label for="opt3" class="text-sm">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
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
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const username = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const option = ref('option2');
</script>