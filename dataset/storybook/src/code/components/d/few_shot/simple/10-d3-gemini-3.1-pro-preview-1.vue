<template>
  <div class="flex w-max items-center gap-6 bg-white p-6">
    <!-- Search Input -->
    <div class="relative flex items-center">
      <i class="pi pi-search absolute left-3 text-gray-400"></i>
      <InputText v-model="search" placeholder="Benutzer1" class="w-[216px] pl-10" />
    </div>

    <!-- Age Input -->
    <InputNumber
      v-model="age"
      show-buttons
      button-layout="horizontal"
      placeholder="Alter eingeben"
      class="w-[292px]"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

    <!-- Toggle Switch -->
    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" input-id="showInfo" />
      <label for="showInfo" class="text-sm text-gray-800">Informationen einblenden</label>
    </div>

    <!-- Divider -->
    <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

    <!-- Radio Buttons -->
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt1" value="opt1" />
        <label for="opt1" class="text-sm text-gray-800">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt2" value="opt2" />
        <label for="opt2" class="text-sm text-gray-800">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt3" value="opt3" disabled />
        <label for="opt3" class="text-sm text-gray-400">Option1</label>
      </div>
    </div>

    <!-- Submit Button -->
    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
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

  const search = ref('')
  const age = ref(null)
  const showInfo = ref(true)
  const selectedOption = ref('opt2')
</script>