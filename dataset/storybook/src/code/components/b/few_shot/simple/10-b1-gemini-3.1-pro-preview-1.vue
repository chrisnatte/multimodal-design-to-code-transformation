<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex items-center gap-6">
      <IconField iconPosition="left">
        <InputIcon class="pi pi-search" />
        <InputText v-model="search" placeholder="Placeholder" />
      </IconField>

      <InputNumber v-model="age" showButtons buttonLayout="horizontal" placeholder="Alter eingeben" />

      <Divider layout="vertical" type="dashed" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" inputId="showInfo" />
        <label for="showInfo" class="text-sm text-gray-700">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" type="dashed" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
        <label for="option1" class="text-sm text-gray-700">Option1</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
        <label for="option2" class="text-sm text-gray-700">Option2</label>
      </div>
      
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" value="Option3" disabled />
        <label for="option3" class="text-sm text-gray-700">Option3</label>
      </div>

      <Button label="Suche" icon="pi pi-check" iconPos="right" />
    </div>
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

const search = ref('Benutzer1')
const age = ref(20)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>