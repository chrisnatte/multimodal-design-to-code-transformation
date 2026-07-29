<template>
  <div class="flex w-full items-center gap-6 bg-white p-6">
    <InputText
      v-model="username"
      placeholder="Benutzer1"
      class="h-[33px] w-[216px]"
    >
      <template #prepend>
        <i class="pi pi-search"></i>
      </template>
    </InputText>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      :use-grouping="false"
      show-buttons
      button-layout="horizontal"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      class="h-[33px] w-[292px]"
      input-class="h-[33px] w-full"
      decrement-button-class="!h-[33px] !w-[35px]"
      increment-button-class="!h-[33px] !w-[35px]"
    />

    <Divider layout="vertical" class="!m-0 !h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" class="h-[21px] w-[35px]" />
      <label class="text-sm text-surface-900">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="!m-0 !h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-one" value="option-one" />
      <label for="option-one" class="text-sm text-surface-700">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-two" value="option-two" />
      <label for="option-two" class="text-sm text-surface-700">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton
        v-model="selectedOption"
        input-id="option-three"
        value="option-three"
        disabled
      />
      <label for="option-three" class="text-sm text-surface-700">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" class="h-[33px]" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('Benutzer1')
const age = ref(null)
const showInformation = ref(true)
const selectedOption = ref('option-two')
</script>