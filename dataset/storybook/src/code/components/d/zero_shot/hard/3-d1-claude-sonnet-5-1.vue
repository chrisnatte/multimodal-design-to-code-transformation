<template>
  <div class="p-6 bg-white flex flex-row gap-8 items-start">
    <!-- Zielort -->
    <div class="flex flex-col gap-0.5" style="width: 216px;">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="zielort"
        :options="zielortOptions"
        optionLabel="label"
        optionValue="value"
        filter
        filterPlaceholder="Suche..."
        placeholder="Zielort auswählen"
        class="w-full"
      />
    </div>

    <!-- Reisezeitraum -->
    <div class="flex flex-col gap-0.5" style="width: 268px;">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="reisezeitraum"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-full"
        showIcon
      />
    </div>

    <!-- Personen -->
    <div class="flex flex-col gap-0.5" style="width: 192px;">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="personen"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
        decrementButtonClass="p-button-secondary"
        incrementButtonClass="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        class="w-full"
      />
    </div>

    <!-- Suche Button -->
    <div class="flex items-end" style="height: 60px;">
      <Button label="Suche" @click="onSearch" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const zielort = ref(null)
const zielortOptions = ref([
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
])

const reisezeitraum = ref(null)
const personen = ref(2)

function onSearch() {
  console.log('Suche', {
    zielort: zielort.value,
    reisezeitraum: reisezeitraum.value,
    personen: personen.value
  })
}
</script>