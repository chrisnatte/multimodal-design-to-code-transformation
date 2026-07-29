<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-center gap-6">
      <InputText v-model="searchText" placeholder="Label" class="w-56">
        <template #default />
      </InputText>

      <InputNumber
        v-model="age"
        showButtons
        buttonLayout="horizontal"
        mode="currency"
        currency="USD"
        placeholder="Alter eingeben"
        class="w-72"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <Divider layout="vertical" type="dashed" class="h-6" />

      <div class="flex flex-row items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <span class="text-sm">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" class="h-6" />

      <div class="flex flex-row items-center gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" value="Option1" inputId="option1" name="options" />
          <label for="option1" class="text-sm">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" value="Option2" inputId="option2" name="options" />
          <label for="option2" class="text-sm">Option2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" value="Option3" inputId="option3" name="options" disabled />
          <label for="option3" class="text-sm">Option3</label>
        </div>
      </div>

      <Button label="Suche" iconPos="right">
        <template #icon>
          <i class="pi pi-check" />
        </template>
      </Button>
    </div>
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

const searchText = ref('Benutzer1');
const age = ref(20);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>