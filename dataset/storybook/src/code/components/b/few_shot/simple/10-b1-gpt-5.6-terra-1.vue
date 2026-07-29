<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <IconField class="w-[216px]">
        <InputIcon class="pi pi-search" />
        <InputText v-model="username" placeholder="Benutzer suchen" class="w-full" />
      </IconField>

      <InputNumber
        v-model="age"
        placeholder="Alter eingeben"
        :use-grouping="false"
        show-buttons
        button-layout="horizontal"
        decrement-button-icon="pi pi-minus"
        increment-button-icon="pi pi-plus"
        class="w-[292px]"
        input-class="w-full"
      />

      <Divider layout="vertical" class="!mx-0 !h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInformation" input-id="show-information" />
        <label for="show-information" class="text-sm">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" class="!mx-0 !h-6" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-1" value="Option1" />
          <label for="option-1" class="text-sm">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-2" value="Option2" />
          <label for="option-2" class="text-sm">Option2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option-3" value="Option3" disabled />
          <label for="option-3" class="text-sm text-surface-400">Option3</label>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
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

const username = ref('Benutzer1')
const age = ref<number | null>(null)
const showInformation = ref(true)
const selectedOption = ref('Option2')
</script>