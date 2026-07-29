<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex items-center gap-6">
      <InputText v-model="searchValue" placeholder="Placeholder" class="w-56">
        <template #default />
      </InputText>

      <InputNumber
        v-model="age"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        prefix="$"
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

      <Divider layout="vertical" type="dashed" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <span class="text-sm">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" />

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

      <Button label="Suche" icon="pi pi-check" iconPos="right" />
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

const searchValue = ref('Benutzer1');
const age = ref(20);
const showInfo = ref(true);
const selectedOption = ref('Option2');
</script>