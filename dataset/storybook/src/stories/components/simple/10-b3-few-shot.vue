<template>
  <div class="flex items-center gap-6">
    <InputText
      v-model="form.username"
      placeholder="Placeholder"
      fluid
    />

    <InputNumber
      v-model="form.amount"
      placeholder="Alter eingeben"
      mode="currency"
      currency="USD"
      showButtons
      buttonLayout="horizontal"
    />

    <Divider layout="vertical" type="dashed" class="self-stretch" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="form.showInfo" />
      <span>Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="self-stretch" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.option" inputId="option1" name="options" value="Option1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.option" inputId="option2" name="options" value="Option2" />
        <label for="option2">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="form.option" inputId="option3" name="options" value="Option3" disabled />
        <label for="option3" class="opacity-60">Option3</label>
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
  option: 'Option2'
})
</script>