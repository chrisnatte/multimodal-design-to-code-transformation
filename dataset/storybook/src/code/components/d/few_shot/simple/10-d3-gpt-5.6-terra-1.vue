<template>
  <div class="flex items-center gap-6 bg-white p-6">
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" fluid />
    </IconField>

    <InputNumber
      v-model="age"
      input-id="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      :use-grouping="false"
      class="w-[292px]"
      input-class="w-full"
    />

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information" class="whitespace-nowrap text-sm">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-1" name="option" value="option-1" />
        <label for="option-1" class="text-sm">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-2" name="option" value="option-2" />
        <label for="option-2" class="text-sm">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          input-id="option-3"
          name="option"
          value="option-3"
          disabled
        />
        <label for="option-3" class="text-sm">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('option-2')
</script>