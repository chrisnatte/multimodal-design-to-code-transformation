<template>
  <div class="w-full bg-[#f3f3f3] px-6 py-6">
    <div class="flex items-center gap-6">
      <div class="w-56">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="form.user" fluid placeholder="Benutzer1" />
        </IconField>
      </div>

      <div class="flex items-center">
        <Button icon="pi pi-minus" variant="outlined" class="!rounded-r-none !border-r-0 !w-9 !h-8" />
        <InputText
          v-model="form.age"
          placeholder="Alter eingeben"
          class="!w-56 !h-8 !rounded-none"
        />
        <Button icon="pi pi-plus" variant="outlined" class="!rounded-l-none !border-l-0 !w-9 !h-8" />
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-3">
        <ToggleSwitch v-model="form.showInfo" />
        <span class="text-[26px] leading-none">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <RadioButton v-model="form.optionA" :value="true" />
          <span class="text-[28px] leading-none text-slate-700">Option1</span>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="form.optionB" :value="true" />
          <span class="text-[28px] leading-none text-slate-700">Option1</span>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="form.optionC" :value="true" disabled />
          <span class="text-[28px] leading-none text-slate-700">Option1</span>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" iconPos="right" class="!px-5 !py-2 !text-[28px]" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const form = reactive({
  user: 'Benutzer1',
  age: '',
  showInfo: true,
  optionA: false,
  optionB: true,
  optionC: false
})
</script>