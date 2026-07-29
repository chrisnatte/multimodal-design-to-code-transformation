<template>
  <div class="flex items-center gap-4 p-3">
    <InputText v-model="username" placeholder="Benutzer1" icon="pi pi-search">
      <template #default>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
        </span>
      </template>
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
      :min="0"
      :max="120"
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
      <ToggleSwitch v-model="showInfo" />
      <label>Informationen einblenden</label>
    </div>

    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option1" name="option" value="Option1" />
      <label for="option1">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option2" name="option" value="Option2" />
      <label for="option2">Option1</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton v-model="option" input-id="option3" name="option" value="Option3" />
      <label for="option3">Option1</label>
    </div>

    <Button label="Suche" icon="pi pi-check" severity="success" />
  </div>
</template>

<script setup>
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
  const age = ref(null)
  const showInfo = ref(true)
  const option = ref('Option2')
</script>