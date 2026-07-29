<template>
  <div class="flex w-fit flex-col p-6">
    <div class="flex items-center gap-6">
      <InputText v-model="username" placeholder="Benutzer1" class="w-[216px]">
        <template #default>
          <i class="pi pi-search" />
        </template>
      </InputText>
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="username" placeholder="Benutzer1" class="w-[216px]" />
      </IconField>

      <InputNumber
        v-model="age"
        placeholder="Alter eingeben"
        show-buttons
        button-layout="horizontal"
        prefix="$"
        class="w-[292px]"
        input-class="w-full"
        decrement-button-class="p-button-secondary"
        increment-button-class="p-button-secondary"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <Divider layout="vertical" type="dashed" class="!mx-0 h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" />
        <label>Informationen einblenden</label>
      </div>

      <Divider layout="vertical" type="dashed" class="!mx-0 h-6" />

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option1" name="options" value="Option1" />
          <label for="option1">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option2" name="options" value="Option2" />
          <label for="option2">Option2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option3" name="options" value="Option3" disabled />
          <label for="option3">Option3</label>
        </div>
      </div>

      <Button label="Suche" icon="pi pi-check" icon-pos="right" severity="primary" />
    </div>
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
  const age = ref(20)
  const showInfo = ref(true)
  const selectedOption = ref('Option2')
</script>