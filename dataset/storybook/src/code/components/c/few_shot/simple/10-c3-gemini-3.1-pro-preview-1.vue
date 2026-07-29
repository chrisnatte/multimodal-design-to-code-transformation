<template>
  <div class="flex items-center gap-6 p-4">
    <div class="relative">
      <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
      <InputText v-model="username" placeholder="Benutzer1" class="pl-10" />
    </div>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      showButtons
      buttonLayout="horizontal"
      :step="1"
      class="w-48"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" inputId="show-info" />
      <label for="show-info" class="text-sm">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1-1" value="Option1-1" />
        <label for="option1-1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1-2" value="Option1-2" />
        <label for="option1-2" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" inputId="option1-3" value="Option1-3" disabled />
        <label for="option1-3" class="text-sm text-surface-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="primary" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const username = ref('')
const age = ref<number | null>(null)
const showInfo = ref(true)
const selectedOption = ref('Option1-2')
</script>