<template>
  <div class="w-full bg-white p-6">
    <div class="flex items-center gap-6">
      <div class="relative w-[216px]">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <InputText v-model="state.user" class="w-full pl-9" />
      </div>

      <InputNumber
        v-model="state.age"
        placeholder="Alter eingeben"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        :useGrouping="false"
        class="w-[292px]"
      />

      <Divider layout="vertical" type="dashed" class="h-8 m-0" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="state.showInfo" />
        <span class="text-sm text-slate-800">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" class="h-8 m-0" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="opt1" name="option" value="Option1" />
          <label for="opt1" class="text-sm text-slate-700">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="opt2" name="option" value="Option2" />
          <label for="opt2" class="text-sm text-slate-700">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="opt3" name="option" value="Option3" disabled />
          <label for="opt3" class="text-sm text-slate-400">Option1</label>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" iconPos="right" />
    </div>
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
  user: 'Benutzer1',
  age: null,
  showInfo: true,
  option: 'Option2'
})
</script>