<template>
  <div
    class="flex w-full items-center gap-6 bg-white p-6 text-sm"
    style="
      --p-primary-color: #10b981;
      --p-primary-hover-color: #059669;
      --p-primary-active-color: #047857;
      --p-button-primary-background: #10b981;
      --p-button-primary-hover-background: #059669;
      --p-button-primary-active-background: #047857;
      --p-button-primary-border-color: #10b981;
      --p-button-primary-hover-border-color: #059669;
      --p-button-primary-active-border-color: #047857;
      --p-toggleswitch-checked-background: #10b981;
      --p-toggleswitch-checked-hover-background: #059669;
      --p-toggleswitch-checked-border-color: #10b981;
      --p-radiobutton-checked-background: #10b981;
      --p-radiobutton-checked-hover-background: #059669;
      --p-radiobutton-checked-border-color: #10b981;
    "
  >
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" class="!h-[33px] !w-full !text-sm" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      :use-grouping="false"
      show-buttons
      button-layout="horizontal"
      class="w-[292px]"
      input-class="!h-[33px] !text-sm"
      :pt="{
        incrementButton: { class: '!h-[33px] !w-[35px]' },
        decrementButton: { class: '!h-[33px] !w-[35px]' },
      }"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus !text-sm" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus !text-sm" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />

    <div class="flex items-center gap-4 whitespace-nowrap">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!m-0 !h-6 !p-0" />

    <div class="flex items-center gap-6 whitespace-nowrap">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-one" name="option" value="one" />
        <label for="option-one">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-two" name="option" value="two" />
        <label for="option-two">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="option-three" name="option" value="three" disabled />
        <label for="option-three">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" size="small" />
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

const username = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('two')
</script>