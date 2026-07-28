<template>
  <div class="flex items-center gap-4 p-4">
    <InputText v-model="username" placeholder="Benutzer1" class="w-48">
      <template #default></template>
    </InputText>

    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-48" />
    </IconField>

    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      inputClass="w-32"
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
      <span>Informationen einblenden</span>
    </div>

    <Divider layout="vertical" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt1" name="option" value="Option1" />
      <label for="opt1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt2" name="option" value="Option2" />
      <label for="opt2">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="opt3" name="option" value="Option3" />
      <label for="opt3">Option1</label>
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
const selectedOption = ref('Option2');
</script>