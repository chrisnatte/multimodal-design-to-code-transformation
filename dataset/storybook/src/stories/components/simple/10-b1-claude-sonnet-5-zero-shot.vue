<template>
  <div class="flex items-center gap-6 p-0">
    <!-- inputtext with search icon -->
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Placeholder" class="w-full" />
    </IconField>

    <!-- inputnumber horizontal with step -->
    <InputNumber
      v-model="age"
      showButtons
      buttonLayout="horizontal"
      mode="currency"
      currency="USD"
      placeholder="Alter eingeben"
      class="w-[292px]"
      decrementButtonClassName="p-button-secondary"
      incrementButtonClassName="p-button-secondary"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option2" value="Option2" />
        <label for="option2" class="text-sm">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option3" value="Option3" disabled />
        <label for="option3" class="text-sm">Option3</label>
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
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const username = ref('Benutzer1')
const age = ref(20)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>