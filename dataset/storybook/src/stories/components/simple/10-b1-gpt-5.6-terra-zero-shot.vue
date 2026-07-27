<template>
  <div class="flex items-center gap-6">
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText
        v-model="username"
        class="!h-[33px] !w-full !text-sm"
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
      class="w-[292px] [&_.p-inputtext]:!h-[33px] [&_.p-inputtext]:!text-sm [&_.p-inputnumber-button]:!h-[33px] [&_.p-inputnumber-button]:!w-[35px]"
      aria-label="Alter eingeben"
    />

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !w-[9px]" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" class="!h-[21px] !w-[35px]" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !w-[9px]" />

    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          inputId="option1"
          name="option"
          value="Option1"
        />
        <label for="option1" class="text-sm">Option1</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton
          v-model="selectedOption"
          inputId="option2"
          name="option"
          value="Option2"
        />
        <label for="option2" class="text-sm">Option2</label>
      </div>

      <div class="flex items-center gap-2">
        <RadioButton
          v-model="disabledOption"
          inputId="option3"
          name="disabled-option"
          value="Option3"
          disabled
        />
        <label for="option3" class="text-sm">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" class="!h-[33px]" />
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
const selectedOption = ref('Option2')
const disabledOption = ref(null)
</script>