<template>
  <div class="flex items-center gap-6 p-6 bg-white">
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText v-model="state.user" />
    </IconField>

    <InputNumber
      v-model="state.age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      inputClass="w-[220px]"
      class="w-[292px]"
    />

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="state.showInfo" />
      <label class="text-sm text-slate-800">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="h-8" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.option" inputId="opt1" name="options" value="opt1" />
        <label for="opt1" class="text-sm text-slate-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.option" inputId="opt2" name="options" value="opt2" />
        <label for="opt2" class="text-sm text-slate-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="state.optionDisabled" inputId="opt3" name="optionsDisabled" value="opt3" disabled />
        <label for="opt3" class="text-sm text-slate-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const state = reactive({
  user: 'Benutzer1',
  age: null,
  showInfo: true,
  option: 'opt2',
  optionDisabled: null
})
</script>