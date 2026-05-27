<template>
  <div class="flex items-center gap-6">
    <div class="flex items-center">
      <span class="pi pi-search text-slate-500 mr-2"></span>
      <InputText v-model="state.username" placeholder="Placeholder" />
    </div>

    <InputNumber
      v-model="state.amount"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      fluid
    />

    <Divider layout="vertical" type="dashed" class="h-8" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="state.showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="h-8" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selectedOption" inputId="option1" name="options" value="Option1" />
        <label for="option1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selectedOption" inputId="option2" name="options" value="Option2" />
        <label for="option2" class="text-sm">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.selectedOption" inputId="option3" name="options" value="Option3" disabled />
        <label for="option3" class="text-sm text-slate-400">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  username: 'Benutzer1',
  amount: 20,
  showInfo: true,
  selectedOption: 'Option2'
})
</script>