<template>
  <div class="flex items-center gap-6 bg-white px-6 py-6">
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
      class="w-[292px]"
      :min="0"
    />

    <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option1" value="Option1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option2" value="Option2" />
        <label for="option2">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option3" value="Option3" disabled />
        <label for="option3">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
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
const selectedOption = ref('Option2')
</script>