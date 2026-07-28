<template>
  <div class="flex items-center gap-6 p-2">
    <IconField iconPosition="left">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      placeholder="Alter eingeben"
      class="w-72"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-6" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" name="option" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" name="option" value="Option2" />
        <label for="option2" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" name="option" value="Option3" disabled />
        <label for="option3" class="text-sm text-gray-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" iconPos="right">
      <template #icon>
        <span class="pi pi-check" />
      </template>
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'
import InputNumber from 'primevue/inputnumber'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const username = ref('Benutzer1')
const age = ref(null)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>