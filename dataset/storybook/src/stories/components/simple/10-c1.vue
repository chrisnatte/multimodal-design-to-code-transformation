<template>
  <div class="w-full bg-[#f5f7fa] px-6 py-6">
    <div class="flex items-center gap-6">
      <div class="w-56">
        <IconField class="w-full">
          <InputIcon class="pi pi-search" />
          <InputText
            v-model="state.user"
            placeholder="Benutzer1"
            class="w-full"
          />
        </IconField>
      </div>

      <div class="flex items-center rounded-md border border-slate-300 overflow-hidden">
        <Button
          icon="pi pi-minus"
          text
          severity="secondary"
          class="!rounded-none !px-3 !py-2"
          @click="decrementAge"
        />
        <InputText
          v-model="state.age"
          placeholder="Alter eingeben"
          class="!border-0 !shadow-none w-56"
        />
        <Button
          icon="pi pi-plus"
          text
          severity="secondary"
          class="!rounded-none !px-3 !py-2 border-l border-slate-300"
          @click="incrementAge"
        />
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-3">
        <InputSwitch v-model="state.showInfo" />
        <label class="text-slate-700">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" class="!h-8" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.optionA" inputId="optA1" name="optA" :value="false" />
          <label for="optA1" class="text-slate-700">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.optionB" inputId="optB1" name="optB" :value="true" />
          <label for="optB1" class="text-slate-700">option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.optionC" inputId="optC1" name="optC" :value="false" />
          <label for="optC1" class="text-slate-700">Option1</label>
        </div>
      </div>

      <Button
        label="Suche"
        icon="pi pi-check"
        iconPos="right"
        class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600 !px-6"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputSwitch from 'primevue/inputswitch'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const state = reactive({
  user: 'Benutzer1',
  age: '',
  showInfo: true,
  optionA: false,
  optionB: true,
  optionC: false
})

const incrementAge = () => {
  const n = Number(state.age)
  state.age = Number.isNaN(n) ? '1' : String(n + 1)
}

const decrementAge = () => {
  const n = Number(state.age)
  if (Number.isNaN(n)) {
    state.age = ''
    return
  }
  state.age = String(Math.max(0, n - 1))
}
</script>