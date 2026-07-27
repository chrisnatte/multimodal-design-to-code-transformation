<template>
  <div class="flex flex-row items-center gap-6">
    <InputText v-model="inputTextValue" placeholder="Placeholder" />

    <InputNumber
      v-model="inputNumberValue"
      showButtons
      buttonLayout="horizontal"
      mode="currency"
      currency="USD"
      placeholder="Alter eingeben"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" />

    <div class="flex flex-row items-center gap-4">
      <ToggleSwitch v-model="toggleValue" />
      <span class="text-sm font-normal font-sans">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt1" value="Option1" />
      <label for="opt1" class="text-sm font-normal font-sans">Option1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt2" value="Option2" />
      <label for="opt2" class="text-sm font-normal font-sans">Option2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="radioValue" inputId="opt3" value="Option3" disabled />
      <label for="opt3" class="text-sm font-normal font-sans">Option3</label>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const inputTextValue = ref('Benutzer1')
const inputNumberValue = ref(20.00)
const toggleValue = ref(true)
const radioValue = ref('Option2')
</script>