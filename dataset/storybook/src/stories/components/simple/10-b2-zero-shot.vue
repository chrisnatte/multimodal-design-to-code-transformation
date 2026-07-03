<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2.5 px-2.5 py-2 w-full max-w-64">
      <span class="pi pi-search text-color-secondary"></span>
      <InputText v-model="state.username" placeholder="Placeholder" class="w-full" />
    </div>

    <InputNumber
      v-model="state.amount"
      mode="currency"
      currency="USD"
      locale="en-US"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      class="w-full max-w-64"
      fluid
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-10" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="state.showInfo" inputId="show-info" />
      <label for="show-info" class="text-sm">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="h-10" />

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
        <label for="option3" class="text-sm text-color-secondary">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import ToggleSwitch from 'primevue/toggleswitch';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const state = reactive({
  username: 'Benutzer1',
  amount: 20,
  showInfo: true,
  option: 'Option2'
});
</script>