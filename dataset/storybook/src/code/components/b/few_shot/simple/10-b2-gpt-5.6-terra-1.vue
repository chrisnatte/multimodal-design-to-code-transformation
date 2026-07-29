<template>
  <div class="flex w-full flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <IconField class="w-[216px]">
        <InputIcon class="pi pi-search" />
        <InputText v-model="searchTerm" placeholder="Benutzer suchen" fluid />
      </IconField>

      <InputNumber
        v-model="age"
        input-id="age"
        placeholder="Alter eingeben"
        show-buttons
        button-layout="horizontal"
        :step="1"
        class="w-[292px]"
        fluid
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInformation" input-id="show-information" />
        <label for="show-information">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            input-id="option-1"
            name="filter-option"
            value="Option1"
          />
          <label for="option-1">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            input-id="option-2"
            name="filter-option"
            value="Option2"
          />
          <label for="option-2">Option2</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="selectedOption"
            input-id="option-3"
            name="filter-option"
            value="Option3"
            disabled
          />
          <label for="option-3">Option3</label>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" icon-pos="right" type="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const searchTerm = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('Option2')
</script>