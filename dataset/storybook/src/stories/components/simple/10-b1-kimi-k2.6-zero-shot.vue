<template>
  <div class="inline-flex items-center gap-6">
    <IconField class="w-54">
      <InputIcon class="pi pi-search" />
      <InputText v-model="searchText" placeholder="Placeholder" class="w-full" />
    </IconField>

    <InputNumber v-model="numberValue" showButtons buttonLayout="horizontal" placeholder="Alter eingeben" class="w-[292px]" />

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="inline-flex items-center gap-4">
      <ToggleSwitch v-model="infoEnabled" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="inline-flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option1" inputId="option1" />
      <label for="option1" class="text-sm cursor-pointer">Option1</label>
    </div>

    <div class="inline-flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option2" inputId="option2" />
      <label for="option2" class="text-sm cursor-pointer">Option2</label>
    </div>

    <div class="inline-flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option3" inputId="option3" disabled />
      <label for="option3" class="text-sm cursor-pointer">Option3</label>
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

const searchText = ref('Benutzer1');
const numberValue = ref(20);
const infoEnabled = ref(true);
const selectedOption = ref('Option2');
</script>