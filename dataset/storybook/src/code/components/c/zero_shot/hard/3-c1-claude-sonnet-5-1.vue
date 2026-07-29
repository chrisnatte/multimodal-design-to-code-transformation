<template>
  <div class="flex flex-wrap items-start gap-8 p-6">
    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="zielort"
        :options="zielortOptions"
        optionLabel="label"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="reisezeitraum"
        placeholder="Reisezeitraum wählen"
        selectionMode="range"
        showIcon
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="personen"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-48"
      >
        <template #incrementbuttonicon>
          <i class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <i class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <div class="flex items-end pt-6">
      <Button label="Suche" severity="success" />
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
</script>