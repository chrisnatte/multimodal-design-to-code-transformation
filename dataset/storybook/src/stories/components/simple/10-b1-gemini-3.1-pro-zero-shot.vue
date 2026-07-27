<template>
  <div class="flex flex-row items-center gap-6">
    <!-- Search Input -->
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="searchText" placeholder="Placeholder" />
    </IconField>

    <!-- Age InputNumber -->
    <InputNumber 
      v-model="age" 
      showButtons 
      buttonLayout="horizontal" 
      placeholder="Alter eingeben" 
      decrementButtonIcon="pi pi-minus" 
      incrementButtonIcon="pi pi-plus" 
    />

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" />

    <!-- Toggle Switch Row -->
    <div class="flex flex-row items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm font-normal font-sans text-surface-700">Informationen einblenden</span>
    </div>

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
      <label for="option1" class="text-sm font-normal font-sans text-surface-700">Option1</label>
    </div>
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
      <label for="option2" class="text-sm font-normal font-sans text-surface-700">Option2</label>
    </div>
    
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" disabled />
      <label for="option3" class="text-sm font-normal font-sans text-surface-400">Option3</label>
    </div>

    <!-- Submit Button -->
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

const searchText = ref('Benutzer1')
const age = ref(20)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>