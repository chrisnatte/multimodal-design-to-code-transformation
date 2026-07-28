<template>
  <div class="flex items-center gap-4 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="searchQuery" class="w-48" />
    </IconField>

    <InputGroup class="w-64">
      <Button icon="pi pi-minus" severity="secondary" type="button" />
      <InputText v-model="ageValue" placeholder="Alter eingeben" />
      <Button icon="pi pi-plus" severity="secondary" type="button" />
    </InputGroup>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" inputId="toggle" />
      <label for="toggle">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" value="opt1" inputId="r1" />
        <label for="r1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" value="opt2" inputId="r2" />
        <label for="r2">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioValue" value="opt3" inputId="r3" disabled />
        <label for="r3" class="text-gray-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputGroup from 'primevue/inputgroup'
import Button from 'primevue/button'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const searchQuery = ref('Benutzer1')
const ageValue = ref('')
const showInfo = ref(true)
const radioValue = ref('opt2')
</script>