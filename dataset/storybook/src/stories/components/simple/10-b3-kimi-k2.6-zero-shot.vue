<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2.5 border border-gray-300 rounded-md px-2.5 py-1.5 bg-white w-54">
      <i class="pi pi-search text-gray-500 text-sm" />
      <InputText v-model="inputTextValue" placeholder="Placeholder" class="border-none shadow-none focus:ring-0 p-0 w-full bg-transparent" />
    </div>

    <InputNumber v-model="inputNumberValue" showButtons buttonLayout="horizontal" />

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="toggleValue" inputId="toggleInfo" />
      <label for="toggleInfo" class="text-sm">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option1" inputId="option1" />
      <label for="option1" class="text-sm">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option2" inputId="option2" />
      <label for="option2" class="text-sm">Option2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" value="Option3" inputId="option3" disabled />
      <label for="option3" class="text-sm text-gray-400">Option3</label>
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

const inputTextValue = ref('Benutzer1');
const inputNumberValue = ref(null);
const toggleValue = ref(true);
const radioValue = ref('Option2');
</script>