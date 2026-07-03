<template>
  <div class="flex gap-6 items-center">
    <InputText placeholder="Placeholder" v-model="_state.n11_5663" />
    <InputNumber
      buttonLayout="horizontal"
      v-model="_state.n11_5696"
      showButtons
      placeholder="Alter eingeben"
     />
    <Divider layout="vertical" type="dashed" />
    <div class="flex gap-4 items-center">
      <ToggleSwitch v-model="_state.n11_5637" />
      <span class="text-sm">Informationen einblenden</span>
    </div>
    <Divider layout="vertical" type="dashed" />
    <RadioButton v-model="_state.n11_5814" value="option1" />
    <RadioButton v-model="_state.n11_5818" value="option1" />
    <RadioButton
      v-model="_state.n11_5822"
      value="option1"
      :disabled="true"
     />
    <Button label="Suche" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'

const _state = reactive({ n11_5663: null, n11_5696: null, n11_5637: null, n11_5814: null, n11_5818: null, n11_5822: null })
</script>
