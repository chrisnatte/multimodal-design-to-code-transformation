<template>
  <div class="flex h-20 items-center gap-6 border-b border-slate-100 bg-white px-6">
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search text-sm text-slate-400" />
      <InputText
        v-model="user"
        class="h-[33px] w-full text-sm"
        aria-label="Benutzer"
      />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      :use-grouping="false"
      show-buttons
      button-layout="horizontal"
      decrement-button-icon="pi pi-minus"
      increment-button-icon="pi pi-plus"
      class="w-[292px]"
      input-class="h-[33px] text-sm"
      decrement-button-class="h-[33px] w-[35px]"
      increment-button-class="h-[33px] w-[35px]"
      aria-label="Alter eingeben"
    />

    <Divider
      layout="vertical"
      class="!mx-0 !h-6 [&.p-divider-vertical:before]:border-dashed"
    />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information" class="text-sm text-slate-900">
        Informationen einblenden
      </label>
    </div>

    <Divider
      layout="vertical"
      class="!mx-0 !h-6 [&.p-divider-vertical:before]:border-dashed"
    />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          input-id="option-one"
          name="options"
          value="option-one"
        />
        <label for="option-one" class="text-sm text-slate-600">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          input-id="option-two"
          name="options"
          value="option-two"
        />
        <label for="option-two" class="text-sm text-slate-600">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          input-id="option-three"
          name="options"
          value="option-three"
          disabled
        />
        <label for="option-three" class="text-sm text-slate-600">Option1</label>
      </div>
    </div>

    <Button
      label="Suche"
      icon="pi pi-check"
      icon-pos="right"
      class="!h-[33px] !bg-emerald-500 !px-3 !text-sm !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const user = ref('Benutzer1')
const age = ref(null)
const showInformation = ref(true)
const selectedOption = ref('option-two')
</script>