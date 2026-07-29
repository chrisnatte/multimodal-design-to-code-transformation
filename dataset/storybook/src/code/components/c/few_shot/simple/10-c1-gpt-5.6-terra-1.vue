<template>
  <div class="flex h-20 items-center gap-6 px-6">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" class="w-[216px]" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      :min="0"
      class="w-[292px]"
      input-class="w-[214px]"
    />

    <Divider layout="vertical" class="!h-6" />

    <div class="flex items-center gap-3">
      <InputSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information" class="text-sm whitespace-nowrap">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="!h-6" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-one" value="option-one" />
        <label for="option-one" class="text-sm">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-two" value="option-two" />
        <label for="option-two" class="text-sm">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-three" value="option-three" disabled />
        <label for="option-three" class="text-sm text-surface-500">Option1</label>
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
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'

const username = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('option-two')
</script>