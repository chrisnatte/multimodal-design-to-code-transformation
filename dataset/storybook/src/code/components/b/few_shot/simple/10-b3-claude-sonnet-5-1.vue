<template>
  <div class="flex w-fit items-center gap-6 p-6">
    <InputText v-model="username" placeholder="Benutzername" icon-position="left" class="w-[216px]">
      <template #default />
    </InputText>
    <IconField class="w-[216px]">
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzername" />
    </IconField>

    <InputNumber
      v-model="age"
      show-buttons
      button-layout="horizontal"
      placeholder="Alter eingeben"
      decrement-button-class="!bg-black"
      increment-button-class="!bg-black"
      mode="currency"
      currency="USD"
      class="w-[292px]"
    />

    <Divider layout="vertical" type="dashed" class="!mx-0 h-6" />

    <div class="flex items-center gap-4">
      <ToggleSwitch v-model="showInfo" input-id="show-info" />
      <label for="show-info">Informationen einblenden</label>
    </div>

    <Divider layout="vertical" type="dashed" class="!mx-0 h-6" />

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" input-id="option1" value="Option1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" input-id="option2" value="Option2" />
        <label for="option2">Option2</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" input-id="option3" value="Option3" disabled />
        <label for="option3">Option3</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
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
  const age = ref(20)
  const showInfo = ref(true)
  const option = ref('Option2')
</script>