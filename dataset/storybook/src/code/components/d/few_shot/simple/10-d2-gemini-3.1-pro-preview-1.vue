<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex flex-row items-center gap-6">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText v-model="username" placeholder="Benutzer1" />
      </IconField>

      <InputNumber
        v-model="age"
        show-buttons
        button-layout="horizontal"
        placeholder="Alter eingeben"
        :step="1"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-4">
        <ToggleSwitch v-model="showInfo" input-id="info-switch" />
        <label for="info-switch" class="text-sm">Informationen einblenden</label>
      </div>

      <Divider layout="vertical" type="dashed" class="!m-0 !h-6" />

      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt1" value="Option1" />
        <label for="opt1" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt2" value="Option2" />
        <label for="opt2" class="text-sm">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="selectedOption" input-id="opt3" value="Option3" disabled />
        <label for="opt3" class="text-sm text-surface-500">Option1</label>
      </div>

      <Button label="Suche" icon="pi pi-check" icon-pos="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import IconField from 'primevue/iconfield'
  import InputIcon from 'primevue/inputicon'
  import InputText from 'primevue/inputtext'
  import InputNumber from 'primevue/inputnumber'
  import RadioButton from 'primevue/radiobutton'
  import ToggleSwitch from 'primevue/toggleswitch'

  const username = ref('')
  const age = ref(null)
  const showInfo = ref(true)
  const selectedOption = ref('Option2')
</script>