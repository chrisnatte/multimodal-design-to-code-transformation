<template>
  <div class="flex w-max items-center gap-6 bg-white p-6">
    <IconField icon-position="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="search" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      show-buttons
      button-layout="horizontal"
      placeholder="Alter eingeben"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      :step="1"
      class="w-56"
    />

    <Divider layout="vertical" type="dashed" class="!mx-0" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" input-id="show-info" />
      <label for="show-info" class="text-sm text-surface-700">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!mx-0" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt1" value="1" />
        <label for="opt1" class="text-sm text-surface-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt2" value="2" />
        <label for="opt2" class="text-sm text-surface-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt3" value="3" disabled />
        <label for="opt3" class="text-sm text-surface-700">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const search = ref('')
const age = ref<number | null>(null)
const showInfo = ref(true)
const selectedOption = ref('2')
</script>