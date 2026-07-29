<template>
  <div class="flex flex-col bg-white p-6">
    <div class="flex items-center gap-6 whitespace-nowrap">
      <IconField iconPosition="left" class="w-[216px]">
        <InputIcon class="pi pi-search" />
        <InputText
          v-model="username"
          class="h-[33px] w-full text-sm"
          aria-label="Benutzer suchen"
        />
      </IconField>

      <InputNumber
        v-model="age"
        placeholder="Alter eingeben"
        showButtons
        buttonLayout="horizontal"
        decrementButtonIcon="pi pi-minus"
        incrementButtonIcon="pi pi-plus"
        class="w-[292px]"
        inputClass="h-[33px] w-[224px] text-sm"
        decrementButtonClass="h-[33px] w-[35px]"
        incrementButtonClass="h-[33px] w-[35px]"
        aria-label="Alter eingeben"
      />

      <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInformation" inputId="information-toggle" />
        <label for="information-toggle" class="text-sm">
          Informationen einblenden
        </label>
      </div>

      <Divider layout="vertical" type="dashed" class="!mx-0 !h-6" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option1"
            name="options"
            value="option1"
          />
          <label for="option1" class="text-sm">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option2"
            name="options"
            value="option2"
          />
          <label for="option2" class="text-sm">Option2</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option3"
            name="options"
            value="option3"
            disabled
          />
          <label for="option3" class="text-sm">Option3</label>
        </div>
      </div>

      <Button
        label="Suche"
        icon="pi pi-check"
        iconPos="right"
        class="h-[33px] text-sm"
      />
    </div>
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

const username = ref('Benutzer1')
const age = ref(null)
const showInformation = ref(true)
const selectedOption = ref('option2')
</script>