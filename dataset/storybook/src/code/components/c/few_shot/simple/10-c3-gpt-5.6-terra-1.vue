<template>
  <div class="flex h-20 items-center gap-6 border-b border-slate-100 px-6">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-[216px]" size="small" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      :use-grouping="false"
      show-buttons
      button-layout="horizontal"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      class="w-[294px]"
      input-class="w-full"
      size="small"
    />

    <Divider layout="vertical" class="!mx-1 !h-6" />

    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information" class="text-sm text-slate-700">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="!mx-1 !h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-one" value="one" />
      <label for="option-one" class="text-sm text-slate-700">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-two" value="two" />
      <label for="option-two" class="text-sm text-slate-700">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option-three" value="three" disabled />
      <label for="option-three" class="text-sm text-slate-700">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="success" size="small" />
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
const selectedOption = ref('two')
</script>