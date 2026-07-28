<template>
  <div class="flex items-center gap-6">
    <IconField>
      <InputIcon class="pi pi-search text-surface-500" />
      <InputText v-model="searchValue" />
    </IconField>

    <InputNumber v-model="ageValue" placeholder="Alter eingeben" showButtons buttonLayout="horizontal" />

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="infoToggle" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option1" inputId="option1" />
      <label for="option1" class="text-sm">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option2" inputId="option2" />
      <label for="option2" class="text-sm">Option2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" name="options" value="Option3" inputId="option3" disabled />
      <label for="option3" class="text-sm text-gray-400">Option3</label>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const searchValue = ref('Benutzer1')
const ageValue = ref(null)
const infoToggle = ref(true)
const selectedOption = ref('Option2')
</script>