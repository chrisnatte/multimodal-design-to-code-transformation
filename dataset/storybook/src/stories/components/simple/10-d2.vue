<template>
  <div class="w-full bg-[#f5f7fb] p-6">
    <div class="flex items-center gap-6">
      <div class="relative w-[216px]">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <InputText
          v-model="state.user"
          placeholder="Benutzer1"
          class="w-full pl-9"
        />
      </div>

      <InputNumber
        v-model="state.age"
        placeholder="Alter eingeben"
        :useGrouping="false"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        class="w-[292px]"
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
        <ToggleSwitch v-model="state.showInfo" inputId="show-info" />
        <label for="show-info" class="text-[24px] leading-none sr-only">Informationen einblenden</label>
        <span class="text-[26px] leading-none text-slate-800">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" class="h-8" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option1" name="options" value="option1" />
          <label for="option1" class="text-slate-700">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option2" name="options" value="option2" />
          <label for="option2" class="text-slate-700">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.option" inputId="option3" name="options" value="option3" disabled />
          <label for="option3" class="text-slate-400">Option1</label>
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
  option: 'option2'
})
</script>