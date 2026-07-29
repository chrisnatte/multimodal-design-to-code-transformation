<template>
  <div class="flex items-center gap-6 p-6">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" class="w-[216px]" />
    </IconField>

    <InputNumber
      v-model="age"
      show-buttons
      button-layout="horizontal"
      placeholder="Alter eingeben"
      :input-style="{ width: '224px' }"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" />
      <span class="text-sm">Informationen einblenden</span>
    </div>

    <Divider layout="vertical" type="dashed" />

    <div class="flex items-center gap-4">
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
    </div>

    <Button label="Suche" severity="primary" icon-pos="right" icon="pi pi-check" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import InputText from 'primevue/inputtext'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputNumber from 'primevue/inputnumber'
  import RadioButton from 'primevue/radiobutton'
  import ToggleSwitch from 'primevue/toggleswitch'

  const username = ref('Benutzer1')
  const age = ref<number | null>(null)
  const showInfo = ref(true)
  const selectedOption = ref('Option2')
</script>