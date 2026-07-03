<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2.5 px-2.5 py-2">
      <span class="pi pi-search text-sm" />
      <InputText v-model="state.username" />
    </div>

    <InputNumber
      v-model="state.amount"
      showButtons
      buttonLayout="horizontal"
      :step="0.01"
      mode="currency"
      currency="USD"
      locale="en-US"
      placeholder="Alter eingeben"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="self-stretch" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="state.showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="self-stretch" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.option" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.option" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-sm">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.option" inputId="option3" name="options" value="Option3" disabled />
        <label for="option3" class="text-sm">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const state = reactive({
  username: 'Benutzer1',
  amount: 20,
  showInfo: true,
  option: 'Option2'
});
</script>