<template>
  <div class="flex items-center gap-4 p-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="username" placeholder="Benutzer1" />
    </IconField>

    <InputGroup>
      <Button icon="pi pi-minus" outlined @click="decrement" />
      <InputNumber v-model="age" placeholder="Alter eingeben" :showButtons="false" />
      <Button icon="pi pi-plus" outlined @click="increment" />
    </InputGroup>

    <div class="flex items-center gap-2">
      <ToggleSwitch v-model="showInfo" />
      <span>Informationen einblenden</span>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" inputId="option1" name="option" value="1" />
        <label for="option1">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" inputId="option2" name="option" value="2" />
        <label for="option2">Option1</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="option" inputId="option3" name="option" value="3" />
        <label for="option3">Option1</label>
      </div>
    </div>

    <Button label="Suche" icon="pi pi-check" severity="success" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import InputGroup from 'primevue/inputgroup'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'

const username = ref('Benutzer1')
const age = ref(null)
const showInfo = ref(true)
const option = ref('2')

const increment = () => {
  age.value = (age.value || 0) + 1
}
const decrement = () => {
  age.value = (age.value || 0) - 1
}
</script>