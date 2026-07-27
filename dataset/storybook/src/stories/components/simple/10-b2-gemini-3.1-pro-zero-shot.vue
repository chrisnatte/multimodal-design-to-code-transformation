<template>
  <div class="flex flex-row items-center gap-6">
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="textValue" placeholder="Placeholder" />
    </IconField>

    <InputNumber 
      v-model="numberValue" 
      showButtons 
      buttonLayout="horizontal" 
      placeholder="Alter eingeben"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" />

    <div class="flex flex-row items-center gap-4">
      <ToggleSwitch v-model="switchValue" />
      <span class="font-sans text-sm font-normal">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt1" value="Option1" />
      <label for="opt1" class="font-sans text-sm font-normal">Option1</label>
    </div>
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt2" value="Option2" />
      <label for="opt2" class="font-sans text-sm font-normal">Option2</label>
    </div>
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt3" value="Option3" disabled />
      <label for="opt3" class="font-sans text-sm font-normal">Option3</label>
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

const textValue = ref('Benutzer1');
const numberValue = ref(20);
const switchValue = ref(true);
const radioValue = ref('Option2');
</script>