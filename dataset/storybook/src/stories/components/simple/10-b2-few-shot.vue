<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2">
      <span class="pi pi-search text-surface-500"></span>
      <InputText v-model="form.username" placeholder="Placeholder" />
    </div>

    <InputNumber
      v-model="form.amount"
      showButtons
      buttonLayout="horizontal"
      :step="0.25"
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

    <Divider layout="vertical" type="dashed" class="h-8" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="form.showInfo" inputId="show-info" />
      <label for="show-info">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="h-8" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.option" inputId="option1" name="options" value="Option1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.option" inputId="option2" name="options" value="Option2" />
        <label for="option2">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.optionDisabled" inputId="option3" name="options-disabled" value="Option3" disabled />
        <label for="option3">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const form = reactive({
  username: 'Benutzer1',
  amount: 20,
  showInfo: true,
  option: 'Option2',
  optionDisabled: null
})
</script>