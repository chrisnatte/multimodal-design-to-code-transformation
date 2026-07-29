<template>
  <div class="flex items-center gap-4 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      :input-style="{ width: '140px' }"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Divider layout="vertical" class="!h-8" />

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" />
      <span>Informationen einblenden</span>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option1" name="option" value="1" />
      <label for="option1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option2" name="option" value="2" />
      <label for="option2">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option3" name="option" value="3" />
      <label for="option3">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputText from 'primevue/inputtext'
  import InputNumber from 'primevue/inputnumber'
  import Divider from 'primevue/divider'
  import ToggleSwitch from 'primevue/toggleswitch'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const username = ref('Benutzer1')
  const age = ref<number | null>(null)
  const showInfo = ref(true)
  const option = ref('2')
</script>