<template>
  <div class="flex items-center gap-6 p-6">
    <InputText v-model="username" placeholder="Benutzer1">
      <template #default />
    </InputText>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      decrement-icon="pi pi-minus"
      increment-icon="pi pi-plus"
      class="w-72"
    />

    <Divider layout="vertical" class="!mx-0 h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" class="!mx-0 h-6" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option1" value="Option1" />
      <label for="option1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option2" value="Option2" />
      <label for="option2">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="selectedOption" input-id="option3" value="Option3" disabled />
      <label for="option3">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
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

  const username = ref('Benutzer1')
  const age = ref<number | null>(null)
  const showInfo = ref(true)
  const selectedOption = ref('Option2')
</script>