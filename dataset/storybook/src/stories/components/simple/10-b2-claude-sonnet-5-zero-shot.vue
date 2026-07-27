<template>
  <div class="flex items-center gap-6">
    <InputText v-model="username" type="text" class="w-[216px]">
      <template #default />
    </InputText>

    <IconField iconPosition="left" class="w-[216px]" v-if="false" />

    <div class="relative w-[216px]">
      <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10"></i>
      <InputText v-model="username" type="text" class="w-full pl-8" />
    </div>

    <InputNumber
      v-model="price"
      showButtons
      buttonLayout="horizontal"
      mode="currency"
      currency="USD"
      locale="en-US"
      :step="1"
      class="w-[292px]"
      inputId="price-input"
      placeholder="Alter eingeben"
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
      <span>Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="options" value="Option1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="options" value="Option3" disabled />
        <label for="option3">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="primary" />
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
const price = ref(20);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>