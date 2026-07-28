<template>
  <div class="flex items-center gap-6 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      :step="1"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" disabled />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" disabled />
        <label for="option3">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
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

const username = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>