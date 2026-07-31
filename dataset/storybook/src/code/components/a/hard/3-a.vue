<template>
  <div class="flex flex-col gap-2.5 p-6">
    <div class="flex gap-8">
      <div class="flex flex-col gap-2">
        <label>Zielort</label>
        <Select
          v-model="_state.n28_2213"
          :options="_options_n28_2213"
          placeholder="Zielort auswählen"
         />
      </div>
      <DatePicker v-model="_state.n28_2263" />
      <InputNumber
        buttonLayout="horizontal"
        v-model="_state.n28_3053"
        showButtons
        value="2"
       />
      <div class="flex flex-col gap-2.5 items-end justify-end">
        <Button label="Suche" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const _state = reactive({ n28_2213: null, n28_2263: null, n28_3053: null })
</script>
