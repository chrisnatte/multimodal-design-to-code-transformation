<template>
  <div class="flex h-20 items-center gap-6 border-b border-surface-200 px-6 whitespace-nowrap">
    <IconField class="w-[13.5rem]">
      <InputIcon class="pi pi-search text-surface-400" />
      <InputText v-model="username" class="!h-8 w-full !pl-9" aria-label="Benutzer suchen" />
    </IconField>

    <InputGroup class="w-[18.25rem]">
      <InputGroupAddon class="w-9 !p-0">
        <Button
          icon="pi pi-minus"
          text
          severity="secondary"
          class="!h-8 !w-9 !rounded-none"
          aria-label="Alter verringern"
          @click="decreaseAge"
        />
      </InputGroupAddon>
      <InputText
        v-model="age"
        placeholder="Alter eingeben"
        class="!h-8 w-full !rounded-none"
        aria-label="Alter eingeben"
      />
      <InputGroupAddon class="w-9 !p-0">
        <Button
          icon="pi pi-plus"
          text
          severity="secondary"
          class="!h-8 !w-9 !rounded-none"
          aria-label="Alter erhöhen"
          @click="increaseAge"
        />
      </InputGroupAddon>
    </InputGroup>

    <Divider layout="vertical" class="!m-0 !h-6" />

    <div class="flex items-center gap-3">
      <ToggleSwitch v-model="showInformation" input-id="information" />
      <label for="information" class="text-sm text-surface-900">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" class="!m-0 !h-6" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-one" name="option" value="one" />
        <label for="option-one" class="text-sm text-surface-600">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-two" name="option" value="two" />
        <label for="option-two" class="text-sm text-surface-600">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton v-model="disabledOption" input-id="option-three" name="disabled-option" value="three" disabled />
        <label for="option-three" class="text-sm text-surface-500">Option1</label>
      </div>
    </div>

    <Button
      label="Suche"
      icon="pi pi-check"
      icon-pos="right"
      severity="success"
      size="small"
      class="!h-8"
      @click="search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('Benutzer1')
const age = ref('')
const showInformation = ref(true)
const selectedOption = ref('two')
const disabledOption = ref('')
const searchSubmitted = ref(false)

const decreaseAge = () => {
  const currentAge = Number(age.value)
  if (!Number.isNaN(currentAge) && currentAge > 0) {
    age.value = String(currentAge - 1)
  }
}

const increaseAge = () => {
  const currentAge = Number(age.value)
  age.value = String(Number.isNaN(currentAge) ? 1 : currentAge + 1)
}

const search = () => {
  searchSubmitted.value = true
}
</script>