<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-6">
      <InputText v-model="username" icon-left="pi pi-search" placeholder="Benutzer suchen" class="w-56" />
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
      <Divider layout="vertical" type="dashed" />
      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" input-id="show-info" />
        <label for="show-info">Informationen einblenden</label>
      </div>
      <Divider layout="vertical" type="dashed" />
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option1" name="option" value="Option1" />
          <label for="option1">Option1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option2" name="option" value="Option2" />
          <label for="option2">Option2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="selectedOption" input-id="option3" name="option" value="Option3" disabled />
          <label for="option3">Option3</label>
        </div>
      </div>
      <Button label="Suche" icon-pos="right">
        <template #icon>
          <span class="pi pi-check" />
        </template>
      </Button>
    </div>
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

  const username = ref('Benutzer1')
  const age = ref(20)
  const showInfo = ref(true)
  const selectedOption = ref('Option2')
</script>