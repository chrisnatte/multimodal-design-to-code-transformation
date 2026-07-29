<template>
  <div class="p-6 bg-white inline-block">
    <div class="flex items-center gap-6">
      <!-- Search InputText -->
      <IconField class="w-56">
        <InputIcon class="pi pi-search" />
        <InputText v-model="username" placeholder="Benutzer1" class="w-full" />
      </IconField>

      <!-- InputNumber with step buttons -->
      <InputNumber
        v-model="age"
        showButtons
        buttonLayout="horizontal"
        decrementButtonClass="p-button-secondary"
        incrementButtonClass="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        placeholder="Alter eingeben"
        class="w-72"
      />

      <Divider layout="vertical" type="dashed" />

      <!-- Toggle Switch -->
      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <span class="text-sm text-gray-900">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" />

      <!-- Radio buttons -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
          <label for="option1" class="text-sm text-gray-900">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
          <label for="option2" class="text-sm text-gray-900">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" disabled />
          <label for="option3" class="text-sm text-gray-400">Option1</label>
        </div>
      </div>

      <!-- Search Button -->
      <Button label="Suche" icon="pi pi-check" iconPos="right" />
    </div>
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

const username = ref('Benutzer1')
const age = ref(null)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>