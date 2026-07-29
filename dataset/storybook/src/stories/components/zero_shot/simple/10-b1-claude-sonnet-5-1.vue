<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-center gap-6">
      <InputText
        v-model="username"
        placeholder="Benutzer1"
        class="w-[216px]"
      >
        <template #prefix>
          <i class="pi pi-search"></i>
        </template>
      </InputText>

      <InputNumber
        v-model="age"
        showButtons
        buttonLayout="horizontal"
        placeholder="Alter eingeben"
        class="w-[292px]"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
      >
        <template #incrementbuttonicon>
          <i class="pi pi-plus"></i>
        </template>
        <template #decrementbuttonicon>
          <i class="pi pi-minus"></i>
        </template>
      </InputNumber>

      <Divider layout="vertical" type="dashed" class="h-6" />

      <div class="flex flex-row items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <span class="text-sm">Informationen einblenden</span>
      </div>

      <Divider layout="vertical" type="dashed" class="h-6" />

      <div class="flex flex-row items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option1"
            value="Option1"
          />
          <label for="option1" class="text-sm">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option2"
            value="Option2"
          />
          <label for="option2" class="text-sm">Option2</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            inputId="option3"
            value="Option3"
            disabled
          />
          <label for="option3" class="text-sm">Option3</label>
        </div>
      </div>

      <Button label="Suche" iconPos="right">
        <template #icon>
          <i class="pi pi-check"></i>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const username = ref('Benutzer1')
const age = ref(null)
const showInfo = ref(true)
const selectedOption = ref('Option2')
</script>