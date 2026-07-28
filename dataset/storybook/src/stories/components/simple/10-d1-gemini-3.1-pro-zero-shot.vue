<template>
  <div class="flex items-center gap-6 p-4">
    <!-- Search Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="searchQuery" placeholder="Benutzer1" class="w-[216px]" />
    </IconField>

    <!-- Number Input -->
    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
      class="w-[292px]"
    />

    <!-- Vertical Divider -->
    <Divider layout="vertical" type="dashed" class="!my-0 h-6" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" inputId="infoToggle" />
      <label for="infoToggle" class="text-sm text-surface-700 dark:text-surface-0">
        Informationen einblenden
      </label>
    </div>

    <!-- Vertical Divider -->
    <Divider layout="vertical" type="dashed" class="!my-0 h-6" />

    <!-- Radio Group -->
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" value="option1" />
        <label for="option1" class="text-sm text-surface-700 dark:text-surface-0">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" value="option2" />
        <label for="option2" class="text-sm text-surface-700 dark:text-surface-0">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" value="option3" disabled />
        <label for="option3" class="text-sm text-surface-400 dark:text-surface-500">Option1</label>
      </div>
    </div>

    <!-- Primary Button -->
    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const searchQuery = ref('')
const age = ref(null)
const showInfo = ref(true)
const selectedOption = ref('option2')
</script>