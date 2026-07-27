<template>
  <div class="flex items-center gap-6">
    <InputText v-model="username" type="text" class="w-[216px]">
      <template #prefix>
        <i class="pi pi-search" />
      </template>
    </InputText>

    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      prefix="$"
      mode="currency"
      currency="USD"
      placeholder="Alter eingeben"
      class="w-[292px]"
      inputClass="text-center"
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

    <RadioButtonGroup v-model="selectedOption" class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton inputId="option1" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton inputId="option2" value="Option2" />
        <label for="option2" class="text-sm">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton inputId="option3" value="Option3" disabled />
        <label for="option3" class="text-sm">Option3</label>
      </div>
    </RadioButtonGroup>

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
import RadioButtonGroup from 'primevue/radiobuttongroup';
import Button from 'primevue/button';

const username = ref('Benutzer1');
const age = ref(20);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>