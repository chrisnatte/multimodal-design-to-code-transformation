<template>
  <div class="flex items-center gap-6 p-2">
    <InputText v-model="username" placeholder="Benutzer1">
      <template #default />
    </InputText>

    <div class="relative">
      <InputText v-model="username2" placeholder="Benutzer1" class="pl-8" />
      <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
    </div>

    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      placeholder="Alter eingeben"
      inputClass="w-48"
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
        <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
        <label for="option2" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" disabled />
        <label for="option3" class="text-sm text-gray-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
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
const username2 = ref('Benutzer1');
const age = ref(null);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>