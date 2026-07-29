<template>
  <div class="flex h-20 items-center gap-6 px-6">
    <div class="relative w-[216px]">
      <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-400" />
      <InputText v-model="username" aria-label="Benutzer suchen" class="w-full !py-2 !pl-9 text-sm" />
    </div>

    <InputNumber
      v-model="age"
      input-id="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      :min="0"
      class="w-[292px]"
      input-class="!w-full !py-2 text-sm"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus text-sm" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus text-sm" />
      </template>
    </InputNumber>

    <Divider layout="vertical" class="!mx-1 !h-6" />

    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information" class="text-sm text-surface-700">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="!mx-1 !h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-one" name="options" value="one" />
      <label for="option-one" class="text-sm text-surface-600">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-two" name="options" value="two" />
      <label for="option-two" class="text-sm text-surface-600">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-three" name="options" value="three" disabled />
      <label for="option-three" class="text-sm text-surface-600">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="success" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('two')
</script>