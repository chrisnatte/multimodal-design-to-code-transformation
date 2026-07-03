<template>
  <div class="flex flex-wrap items-center gap-6">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="search" inputId="search-input" placeholder="Nach Name suchen" />
    </IconField>

    <InputNumber
      v-model="age"
      placeholder="Alter eingeben"
      show-buttons
      button-layout="horizontal"
      increment-icon="pi pi-plus"
      decrement-icon="pi pi-minus"
    />

    <Divider type="dashed" layout="vertical" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInformation" input-id="show-information" />
      <label for="show-information">Informationen einblenden</label>
    </div>

    <Divider type="dashed" layout="vertical" />

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option1" name="group" value="option1" />
      <label for="option1">Option 1</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option2" name="group" value="option2" />
      <label for="option2">Option 2</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="selected" input-id="option3" name="group" value="option3" />
      <label for="option3">Option 3</label>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import InputIcon from 'primevue/inputicon'
  import IconField from 'primevue/iconfield'
  import InputNumber from 'primevue/inputnumber'
  import Divider from 'primevue/divider'
  import ToggleSwitch from 'primevue/toggleswitch'
  import RadioButton from 'primevue/radiobutton'
  import Button from 'primevue/button'

  const search = ref('Benutzer1')
  const age = ref<number>()
  const showInformation = ref(true)
  const selected = ref('option2')
</script>
