<template>
  <div class="flex w-full flex-col bg-white p-6">
    <div class="flex flex-wrap items-center gap-6">
      <InputGroup class="w-[216px]">
        <InputGroupAddon>
          <i class="pi pi-search" />
        </InputGroupAddon>
        <InputText v-model="searchTerm" aria-label="Benutzer suchen" />
      </InputGroup>

      <InputNumber
        v-model="age"
        input-id="age"
        placeholder="Alter eingeben"
        show-buttons
        button-layout="horizontal"
        decrement-button-icon="pi pi-minus"
        increment-button-icon="pi pi-plus"
        class="w-[292px]"
        input-class="w-full"
      />

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInformation" input-id="show-information" />
        <label for="show-information">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-1" name="options" value="Option1" />
          <label for="option-1">Option1</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-2" name="options" value="Option2" />
          <label for="option-2">Option2</label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-3" name="options" value="Option3" disabled />
          <label for="option-3">Option3</label>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" icon-pos="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const searchTerm = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('Option2')
</script>