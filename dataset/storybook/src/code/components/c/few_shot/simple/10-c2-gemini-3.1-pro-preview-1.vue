<template>
  <div class="flex w-full items-center gap-6 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="search" placeholder="Benutzer1" />
    </IconField>

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

    <Divider layout="vertical" type="dashed" class="!m-0 !h-8" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="info" input-id="info-switch" />
      <label for="info-switch" class="text-sm text-surface-700">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!m-0 !h-8" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioOpt" input-id="opt1" value="opt1" />
        <label for="opt1" class="text-sm text-surface-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioOpt" input-id="opt2" value="opt2" />
        <label for="opt2" class="text-sm text-surface-700">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="radioOpt" input-id="opt3" value="opt3" disabled />
        <label for="opt3" class="text-sm text-surface-400">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" iconPos="right" severity="success" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputNumber from 'primevue/inputnumber'
  import Divider from 'primevue/divider'
  import ToggleSwitch from 'primevue/toggleswitch'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const search = ref('')
  const age = ref(null)
  const info = ref(true)
  const radioOpt = ref('opt2')
</script>